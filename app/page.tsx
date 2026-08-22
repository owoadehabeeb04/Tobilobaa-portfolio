import type { Metadata } from "next";
import AskAiChat from "@/components/ask-ai/askAiChat";

export const metadata: Metadata = {
  title: "Ask AI | Tobiloba's Portfolio",
  description:
    "Ask about Tobiloba's projects, skills, experience, or contact information."
};

export default function AskAiHome() {
  return (
    <main>
      <AskAiChat />
    </main>
  );
}
