import React from "react";
import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import ProjectCard from "@/components/ui/project-card";
import { caseStudies } from "@/constants";

export type ChatSource = {
  title: string;
  url: string;
};

type AssistantMessageProps = {
  content: string;
  action?: "SHOW_PROJECTS";
  sources?: ChatSource[];
  isStreaming?: boolean;
  error?: boolean;
};

const markdownComponents: Components = {
  table: ({ children }) => (
    <div className="my-6 w-full overflow-x-auto rounded-[16px] border border-base">
      <table className="w-full min-w-[720px] border-collapse text-left text-fig-14">
        {children}
      </table>
    </div>
  ),
  thead: ({ children }) => (
    <thead className="border-b-2 border-base bg-surface">{children}</thead>
  ),
  tbody: ({ children }) => <tbody>{children}</tbody>,
  tr: ({ children }) => (
    <tr className="border-b border-base last:border-b-0">{children}</tr>
  ),
  th: ({ children }) => (
    <th className="border border-base px-4 py-3 text-left font-semibold text-title">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="border border-base px-4 py-3 align-top text-body [&_p]:mb-0">
      {children}
    </td>
  )
};

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

export const AssistantMessage = ({
  content,
  action,
  sources = [],
  isStreaming = false,
  error = false
}: AssistantMessageProps) => {
  const markdownClassName = [
    "text-fig-16 leading-relaxed text-body",
    "[&_a]:text-accent [&_a]:underline [&_a]:underline-offset-2",
    "[&_blockquote]:border-l-2 [&_blockquote]:border-accent [&_blockquote]:pl-4 [&_blockquote]:italic",
    "[&_h1]:font-display [&_h1]:text-title [&_h1]:text-fig-24",
    "[&_h2]:font-display [&_h2]:text-title [&_h2]:text-fig-20",
    "[&_li]:ml-5 [&_ol]:list-decimal [&_p]:mb-4",
    "[&_strong]:font-semibold [&_strong]:text-title [&_ul]:list-disc",
    error ? "rounded-[16px] border border-[#b42318]/30 px-4 py-3" : ""
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="flex flex-col gap-6" aria-live="polite">
      <div className={markdownClassName}>
        <ReactMarkdown
          components={markdownComponents}
          remarkPlugins={[remarkGfm]}
        >
          {content || (isStreaming ? "Thinking…" : "")}
        </ReactMarkdown>
        {isStreaming && (
          <span
            aria-label="Assistant is typing"
            className="ml-1 inline-block animate-pulse text-accent"
          >
            ▍
          </span>
        )}
      </div>

      {sources.length > 0 && (
        <div className="border-t border-base pt-4 text-fig-14 text-label">
          <p className="font-semibold text-title">Sources</p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            {sources.map((source) => (
              <li key={source.url}>
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="break-all text-accent underline underline-offset-2 hover:text-title"
                >
                  {source.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {action === "SHOW_PROJECTS" && (
        <div className="flex flex-col gap-6">
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
      )}
    </div>
  );
};
