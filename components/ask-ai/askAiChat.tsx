"use client";
import React, { useState } from "react";
import AskAiHero from "@/components/ask-ai/askAiHero";
import ChatInput from "@/components/ask-ai/chatInput";
import SuggestionChips from "@/components/ask-ai/suggestionChips";
import { AssistantMessage, UserMessage } from "@/components/ask-ai/chatMessage";
import ProjectCard from "@/components/ui/project-card";
import { caseStudies } from "@/constants";
import {
  askAiAnswers,
  askAiFallback,
  type AnswerBlock
} from "@/constants/askAi";

type Message =
  | { role: "user"; content: string; timestamp: string }
  | { role: "assistant"; blocks: AnswerBlock[] };

const formatTime = (date: Date) =>
  date
    .toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true
    })
    .replace(" ", "");

/** Loose match so "show me your projects" and "Projects" both resolve. */
const findAnswer = (prompt: string) => {
  const normalised = prompt.trim().toLowerCase();
  return askAiAnswers.find(
    (answer) =>
      answer.prompt.toLowerCase() === normalised ||
      answer.prompt.toLowerCase().includes(normalised) ||
      normalised.includes(answer.id)
  );
};

const AskAiChat = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  const ask = (prompt: string) => {
    const answer = findAnswer(prompt);
    setMessages((previous) => [
      ...previous,
      { role: "user", content: prompt, timestamp: formatTime(new Date()) },
      { role: "assistant", blocks: answer?.blocks ?? askAiFallback }
    ]);
  };

  const hasConversation = messages.length > 0;

  return (
    <div className="mx-auto flex max-w-screen-xl flex-col gap-10 px-5 pb-16 pt-[112px] md:px-8 lg:px-[112px]">
      {hasConversation ? (
        <div className="mx-auto flex w-full max-w-[988px] flex-col gap-10">
          {messages.map((message, index) =>
            message.role === "user" ? (
              <UserMessage
                key={index}
                content={message.content}
                timestamp={message.timestamp}
              />
            ) : (
              <AssistantMessage key={index} blocks={message.blocks} />
            )
          )}
        </div>
      ) : (
        <AskAiHero />
      )}

      <div className="mx-auto flex w-full max-w-[988px] flex-col items-center gap-4">
        <ChatInput onSubmit={ask} />
        <SuggestionChips onSelect={ask} />
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
    </div>
  );
};

export default AskAiChat;
