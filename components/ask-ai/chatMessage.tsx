import React from "react";
import ProjectCard from "@/components/ui/project-card";
import { caseStudies } from "@/constants";
import type { AnswerBlock } from "@/constants/askAi";

export const UserMessage = ({
  content,
  timestamp
}: {
  content: string;
  timestamp: string;
}) => (
  <div className="flex flex-col items-end gap-2">
    <p className="rounded-[20px] border border-solid border-chat-bubble bg-chat-bubble px-4 py-3 text-center text-fig-16 text-chat-bubble-fg">
      {content}
    </p>
    <time className="text-right text-fig-16 text-label">{timestamp}</time>
  </div>
);

export const AssistantMessage = ({ blocks }: { blocks: AnswerBlock[] }) => (
  <div className="flex flex-col gap-6">
    {blocks.map((block, index) => {
      if (block.kind === "text") {
        return (
          <p
            key={index}
            className="text-fig-20 text-body"
          >
            {block.value}
          </p>
        );
      }

      if (block.kind === "projects") {
        return (
          <div key={index} className="flex flex-col gap-6">
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
        );
      }

      return (
        <dl key={index} className="flex flex-col gap-3">
          {block.items.map((item) => (
            <div key={item.label} className="flex flex-wrap items-baseline gap-2">
              <dt className="text-fig-20 text-title">
                {item.label}
              </dt>
              <dd className="text-fig-20 text-body">
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-2 hover:text-accent"
                  >
                    {item.value}
                  </a>
                ) : (
                  item.value
                )}
              </dd>
            </div>
          ))}
        </dl>
      );
    })}
  </div>
);
