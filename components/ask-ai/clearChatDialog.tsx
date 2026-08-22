"use client";

import React, { useEffect, useRef } from "react";
import { Trash2, X } from "lucide-react";

type ClearChatDialogProps = {
  open: boolean;
  onCancel: () => void;
  onConfirm: () => void;
};

const ClearChatDialog = ({
  open,
  onCancel,
  onConfirm
}: ClearChatDialogProps) => {
  const cancelButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) {
      return;
    }

    cancelButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onCancel();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onCancel, open]);

  if (!open) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/70 px-5 backdrop-blur-sm"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onCancel();
        }
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="clear-chat-title"
        aria-describedby="clear-chat-description"
        className="relative w-full max-w-[430px] rounded-[20px] border border-base bg-surface p-6 text-body shadow-2xl"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onCancel}
          aria-label="Close clear chat dialog"
          className="absolute right-4 top-4 rounded-full p-2 text-label hover:bg-surface-2 hover:text-title"
        >
          <X aria-hidden="true" className="size-5" />
        </button>

        <div className="flex items-start gap-4 pr-8">
          <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[#b42318]/10 text-[#b42318]">
            <Trash2 aria-hidden="true" className="size-5" />
          </div>
          <div>
            <h2
              id="clear-chat-title"
              className="font-display text-fig-24 uppercase text-title"
            >
              Clear conversation?
            </h2>
            <p id="clear-chat-description" className="mt-2 text-fig-14 text-label">
              This will delete the saved chat history from this browser. This
              action cannot be undone.
            </p>
          </div>
        </div>

        <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
          <button
            ref={cancelButtonRef}
            type="button"
            onClick={onCancel}
            className="rounded-full border border-base px-5 py-3 text-fig-14 text-title hover:bg-surface-2"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={onConfirm}
            className="rounded-full bg-[#b42318] px-5 py-3 text-fig-14 font-semibold text-white hover:bg-[#912018]"
          >
            Delete chat
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClearChatDialog;
