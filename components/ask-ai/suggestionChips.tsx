"use client";
import React from "react";
import { askAiAnswers } from "@/constants/askAi";

type SuggestionChipsProps = {
  onSelect: (prompt: string) => void;
};

const SuggestionChips = ({ onSelect }: SuggestionChipsProps) => {
  return (
    <div className="flex w-full flex-wrap items-center gap-4">
      {askAiAnswers.map((answer) => (
        <button
          key={answer.id}
          type="button"
          onClick={() => onSelect(answer.prompt)}
          className="rounded-[20px] border border-solid border-base px-2 py-1 text-center text-fig-14 text-label hover:text-title"
        >
          {answer.prompt}
        </button>
      ))}
    </div>
  );
};

export default SuggestionChips;
