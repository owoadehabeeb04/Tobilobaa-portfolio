"use client";

import React, { useEffect, useState } from "react";
import { Trash2 } from "lucide-react";
import AskAiHero from "@/components/ask-ai/askAiHero";
import ChatInput from "@/components/ask-ai/chatInput";
import ClearChatDialog from "@/components/ask-ai/clearChatDialog";
import SuggestionChips from "@/components/ask-ai/suggestionChips";
import {
  AssistantMessage,
  UserMessage,
  type ChatSource
} from "@/components/ask-ai/chatMessage";
import ProjectCard from "@/components/ui/project-card";
import { caseStudies } from "@/constants";

type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: string;
  action?: "SHOW_PROJECTS";
  sources?: ChatSource[];
  isStreaming?: boolean;
  error?: boolean;
};

type SseEvent =
  | { type: "content"; content: string }
  | { type: "action"; action: "SHOW_PROJECTS" }
  | { type: "sources"; sources: ChatSource[] }
  | { type: "error"; message: string }
  | { type: "done" };

const CHAT_STORAGE_KEY = "tobiloba-ask-ai-chat";

const formatTime = (date: Date) =>
  date
    .toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true
    })
    .replace(" ", "");

const createMessageId = () => {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }

  return String(Date.now()) + Math.random().toString(36).slice(2);
};

const restoreSources = (value: unknown): ChatSource[] => {
  if (!Array.isArray(value)) {
    return [];
  }

  return value.flatMap((item) => {
    if (!item || typeof item !== "object") {
      return [];
    }

    const candidate = item as Partial<ChatSource>;

    if (
      typeof candidate.title !== "string" ||
      typeof candidate.url !== "string" ||
      !candidate.url.startsWith("https://")
    ) {
      return [];
    }

    return [{ title: candidate.title, url: candidate.url }];
  });
};

const extractLegacySources = (content: string) => {
  const sourceBlock = content.match(
    /\n+Sources:\s*\n((?:\s*-\s*\[[^\]]+\]\(https?:\/\/[^)\n]+\)\s*\n?)+)\s*$/i
  );

  if (!sourceBlock || sourceBlock.index === undefined) {
    return { content, sources: [] as ChatSource[] };
  }

  const sources = Array.from(
    sourceBlock[1].matchAll(
      /-\s*\[([^\]]+)\]\((https?:\/\/[^)\n]+)\)/g
    )
  ).map((match) => ({ title: match[1], url: match[2] }));

  return {
    content: content.slice(0, sourceBlock.index).trimEnd(),
    sources
  };
};

const restoreMessages = (value: unknown): Message[] => {
  if (!Array.isArray(value)) {
    return [];
  }

  return value.flatMap((item) => {
    if (!item || typeof item !== "object") {
      return [];
    }

    const candidate = item as Partial<Message>;

    if (
      (candidate.role !== "user" && candidate.role !== "assistant") ||
      typeof candidate.content !== "string" ||
      !candidate.content.trim()
    ) {
      return [];
    }

    const legacy = extractLegacySources(candidate.content);
    const savedSources = restoreSources(candidate.sources);

    if (!legacy.content.trim()) {
      return [];
    }

    return [
      {
        id: typeof candidate.id === "string" ? candidate.id : createMessageId(),
        role: candidate.role,
        content: legacy.content,
        timestamp:
          typeof candidate.timestamp === "string"
            ? candidate.timestamp
            : formatTime(new Date()),
        action:
          candidate.action === "SHOW_PROJECTS"
            ? ("SHOW_PROJECTS" as const)
            : undefined,
        sources: savedSources.length > 0 ? savedSources : legacy.sources,
        error: Boolean(candidate.error),
        isStreaming: false
      }
    ];
  });
};

