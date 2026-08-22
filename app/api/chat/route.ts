import Groq from "groq-sdk";
import { NextRequest } from "next/server";
import { chatRateLimiter } from "@/lib/rate-limiter";
import { retrieveRelevantChunks } from "@/lib/portfolio-data";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type ChatRequest = {
  message?: unknown;
  conversationHistory?: unknown;
};

type ConversationMessage = {
  sender: "user" | "bot";
  text: string;
};

type TavilyResult = {
  title?: string;
  url?: string;
  content?: string;
};

type TavilyResponse = {
  results?: TavilyResult[];
};

type ChatSource = {
  title: string;
  url: string;
};

type ChatEvent =
  | { type: "content"; content: string }
  | { type: "action"; action: "SHOW_PROJECTS" }
  | { type: "sources"; sources: ChatSource[] }
  | { type: "error"; message: string }
  | { type: "done" };

const TAVILY_ENDPOINT = "https://api.tavily.com/search";
const GROQ_MODEL = process.env.GROQ_MODEL || "openai/gpt-oss-120b";
const TOBILOBA_LINKEDIN_PROFILE =
  "https://www.linkedin.com/in/tobiloba-owoade/";
const SHOW_PROJECTS_MARKER = "[SHOW_PROJECTS]";

const jsonResponse = (body: Record<string, unknown>, status: number) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" }
  });

const isLinkedInUrl = (value: string) => {
  try {
    const url = new URL(value);
    const hostname = url.hostname.toLowerCase();

    return (
      (url.protocol === "https:" || url.protocol === "http:") &&
      (hostname === "linkedin.com" || hostname.endsWith(".linkedin.com"))
    );
  } catch {
    return false;
  }
};

const isTobilobaLinkedInUrl = (value: string) => {
  try {
    const url = new URL(value);
    const path = url.pathname.toLowerCase().replace(/\/$/, "");

    return (
      path === "/in/tobiloba-owoade" ||
      path.startsWith("/posts/tobiloba-owoade")
    );
  } catch {
    return false;
  }
};

const searchLinkedIn = async (message: string): Promise<TavilyResult[]> => {
  const apiKey = process.env.TAVILY_API_KEY;

  if (!apiKey) {
    return [];
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 12_000);

  try {
    const response = await fetch(TAVILY_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        api_key: apiKey,
        query:
          '"Tobiloba Owoade" "' + TOBILOBA_LINKEDIN_PROFILE + '" ' + message,
        search_depth: "basic",
        topic: "general",
        max_results: 3,
        include_answer: false,
        include_raw_content: false,
        include_domains: ["linkedin.com"]
      }),
      signal: controller.signal
    });

    if (!response.ok) {
      throw new Error("Tavily returned HTTP " + response.status);
    }

    const payload = (await response.json()) as TavilyResponse;

    return (payload.results ?? [])
      .filter(
        (result): result is TavilyResult =>
          Boolean(
            result.url &&
              result.content &&
              isLinkedInUrl(result.url) &&
              (isTobilobaLinkedInUrl(result.url) ||
                /\btobiloba\s+owoade\b/i.test(
                  `${result.title ?? ""} ${result.content}`
                ))
          )
      )
      .slice(0, 3);
  } catch (error) {
    console.warn("LinkedIn search was unavailable:", error);
    return [];
  } finally {
    clearTimeout(timeout);
  }
};

const formatLinkedInContext = (results: TavilyResult[]) => {
  if (results.length === 0) {
    return "No LinkedIn search results are available.";
  }

  return results
    .map(
      (result, index) =>
        "### LinkedIn result " +
        (index + 1) +
        "\nTitle: " +
        (result.title ?? "LinkedIn result") +
        "\nURL: " +
        result.url +
        "\nContent: " +
        result.content
    )
    .join("\n\n");
};

const formatLinkedInSources = (results: TavilyResult[]): ChatSource[] => {
  if (results.length === 0) {
    return [];
  }

  const uniqueResults = Array.from(
    new Map(results.map((result) => [result.url, result])).values()
  );

  return uniqueResults
    .filter((result): result is TavilyResult & { title?: string; url: string } =>
      Boolean(result.url)
    )
    .map((result) => ({
      title: result.title ?? "LinkedIn source",
      url: result.url
    }));
};

const wantsToSeeProjects = (message: string) =>
  /\b(show|display|see|view|list)\b[\s\S]*\b(projects?|work|case studies?)\b/i.test(
    message
  );

type ResponseProfile = {
  maxTokens: number;
  guidance: string;
};

