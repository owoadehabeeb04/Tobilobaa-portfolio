"use client";
import React, { useState } from "react";
import { Send } from "lucide-react";

type ChatInputProps = {
  onSubmit: (value: string) => void;
  placeholder?: string;
};

const ChatInput = ({ onSubmit, placeholder = "Ask me anything" }: ChatInputProps) => {
  const [value, setValue] = useState("");

  const submit = (event: React.FormEvent) => {
    event.preventDefault();
    const trimmed = value.trim();
    if (!trimmed) return;
    onSubmit(trimmed);
    setValue("");
  };

  return (
    <form
      onSubmit={submit}
      className="flex w-full items-center justify-between gap-4 rounded-[1000px] border border-solid border-base px-6 py-4 md:py-6"
    >
      <label htmlFor="ask-ai-input" className="sr-only">
        Ask Tobi&apos;s AI assistant a question
      </label>
      <input
        id="ask-ai-input"
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder={placeholder}
        autoComplete="off"
        className="w-full bg-transparent text-fig-16 text-title outline-none placeholder:text-label"
      />
      <button
        type="submit"
        aria-label="Send message"
        disabled={!value.trim()}
        className="shrink-0 text-title disabled:opacity-40"
      >
        <Send aria-hidden="true" className="size-6" />
      </button>
    </form>
  );
};

export default ChatInput;
