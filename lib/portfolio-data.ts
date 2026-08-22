import {
  articles,
  caseStudies,
  musicPlaylist,
  sanlamExperience,
  tobiProjects
} from "@/constants";

export type KnowledgeSource = "cv" | "portfolio";

export type PortfolioChunk = {
  id: string;
  source: KnowledgeSource;
  keywords: string[];
  content: string;
};

export type RetrievedContext = {
  context: string;
  score: number;
  matchedChunkIds: string[];
  shouldSearchLinkedIn: boolean;
};

const cvChunks: PortfolioChunk[] = [
  {
    id: "cv-profile",
    source: "cv",
    keywords: [
      "who",
      "about",
      "tobiloba",
      "owoade",
      "profile",
      "senior",
      "designer",
      "product",
      "strategy",
      "saas",
      "ai product",
      "location",
      "toronto",
      "lagos",
      "french",
      "instagram",
      "tiktok"
    ],
    content: `[CV - Latest Product Design Resume]
Tobiloba Owoade is a Senior Product Designer based in Toronto, Ontario. His work covers AI applications, enterprise SaaS platforms, mobile products, and customer-facing digital experiences.

He leads product strategy from discovery through launch by combining user research, rapid prototyping, design systems, data-informed decision-making, high-fidelity design, interactive prototyping, and implementation-ready interfaces. He is proficient in Figma, interaction design, responsive design, usability testing, visual communication, front-end collaboration, and foundational HTML/CSS.`
  },
  {
    id: "cv-education",
    source: "cv",
    keywords: [
      "education",
      "school",
      "study",
      "degree",
      "humber",
      "university",
      "chemical",
      "engineering",
      "academic"
    ],
    content: `[CV - Latest Product Design Resume]
Education:
- Humber College: Post Graduate Degree in User Experience Design.
- Humber College: Post Graduate Degree in Web Development & Design.
- University of Lagos: Bachelor of Science in Chemical Engineering.`
  },
  {
    id: "cv-experience",
    source: "cv",
    keywords: [
      "experience",
      "work",
      "career",
      "job",
      "role",
      "employment",
      "twovera",
      "lyric",
      "lyricchief",
      "omoai",
      "omo",
      "sanlam",
      "adrian",
      "consult",
      "n&s",
      "intern"
    ],
    content: `[CV - Latest Product Design Resume]
Professional experience:
- Product Designer at TwoVera, March 2026 - present, Toronto, Canada. Audits existing product experiences and synthesizes insights from 8+ user interviews; conducts user research and customer interviews; leads usability testing; partners with Product, Engineering, and cross-functional stakeholders; designs end-to-end flows for complex scenarios; and creates 120+ high-fidelity Figma screens, prototypes, and reusable UI components.
- Product Designer at Lyric Chief, August 2025 - March 2026, Toronto, Ontario. Conducted and analyzed 8 user interview sessions across artists, managers, advisors, and music enthusiasts; synthesized 24+ actionable insights; evaluated coin monetization across pricing, wallets, moderation, and rewards to deliver 20+ strategic recommendations; and led UX design for lyric annotations, quizzes, and engagement experiences.
- AI Product Designer at OmoAI, April 2025 - December 2025, New York, United States. Led primary and secondary research, stakeholder interviews, competitive analysis, AI chatbot use-case research, PRD work that improved project focus by 30%, Agile release planning that improved development efficiency by 40%, and a light/dark design system that improved design efficiency by approximately 50%. Designed a role-based enterprise administration platform for permissions, activity tracking, billing, and account lifecycle administration.
- UI/UX Designer at Sanlam Insurance, December 2022 - December 2024, Lagos, Nigeria. Designed the Sanlam mobile application serving 500,000+ customers, including policy management, premium payments, e-mandate setup, and customer support; designed an enterprise CRM platform that increased customer-service interactions by 80%; led life and general insurance sales platforms; designed a payment tracking platform integrated with the NIBSS API; and built an internal asset-management platform tracking 1,000+ assets.
- UI/UX Designer at Adrian April Consult, April 2018 - December 2022, Canada. Conducted research and stakeholder interviews; created information architecture, user flows, wireframes, prototypes, and high-fidelity UI designs; facilitated usability testing; maintained design systems and UI components; produced implementation documentation; applied WCAG and responsive design principles; and collaborated with product and development teams.`
  },
  {
    id: "cv-achievements",
    source: "cv",
    keywords: [
      "achievement",
      "impact",
      "metric",
      "120",
      "8",
      "24",
      "20",
      "500000",
      "20200",
      "8000",
      "80%",
      "50%",
      "40%",
      "30%",
      "1000"
    ],
    content: `[CV - Latest Product Design Resume]
Selected resume outcomes:
- TwoVera work includes insights from 8+ user interviews and 120+ high-fidelity Figma screens.
- Lyric Chief work synthesized 24+ actionable insights and produced 20+ strategic recommendations.
- Sanlam's mobile app supported about 500,000+ customers and had over 20,200 Play Store downloads and over 8,000 App Store downloads according to the CV.
- The Sanlam CRM portal improved customer service interactions by 80% according to the CV.
- OmoAI work improved project focus by 30%, development efficiency by 40%, and design efficiency by about 50% according to the CV.
- The Sanlam internal asset management system tracked and managed 1,000+ company assets.`
  },
  {
    id: "cv-highlights",
    source: "cv",
    keywords: [
      "highlight",
      "strength",
      "storytelling",
      "research",
      "scalable",
      "accessibility",
      "responsive",
      "marketing",
      "customer experience"
    ],
    content: `[CV - Latest Product Design Resume]
Professional highlights:
- Technical product storytelling: turns complex AI, SaaS, and enterprise capabilities into customer-friendly interfaces, interactive prototypes, and visual experiences.
- User experience strategy: leads UX initiatives from discovery through high-fidelity design using research, usability testing, and journey mapping.
- Scalable UI: builds design systems, reusable components, and interface standards that improve consistency and delivery.
- Enterprise SaaS and AI product tools: uses AI-powered tools such as ChatGPT and Claude to accelerate ideation and design workflows.
- Research-driven decisions: uses interviews, competitive analysis, usability testing, and stakeholder research to inform product strategy and feature prioritization.
- Interactive prototyping and visual communication: creates prototypes, user flows, wireframes, and design specifications.
- Customer experience optimization, responsive design, accessibility, and front-end collaboration.`
  },
  {
    id: "cv-skills",
    source: "cv",
    keywords: [
      "skill",
      "skills",
      "tools",
      "technology",
      "technologies",
      "tech",
      "figma",
      "figjam",
      "canva",
      "photoshop",
      "illustrator",
      "miro",
      "jira",
      "slack",
      "html",
      "css",
      "api",
      "research",
      "prototyping",
      "design system"
    ],
    content: `[CV - Latest Product Design Resume]
Skills:
- UX/UI design: user experience, user interface, interaction design, information architecture, responsive design, visual design, accessibility, design systems, and micro-interactions.
- Research and strategy: user research, stakeholder interviews, journey mapping, user flows, usability testing, competitive analysis, A/B testing, UX strategy, and product discovery.
- Design and prototyping: Figma, FigJam, wireframing, interactive prototyping, high-fidelity mockups, design documentation, and component libraries.
- Technical and product: AI product design, SaaS platforms, enterprise applications, product requirements documentation, API integration, HTML/CSS, and mobile-first design.
- Tools: Figma, FigJam, Miro, Jira, Slack, Canva, Adobe Photoshop, Adobe Illustrator, and ChatGPT.`
  },
  {
    id: "cv-projects",
    source: "cv",
    keywords: [
      "miroadmap",
      "immigration",
      "meetra",
      "ride sharing",
      "ridesharing",
      "runners hive",
      "fitness marketplace",
      "roadmap",
      "project"
    ],
    content: `[CV - Latest Product Design Resume]
Selected projects:
- MiRoadmap: Defined product strategy and MVP structure for a web app helping international students, newcomers, and work-permit holders in Canada navigate immigration processes. Structured 8+ MVP features, information architecture for 6 user groups, three landing-page value pillars, and AI-personalized support.
- Meetra: Defined the end-to-end experience for a two-sided ride-sharing platform connecting riders and drivers through ride posting, ride requests, route discovery, fare splitting, onboarding, matching, trip management, and confirmation workflows.
- Runners Hive: Designed the end-to-end experience across run tracking, marketplace discovery, rewards, social engagement, and leaderboards. Created scalable components and patterns for activity tracking, listings, profiles, reward states, and run summaries.`
  }
];

