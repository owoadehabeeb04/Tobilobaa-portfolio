"use client";
import React from "react";
import { askAiSuggestions } from "@/constants/askAi";

type SuggestionChipsProps = {
  onSelect: (prompt: string) => void;
  disabled?: boolean;
};

const SuggestionChips = ({
  onSelect,
  disabled = false
}: SuggestionChipsProps) => {
  return (
    <div className="flex w-full flex-wrap items-center gap-4">
      {askAiSuggestions.map((suggestion) => (
        <button
          key={suggestion.id}
          type="button"
          onClick={() => onSelect(suggestion.prompt)}
          disabled={disabled}
          className="rounded-[20px] border border-solid border-base px-2 py-1 text-center text-fig-14 text-label hover:text-title disabled:cursor-not-allowed disabled:opacity-40"
        >
          {suggestion.prompt}
        </button>
      ))}
    </div>
  );
};

export default SuggestionChips;
