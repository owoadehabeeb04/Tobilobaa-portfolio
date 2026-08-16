/**
 * Canned content for the /ask-ai experience.
 *
 * The UI is deliberately backend-free for now: each suggestion prompt maps to a
 * pre-written answer built from these blocks. When a real chat backend is wired
 * up, it only has to produce the same `AnswerBlock[]` shape and the rendering
 * layer stays untouched.
 */

export type AnswerBlock =
  | { kind: "text"; value: string }
  /** Renders the full project list using the shared ProjectCard. */
  | { kind: "projects" }
  | { kind: "contact"; items: ContactItem[] };

export type ContactItem = {
  label: string;
  value: string;
  href?: string;
};

export type Answer = {
  id: string;
  /** Label shown on the suggestion chip and echoed as the user's message. */
  prompt: string;
  blocks: AnswerBlock[];
};

export const askAiIntro = {
  heading: "Hi! I'm Tobi's AI Assistant",
  subtitle:
    'Ask me about Tobi\'s projects, skills, experience, or contact information. Try: "Show me your projects" or "What technologies do you work with?"'
};

export const askAiAnswers: Answer[] = [
  {
    id: "projects",
    prompt: "Show me your projects",
    blocks: [
      {
        kind: "text",
        value:
          "I've worked on a variety of projects, and I'd be happy to walk you through each of them. Here's a detailed overview of the projects I have worked on:"
      },
      { kind: "projects" }
    ]
  },
  {
    id: "technologies",
    prompt: "What technologies do you work with?",
    blocks: [
      {
        kind: "text",
        value:
          "I work with a range of industry-standard tools that support the full product design process, from early ideation and research to high-fidelity design and presentation."
      },
      {
        kind: "text",
        value:
          "My primary design tool is Figma, which I use extensively for wireframing, UI design, interactive prototyping, and building scalable design systems. I use it to design complete product experiences across both mobile and web platforms, while also creating user flows, component libraries, and responsive layouts. Figma is also central to my collaboration workflow, allowing me to work closely with developers, stakeholders, and product teams through shared files, comments, and design handoff."
      },
      {
        kind: "text",
        value:
          "For visual communication and content design, I frequently use Canva. This helps me quickly create presentations, visual assets, and communication materials that support storytelling around a product or project. It is particularly useful when preparing case studies, project summaries, or content that explains design decisions to non-design stakeholders."
      },
      {
        kind: "text",
        value:
          "I also use Notion and similar documentation tools to support product thinking and organization. These platforms help me structure research findings, document feature ideas, create product requirement notes, map user flows, and maintain clear records of design decisions throughout a project. Maintaining structured documentation ensures that design work remains aligned with product goals and stakeholder expectations."
      },
      {
        kind: "text",
        value:
          "Overall, my focus is not just on using tools, but on applying them strategically to solve product problems, communicate ideas clearly, and create thoughtful, user-centered experiences."
      }
    ]
  },
  {
    id: "experience",
    prompt: "Tell me about your work experience",
    blocks: [
      {
        kind: "text",
        value:
          "I'm a product designer with 5+ years of experience turning complex problems into intuitive designs, working across AI applications, SaaS platforms, enterprise software, mobile apps, and customer-facing web experiences."
      },
      {
        kind: "text",
        value:
          "I've led projects end to end — from user research and strategy through high-fidelity design, interactive prototyping, design systems, and implementation-ready interfaces — partnering closely with Product Marketing, Engineering, and other cross-functional teams."
      },
      { kind: "projects" }
    ]
  },
  {
    id: "contact",
    prompt: "What is your contact information?",
    blocks: [
      { kind: "text", value: "You can reach me through the following channels:" },
      {
        kind: "contact",
        items: [
          {
            label: "Email",
            value: "tobiowoade22@gmail.com",
            href: "mailto:tobiowoade22@gmail.com"
          },
          { label: "Phone", value: "+1 705 905 0029", href: "tel:+17059050029" },
          {
            label: "Portfolio",
            value: "www.tobiowoade.com",
            href: "https://www.tobiowoade.com"
          },
          {
            label: "Linkedin",
            value: "https://www.linkedin.com/in/tobiloba-owoade/",
            href: "https://www.linkedin.com/in/tobiloba-owoade/"
          }
        ]
      },
      { kind: "text", value: "I'm looking forward to connecting with you." }
    ]
  }
];

/** Shown when free-text input doesn't match a known prompt. */
export const askAiFallback: AnswerBlock[] = [
  {
    kind: "text",
    value:
      "I'm still learning to answer that one. In the meantime, try one of the suggestions below — or reach out to Tobi directly."
  }
];