const portfolioChunks: PortfolioChunk[] = [
  {
    id: "portfolio-contact",
    source: "portfolio",
    keywords: [
      "contact",
      "email",
      "phone",
      "reach",
      "linkedin",
      "portfolio",
      "connect",
      "social"
    ],
    content: `[PORTFOLIO]
Public contact details shown on the current portfolio:
- Email: tobiowoade22@gmail.com
- Phone: +1 705 905 0029
- Portfolio: https://www.tobiowoade.com
- LinkedIn: https://www.linkedin.com/in/tobiloba-owoade/
- Behance: https://www.behance.net/tobilobaowoade`
  },
  {
    id: "portfolio-positioning",
    source: "portfolio",
    keywords: [
      "design approach",
      "product design",
      "ui ux",
      "user centered",
      "creative",
      "strategy",
      "ai",
      "saas",
      "enterprise",
      "mobile",
      "web"
    ],
    content: `[PORTFOLIO]
Tobiloba presents himself as a product designer who turns complex problems into intuitive, visually compelling experiences. The portfolio describes experience across AI applications, SaaS platforms, enterprise software, mobile apps, and customer-facing web experiences, with work spanning user research, product strategy, high-fidelity design, interactive prototyping, design systems, implementation-ready interfaces, and cross-functional collaboration.`
  }
];