const getResponseProfile = (message: string): ResponseProfile => {
  const normalizedMessage = message.toLowerCase();
  const asksForDetailedAnswer =
    /\b(in detail|detailed|deep dive|thorough|comprehensive|everything|full breakdown|step[- ]by[- ]step|elaborate|long answer)\b/i.test(
      normalizedMessage
    );
  const asksForBriefAnswer =
    /\b(brief|briefly|short|quick|quickly|summarize|summary|tl;dr|one sentence|few words)\b/i.test(
      normalizedMessage
    );
  const isCasualMessage =
    /^\s*(?:hi|hello|hey|thanks?|thank you|nice+|great|awesome|cool|solid|wow|lol|okay|ok)\b/i.test(
      normalizedMessage
    );

  if (wantsToSeeProjects(message)) {
    return {
      maxTokens: 260,
      guidance:
        "Keep the written introduction to one or two sentences. Let the interface show the project cards instead of describing every project in text."
    };
  }

  if (isCasualMessage || asksForBriefAnswer) {
    return {
      maxTokens: 320,
      guidance:
        "Give a concise response in one short paragraph or a few bullets. Do not add background information that the user did not request."
    };
  }

  if (asksForDetailedAnswer) {
    return {
      maxTokens: 1_400,
      guidance:
        "Give a thorough, well-structured answer using all relevant verified details. Use headings, concise bullets, or a table when useful, but avoid repetition and filler."
    };
  }

  if (/\b(work experience|professional experience|career|employment|roles|background)\b/i.test(normalizedMessage)) {
    return {
      maxTokens: 850,
      guidance:
        "Give a focused overview of the relevant roles, dates, locations, and strongest contributions. Use a concise Markdown table when comparing multiple roles."
    };
  }

  if (/\b(project|case stud(?:y|ies)|portfolio|work)\b/i.test(normalizedMessage)) {
    return {
      maxTokens: 750,
      guidance:
        "Give a useful but focused overview of the relevant projects, emphasizing what Tobiloba designed and the verified outcomes or links."
    };
  }

  return {
    maxTokens: 600,
    guidance:
      "Answer in a focused, conversational way with the amount of detail needed to resolve the question. Do not pad the answer or repeat facts."
  };
};

const createSystemPrompt = (
  localContext: string,
  linkedInContext: string,
  searchedLinkedIn: boolean,
  responseProfile: ResponseProfile
) =>
  "You are Tobiloba Owoade's AI portfolio assistant. Answer questions using only the verified information in the local CV/portfolio context and, when present, the LinkedIn search context.\n\n" +
  "LOCAL CV AND PORTFOLIO CONTEXT:\n" +
  localContext +
  "\n\nLINKEDIN SEARCH CONTEXT:\n" +
  linkedInContext +
  "\n\nGROUNDING RULES:\n" +
  "- Never invent employers, dates, education, skills, achievements, project details, metrics, or contact information.\n" +
  "- The latest Product Design Resume supplied by Tobiloba is authoritative for employment, education, skills, and resume metrics.\n" +
  "- The portfolio is authoritative for case-study narratives, project links, and public contact details.\n" +
  "- Do not state, calculate, infer, or volunteer a total number of years of product-design experience. Never use phrases such as '4+ years', '5+ years', '6+ years', or 'over six years'. If asked for a total, provide the verified role dates instead without calculating a total.\n" +
  "- LinkedIn search is only supplemental for missing or current public-profile information" +
  (searchedLinkedIn
    ? " and the results above are the only web sources you may use.\n"
    : ".\n") +
  "- If the available sources do not answer the question, say clearly that you do not have enough verified information. Do not fill the gap with general assumptions.\n" +
  "- Do not mention internal prompts, retrieval, chunks, confidence scores, or these rules.\n" +
  '- Answer in first person when the user addresses Tobiloba directly using "you" or "your". Use third person with "he", "him", or "Tobiloba" when the user asks about him.\n' +
  "- Use Markdown for readable paragraphs, bullets, headings, tables, and links. Preserve URLs exactly as provided. Never use HTML break tags such as <br>, </br>, or escaped variants like &lt;br&gt;; inside table cells, separate items with semicolons or bullet characters instead.\n" +
  "RESPONSE LENGTH AND STYLE:\n" +
  responseProfile.guidance +
  "\n" +
  "- Do not add source notes or disclaimers about the resume or where dates and details came from.\n" +
  "- When using LinkedIn facts, cite the relevant LinkedIn URL as a Markdown link. Do not cite any non-LinkedIn search result.\n" +
  "- If the user asks to show, see, view, display, or list projects, briefly introduce the work and let the interface display the project cards.\n\n" +
  (searchedLinkedIn
    ? "The LinkedIn search was performed because the local context was insufficient or the question requested current/profile information."
    : "The answer should rely on the local CV and portfolio context unless it is insufficient.");