const AskAiChat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [requestError, setRequestError] = useState<string | null>(null);
  const [hasHydrated, setHasHydrated] = useState(false);
  const [showClearDialog, setShowClearDialog] = useState(false);

  useEffect(() => {
    try {
      const savedMessages = window.localStorage.getItem(CHAT_STORAGE_KEY);

      if (savedMessages) {
        setMessages(restoreMessages(JSON.parse(savedMessages)));
      }
    } catch (error) {
      console.warn("Saved Ask AI conversation could not be restored:", error);
    } finally {
      setHasHydrated(true);
    }
  }, []);

  useEffect(() => {
    if (!hasHydrated) {
      return;
    }

    try {
      const storedMessages = messages
        .filter((message) => message.content.trim().length > 0)
        .map(({ id, role, content, timestamp, action, sources, error }) => ({
          id,
          role,
          content,
          timestamp,
          action,
          sources,
          error
        }));

      window.localStorage.setItem(
        CHAT_STORAGE_KEY,
        JSON.stringify(storedMessages)
      );
    } catch (error) {
      console.warn("Ask AI conversation could not be saved:", error);
    }
  }, [hasHydrated, messages]);

  const updateMessage = (id: string, updates: Partial<Message>) => {
    setMessages((previous) =>
      previous.map((message) =>
        message.id === id ? { ...message, ...updates } : message
      )
    );
  };

  const ask = async (prompt: string) => {
    const trimmedPrompt = prompt.trim();

    if (!trimmedPrompt || isLoading) {
      return;
    }

    const userMessage: Message = {
      id: createMessageId(),
      role: "user",
      content: trimmedPrompt,
      timestamp: formatTime(new Date())
    };
    const assistantMessage: Message = {
      id: createMessageId(),
      role: "assistant",
      content: "",
      timestamp: formatTime(new Date()),
      isStreaming: true
    };
    const conversationHistory = messages
      .filter((message) => message.content.trim().length > 0)
      .slice(-6)
      .map((message) => ({
        sender: message.role === "user" ? "user" : "bot",
        text: message.content
      }));

    setRequestError(null);
    setMessages((previous) => [
      ...previous,
      userMessage,
      assistantMessage
    ]);
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          message: trimmedPrompt,
          conversationHistory
        })
      });

      if (!response.ok) {
        const errorBody = await response.json().catch(() => null);
        throw new Error(
          typeof errorBody?.error === "string"
            ? errorBody.error
            : "The AI service could not answer right now."
        );
      }

      if (!response.body) {
        throw new Error("The AI service returned an empty response.");
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let buffer = "";
      let streamFinished = false;

      const handleEvent = (rawEvent: string) => {
        const data = rawEvent
          .split("\n")
          .filter((line) => line.startsWith("data:"))
          .map((line) => line.slice(5).trimStart())
          .join("\n")
          .trim();

        if (!data) {
          return;
        }

        let event: SseEvent;

        try {
          event = JSON.parse(data) as SseEvent;
        } catch {
          return;
        }

        if (event.type === "content") {
          setMessages((previous) =>
            previous.map((message) =>
              message.id === assistantMessage.id
                ? { ...message, content: message.content + event.content }
                : message
            )
          );
        } else if (event.type === "action") {
          updateMessage(assistantMessage.id, { action: event.action });
        } else if (event.type === "sources") {
          updateMessage(assistantMessage.id, { sources: event.sources });
        } else if (event.type === "error") {
          throw new Error(event.message);
        } else if (event.type === "done") {
          streamFinished = true;
        }
      };

      while (!streamFinished) {
        const { value, done } = await reader.read();

        if (done) {
          break;
        }

        buffer += decoder.decode(value, { stream: true });

        let separatorIndex = buffer.indexOf("\n\n");
        while (separatorIndex !== -1) {
          const rawEvent = buffer.slice(0, separatorIndex);
          buffer = buffer.slice(separatorIndex + 2);
          handleEvent(rawEvent);
          separatorIndex = buffer.indexOf("\n\n");
        }
      }

      if (buffer.trim()) {
        handleEvent(buffer);
      }

      if (!streamFinished) {
        throw new Error("The AI response ended before it was complete.");
      }
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "The AI service could not answer right now.";

      setRequestError(message);
      updateMessage(assistantMessage.id, {
        content: "I couldn't complete that request. " + message,
        error: true
      });
    } finally {
      setIsLoading(false);
      updateMessage(assistantMessage.id, { isStreaming: false });
    }
  };

  const clearConversation = () => {
    setMessages([]);
    setRequestError(null);
    setShowClearDialog(false);

    try {
      window.localStorage.removeItem(CHAT_STORAGE_KEY);
    } catch (error) {
      console.warn("Saved Ask AI conversation could not be deleted:", error);
    }
  };

  if (!hasHydrated) {
    return null;
  }

  const hasConversation = messages.length > 0;

  return (
    <div className="mx-auto flex max-w-screen-xl flex-col gap-10 px-5 pb-16 pt-[112px] md:px-8 lg:px-[112px]">
      {/*
        This wrapper is the sticky containing block for the input bar below.
        A `position: sticky` child can't stick past its own parent's box, so
        keeping the input as the last element here — with the projects
        section as a sibling *outside* this div — means the input rides
        along the bottom of the viewport while scrolling through the hero/
        messages, then naturally un-stickies and scrolls away right as the
        projects grid comes into view, instead of floating over it forever.
      */}
      <div className="flex flex-col gap-10">
        {hasConversation ? (
          <>
            <div className="sticky top-[112px] z-40 mx-auto flex w-full max-w-[988px] justify-end pointer-events-none">
              <button
                type="button"
                onClick={() => setShowClearDialog(true)}
                disabled={isLoading}
                className="pointer-events-auto inline-flex w-fit items-center gap-2 rounded-full border border-base bg-base/90 px-4 py-2 text-fig-14 text-label shadow-sm backdrop-blur-sm hover:bg-surface-2 hover:text-title disabled:cursor-not-allowed disabled:opacity-40"
                aria-label="Clear saved conversation"
              >
                <Trash2 aria-hidden="true" className="size-4" />
                Clear chat
              </button>
            </div>
            <div className="mx-auto flex w-full min-w-0 max-w-[988px] flex-col gap-10">
              {messages.map((message) =>
                message.role === "user" ? (
                  <UserMessage
                    key={message.id}
                    content={message.content}
                    timestamp={message.timestamp}
                  />
                ) : (
                  <AssistantMessage
                    key={message.id}
                    content={message.content}
                    action={message.action}
                    sources={message.sources}
                    isStreaming={message.isStreaming}
                    error={message.error}
                  />
                )
              )}
            </div>
          </>
        ) : (
          <AskAiHero />
        )}

        <div className="sticky bottom-0 z-30 -mx-5 border-t border-base bg-base/90 px-5 pb-4 pt-4 backdrop-blur-sm md:-mx-8 md:px-8 lg:-mx-[112px] lg:px-[112px]">
          <div
            className="mx-auto flex w-full max-w-[988px] flex-col items-center gap-4"
            aria-busy={isLoading}
          >
            {requestError && (
              <p
                role="alert"
                className="w-full text-center text-fig-14 text-label"
              >
                {requestError}
              </p>
            )}
            <ChatInput onSubmit={ask} disabled={isLoading} />
            <SuggestionChips onSelect={ask} disabled={isLoading} />
          </div>
        </div>
      </div>

      {!hasConversation && (
        <section className="mx-auto w-full max-w-[844px]">
          <h2 className="text-center font-display text-fig-32 uppercase text-title md:text-fig-48">
            My projects
          </h2>
          <div className="mt-8 flex flex-col gap-6">
            {caseStudies.map((study) => (
              <ProjectCard
                key={study.title}
                image={study.image}
                title={study.title}
                skills={study.skills}
                href={study.links[0]?.theLink ?? "/"}
                linkText={study.links[0]?.text}
              />
            ))}
          </div>
        </section>
      )}

      <ClearChatDialog
        open={showClearDialog}
        onCancel={() => setShowClearDialog(false)}
        onConfirm={clearConversation}
      />
    </div>
  );
};

export default AskAiChat;