const normalise = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9+#.]+/g, " ")
    .trim();

const synonymGroups: Record<string, string[]> = {
  project: ["projects", "work", "built", "created", "developed", "portfolio"],
  experience: ["work", "job", "career", "role", "employment"],
  skill: ["skills", "technology", "technologies", "tools", "stack", "framework"],
  design: ["designer", "ui", "ux", "product", "prototype", "research"],
  contact: ["email", "phone", "reach", "connect", "linkedin"],
  current: ["currently", "latest", "recent", "now", "present", "today"]
};

const getDynamicPortfolioChunks = (): PortfolioChunk[] => {
  const caseStudyContent = caseStudies
    .map((study) => {
      const links = study.links
        .filter((link) => link.theLink && link.theLink !== "/")
        .map((link) => `${link.text}: ${link.theLink}`)
        .join(" | ");

      return [
        `Title: ${study.title}`,
        `Type: ${study.type}`,
        `Description: ${study.description}`,
        `Skills: ${study.skills.join(", ")}`,
        links ? `Links: ${links}` : ""
      ]
        .filter(Boolean)
        .join("\n");
    })
    .join("\n\n");

  const otherProjectContent = tobiProjects
    .map(
      (project) =>
        `Title: ${project.title}\nDescription: ${project.description}\nType: ${project.type}\nLink: ${project.theLink}`
    )
    .join("\n\n");

  const sanlamContent = sanlamExperience.map((item) => `- ${item}`).join("\n");
  const articleContent = articles
    .map((article) => `${article.title} (${article.date}): ${article.link}`)
    .join("\n");
  const playlistContent = musicPlaylist
    .map((playlist) => `${playlist.title}: ${playlist.link}`)
    .join("\n");

  return [
    {
      id: "portfolio-case-studies",
      source: "portfolio",
      keywords: [
        "project",
        "projects",
        "case study",
        "case studies",
        "sanlam",
        "runners",
        "runners hive",
        "meetra",
        "asset",
        "insurance",
        "fitness",
        "mobile",
        "web"
      ],
      content: `[PORTFOLIO - SHARED CASE STUDY DATA]\n${caseStudyContent}`
    },
    {
      id: "portfolio-other-projects",
      source: "portfolio",
      keywords: [
        "other project",
        "behance",
        "website",
        "cake",
        "cupcake",
        "hatley",
        "techia"
      ],
      content: `[PORTFOLIO - OTHER PROJECTS]\n${otherProjectContent}`
    },
    {
      id: "portfolio-sanlam-notes",
      source: "portfolio",
      keywords: [
        "sanlam",
        "insurance",
        "claims",
        "payment",
        "nibbs",
        "asset management",
        "customer care"
      ],
      content: `[PORTFOLIO - SANLAM CASE STUDY NOTES]\n${sanlamContent}`
    },
    {
      id: "portfolio-writing-and-music",
      source: "portfolio",
      keywords: [
        "article",
        "writing",
        "medium",
        "music",
        "playlist",
        "spotify",
        "interest"
      ],
      content: `[PORTFOLIO - ARTICLES AND PLAYLISTS]\nArticles:\n${articleContent}\n\nPlaylists:\n${playlistContent}`
    }
  ];
};

