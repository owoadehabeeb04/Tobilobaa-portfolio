export type AskAiSuggestion = {
  id: string;
  prompt: string;
};

export const askAiIntro = {
  heading: "Hi! I'm Tobi's AI Assistant",
  subtitle:
    "Ask me about Tobi's CV, projects, skills, experience, or contact information. The assistant can also check his public LinkedIn profile when the local portfolio context is not enough."
};

export const askAiSuggestions: AskAiSuggestion[] = [
  {
    id: "projects",
    prompt: "Show me your projects"
  },
  {
    id: "technologies",
    prompt: "What technologies do you work with?"
  },
  {
    id: "experience",
    prompt: "Tell me about your work experience"
  },
  {
    id: "contact",
    prompt: "What is your contact information?"
  }
];