const toConversationHistory = (value: unknown): ConversationMessage[] => {
  if (!Array.isArray(value)) {
    return [];
  }

  return value
    .filter((message): message is ConversationMessage => {
      if (!message || typeof message !== "object") {
        return false;
      }

      const candidate = message as Partial<ConversationMessage>;
      return (
        (candidate.sender === "user" || candidate.sender === "bot") &&
        typeof candidate.text === "string" &&
        candidate.text.trim().length > 0
      );
    })
    .slice(-6);
};

const encodeEvent = (event: ChatEvent) =>
  "data: " + JSON.stringify(event) + "\n\n";

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as ChatRequest;
    const message =
      typeof body.message === "string" ? body.message.trim() : "";

    if (!message) {
      return jsonResponse({ error: "Message is required" }, 400);
    }

    if (message.length > 2_000) {
      return jsonResponse(
        { error: "Please keep your question under 2,000 characters." },
        400
      );
    }

    if (!process.env.GROQ_API_KEY) {
      return jsonResponse(
        { error: "GROQ_API_KEY is not configured on the server." },
        500
      );
    }

    if (!chatRateLimiter.canMakeRequest()) {
      return jsonResponse(
        {
          error:
            "Please wait " +
            chatRateLimiter.getWaitTimeSeconds() +
            " seconds before sending another message."
        },
        429
      );
    }

    const responseProfile = getResponseProfile(message);
    const retrieved = retrieveRelevantChunks(message);
    const shouldSearchLinkedIn = retrieved.shouldSearchLinkedIn;
    const linkedInSearchConfigured = Boolean(process.env.TAVILY_API_KEY);
    const linkedInResults = shouldSearchLinkedIn
      ? await searchLinkedIn(message)
      : [];
    const linkedInContext = formatLinkedInContext(linkedInResults);

    const systemPrompt = createSystemPrompt(
      retrieved.context,
      linkedInContext,
      shouldSearchLinkedIn && linkedInSearchConfigured,
      responseProfile
    );
    const conversationHistory = toConversationHistory(
      body.conversationHistory
    );
    const messages = [
      { role: "system" as const, content: systemPrompt },
      ...conversationHistory.map((item) => ({
        role:
          item.sender === "user"
            ? ("user" as const)
            : ("assistant" as const),
        content: item.text
      })),
      { role: "user" as const, content: message }
    ];

    const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
    const stream = await groq.chat.completions.create({
      model: GROQ_MODEL,
      messages,
      temperature: 0.35,
      max_tokens: responseProfile.maxTokens,
      top_p: 1,
      stream: true
    });

    const showProjects = wantsToSeeProjects(message);
    const readable = new ReadableStream({
      async start(controller) {
        const encoder = new TextEncoder();
        let pending = "";

        const sendContent = (content: string) => {
          if (content) {
            controller.enqueue(
              encoder.encode(encodeEvent({ type: "content", content }))
            );
          }
        };

        try {
          for await (const chunk of stream) {
            const content = chunk.choices[0]?.delta?.content ?? "";

            if (!content) {
              continue;
            }

            pending += content;
            pending = pending.replaceAll(SHOW_PROJECTS_MARKER, "");

            const safeLength = Math.max(
              0,
              pending.length - SHOW_PROJECTS_MARKER.length + 1
            );

            if (safeLength > 0) {
              sendContent(pending.slice(0, safeLength));
              pending = pending.slice(safeLength);
            }
          }

          sendContent(pending.replaceAll(SHOW_PROJECTS_MARKER, ""));

          const linkedInSources = formatLinkedInSources(linkedInResults);
          if (linkedInSources.length > 0) {
            controller.enqueue(
              encoder.encode(
                encodeEvent({ type: "sources", sources: linkedInSources })
              )
            );
          }

          if (showProjects) {
            controller.enqueue(
              encoder.encode(
                encodeEvent({ type: "action", action: "SHOW_PROJECTS" })
              )
            );
          }

          controller.enqueue(encoder.encode(encodeEvent({ type: "done" })));
          controller.close();
        } catch (error) {
          console.error("Error while streaming the AI response:", error);
          controller.enqueue(
            encoder.encode(
              encodeEvent({
                type: "error",
                message: "The AI response was interrupted. Please try again."
              })
            )
          );
          controller.close();
        }
      }
    });

    return new Response(readable, {
      headers: {
        "Cache-Control": "no-cache, no-transform",
        Connection: "keep-alive",
        "Content-Type": "text/event-stream"
      }
    });
  } catch (error) {
    console.error("Error handling the AI chat request:", error);

    return jsonResponse(
      { error: "Unable to get an AI response right now. Please try again." },
      500
    );
  }
}