export const getPortfolioChunks = () => [
  ...cvChunks,
  ...portfolioChunks,
  ...getDynamicPortfolioChunks()
];

const hasCurrentInformationIntent = (query: string) =>
  /\b(current|currently|latest|recent|now|today|present role|headline|online profile|linkedin)\b/i.test(
    query
  );

const isConversationalOnlyQuery = (query: string) =>
  /^\s*(?:(?:hi|hello|hey|thanks?|thank you|okay|ok|lol|wow|congrats?|congratulations)\b|(?:nice+|great|awesome|cool|solid|love it|good job|well done)\b[\s\S]*)[.!?\s]*$/i.test(
    query
  );

const getExpandedTerms = (query: string) => {
  const terms = new Set(normalise(query).split(" ").filter(Boolean));

  for (const [root, synonyms] of Object.entries(synonymGroups)) {
    if (terms.has(root) || synonyms.some((synonym) => terms.has(normalise(synonym)))) {
      terms.add(root);
      synonyms.forEach((synonym) => terms.add(normalise(synonym)));
    }
  }

  return Array.from(terms);
};

const scoreChunk = (chunk: PortfolioChunk, query: string, terms: string[]) => {
  const normalisedQuery = normalise(query);
  const normalisedContent = normalise(chunk.content);
  let score = 0;

  for (const keyword of chunk.keywords) {
    const normalisedKeyword = normalise(keyword);

    if (normalisedQuery.includes(normalisedKeyword)) {
      score += normalisedKeyword.includes(" ") ? 3 : 2;
    }
  }

  for (const term of terms) {
    if (term.length > 2 && normalisedContent.includes(term)) {
      score += 0.25;
    }
  }

  return score;
};

export const retrieveRelevantChunks = (
  query: string,
  maxChunks = 4
): RetrievedContext => {
  const terms = getExpandedTerms(query);
  const scored = getPortfolioChunks()
    .map((chunk) => ({ chunk, score: scoreChunk(chunk, query, terms) }))
    .sort((a, b) => b.score - a.score);
  const selected = scored.filter(({ score }) => score > 0).slice(0, maxChunks);
  const topScore = selected[0]?.score ?? 0;

  return {
    context:
      selected.length > 0
        ? selected
            .map(({ chunk }) => `## ${chunk.id}\n${chunk.content}`)
            .join("\n\n")
        : "No relevant CV or portfolio context was found for this question.",
    score: topScore,
    matchedChunkIds: selected.map(({ chunk }) => chunk.id),
    shouldSearchLinkedIn:
      !isConversationalOnlyQuery(query) &&
      (topScore < 3 || hasCurrentInformationIntent(query))
  };
};
