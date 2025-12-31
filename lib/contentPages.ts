export type ContentPage = {
  slug: string;
  title: string;
  tagline: string;
  summary: string;
  sections: {
    title: string;
    body: string;
    bullets?: string[];
  }[];
  cta?: string;
  category?: string;
};

export const contentPages: ContentPage[] = [
  {
    slug: "market-strategy",
    title: "Market Strategy",
    tagline: "Own the right market before you scale the product",
    summary: "Positioning, GTM motion, and channel mix tuned for early signals and scalable growth.",
    category: "Blueprint",
    sections: [
      {
        title: "Positioning & ICP",
        body: "Define who you win with first and why you are the only credible choice for them.",
        bullets: [
          "Ideal customer profiles with pains, triggers, and budget cues",
          "Beachhead verticals with fast path to reference wins",
          "Differentiated promise aligned to outcomes, not features"
        ]
      },
      {
        title: "GTM Motion",
        body: "Map how you show up: motion, channels, and proof needed for each stage.",
        bullets: [
          "Low-lift acquisition loops (content, partnerships, founder-led sales)",
          "Pilot-to-production playbook with success criteria",
          "Pricing, packaging, and land-and-expand guardrails"
        ]
      }
    ],
    cta: "Align GTM to the ICP that converts fastest"
  },
  {
    slug: "product-design",
    title: "Product Design",
    tagline: "Delightful journeys that convert and retain",
    summary: "UX flows, interaction patterns, and accessibility baked into every core path.",
    category: "Blueprint",
    sections: [
      {
        title: "Experience Architecture",
        body: "Design flows that minimize cognitive load and maximize aha moments.",
        bullets: [
          "First-session activation with crisp onboarding",
          "Guided workflows with inline education and empty-state value",
          "Mobile-responsive patterns and accessibility AA targets"
        ]
      },
      {
        title: "Visual Language",
        body: "Systematic components that keep the product consistent and premium.",
        bullets: [
          "Design tokens for color, type, spacing, and motion",
          "States for loading, error, and optimistic updates",
          "Zero-friction feedback loops to capture UX debt"
        ]
      }
    ],
    cta: "Ship flows that feel inevitable and effortless"
  },
  {
    slug: "tech-architecture",
    title: "Tech Architecture",
    tagline: "Resilient, observable, and ready to scale",
    summary: "Service boundaries, data contracts, and observability so the stack grows with the business.",
    category: "Blueprint",
    sections: [
      {
        title: "Foundations",
        body: "Choose primitives that keep options open and costs predictable.",
        bullets: [
          "API-first domain modules with typed contracts",
          "Event-driven or request/response split by latency needs",
          "Secure secrets management and least-privilege defaults"
        ]
      },
      {
        title: "Quality & Observability",
        body: "Know when things break before customers do.",
        bullets: [
          "Tracing, metrics, and structured logs as a first-class concern",
          "SLOs with fast rollback and feature flag strategies",
          "Data lifecycle, backups, and PII minimization"
        ]
      }
    ],
    cta: "Design for change, not for stasis"
  },
  {
    slug: "viability-scoring",
    title: "Viability Scoring",
    tagline: "Objective signals before you over-invest",
    summary: "Market size, competitive moat, and execution complexity rolled into a clear verdict.",
    category: "Blueprint",
    sections: [
      {
        title: "Signals",
        body: "Assess tractionability, speed to proof, and revenue durability.",
        bullets: [
          "TAM/SAM/SOM with realistic bottoms-up assumptions",
          "Competitive pressure vs. defensibility levers",
          "Operational complexity and AI leverage scoring"
        ]
      },
      {
        title: "Decision Layer",
        body: "A transparent rubric to decide stop, proceed, or pivot.",
        bullets: [
          "Traffic-light verdict with rationale",
          "Founder recommendation and next-best experiments",
          "Confidence intervals and risk notes"
        ]
      }
    ],
    cta: "Know when to lean in and when to pivot"
  },
  {
    slug: "execution-roadmap",
    title: "Execution Roadmap",
    tagline: "Clear milestones from idea to launch",
    summary: "Sequenced sprints, dependencies, and owners with measurable outcomes.",
    category: "Blueprint",
    sections: [
      {
        title: "Timeline",
        body: "Day 1, Week 1, Month 1 commitments with crisp acceptance criteria.",
        bullets: [
          "Fast pilots with customer-observable outcomes",
          "Instrumentation and QA gates per release",
          "Risk burn-down and mitigation per milestone"
        ]
      },
      {
        title: "Loops",
        body: "Growth and automation loops that compound over time.",
        bullets: [
          "Acquisition, activation, and retention cadences",
          "Automation backlog with ROI scoring",
          "KPI reviews and post-mortems as rituals"
        ]
      }
    ],
    cta: "Ship predictably, learn continuously"
  },
  {
    slug: "pitch-scripts",
    title: "Pitch Scripts",
    tagline: "Compelling narratives for investors and customers",
    summary: "Tight story arcs for formal VC pitches, product demos, and founder narratives.",
    category: "Blueprint",
    sections: [
      {
        title: "VC Pitch",
        body: "Hook, problem, solution, why now, differentiation, traction, and the ask.",
        bullets: [
          "Crisp opener tied to inevitability",
          "Proof points and early traction framed as momentum",
          "Clear use of funds and milestones"
        ]
      },
      {
        title: "Founder Story",
        body: "Authentic narrative that builds trust and shows founder-market fit.",
        bullets: [
          "Origin insight and earned secrets",
          "Customer empathy and proof of hustle",
          "Vision that scales beyond v1"
        ]
      }
    ],
    cta: "Tell the story only you can tell"
  },
  {
    slug: "financial-model",
    title: "Financial Model",
    tagline: "Capital-efficient paths to traction",
    summary: "Lean runway planning with realistic revenue, cost, and hiring curves.",
    category: "Blueprint",
    sections: [
      {
        title: "Revenue & Pricing",
        body: "Align pricing with value moments and willingness to pay.",
        bullets: [
          "Land-and-expand tiers with usage guardrails",
          "Discount policy and trial-to-paid conversion targets",
          "Sensitivity tables for ARPU and churn"
        ]
      },
      {
        title: "Cost & Runway",
        body: "Model the burn that matches your milestones.",
        bullets: [
          "Hiring plan by function with productivity assumptions",
          "Cloud and data costs with scale multipliers",
          "Cash break-even and buffer scenarios"
        ]
      }
    ],
    cta: "Fund the milestones, not the noise"
  },
  {
    slug: "features",
    title: "Features",
    tagline: "What you get on day one",
    summary: "An opinionated set of capabilities that solve the core job to be done.",
    category: "Product",
    sections: [
      {
        title: "Core",
        body: "The non-negotiables that make the product viable.",
        bullets: [
          "Guided blueprint generation with editable sections",
          "Versioned exports to Markdown and PDF",
          "Team commenting and shareable links"
        ]
      },
      {
        title: "Advanced",
        body: "Features that amplify power users and enterprise teams.",
        bullets: [
          "Custom scoring rubrics and templates",
          "API access with audit logs",
          "SOC 2 aligned controls and SSO"
        ]
      }
    ],
    cta: "Start with clarity, scale with control"
  },
  {
    slug: "how-it-works",
    title: "How It Works",
    tagline: "From idea to investor-ready in minutes",
    summary: "A simple path: input context, generate, edit, and export with confidence.",
    category: "Product",
    sections: [
      {
        title: "Input",
        body: "Capture sector, idea, and constraints with guided prompts.",
        bullets: [
          "Pre-built examples and best-practice defaults",
          "Upload notes to ground the plan",
          "Validation-ready assumptions extraction"
        ]
      },
      {
        title: "Output",
        body: "Structured blueprint with views for strategy, product, tech, and pitch.",
        bullets: [
          "Edit inline with AI-assisted rewrites",
          "Download or share securely",
          "Track validation logs as you test"
        ]
      }
    ],
    cta: "See value before you fund it"
  },
  {
    slug: "pricing",
    title: "Pricing",
    tagline: "Simple plans that scale with you",
    summary: "Start free, upgrade when collaboration and compliance become critical.",
    category: "Product",
    sections: [
      {
        title: "Plans",
        body: "From solo founders to enterprise PMOs.",
        bullets: [
          "Starter: core blueprinting and exports",
          "Team: collaboration, roles, and audit trails",
          "Enterprise: SSO, DLP options, dedicated support"
        ]
      },
      {
        title: "Value",
        body: "Transparent pricing aligned to outcomes, not usage surprises.",
        bullets: [
          "Flat collaboration seats with fair overages",
          "Annual savings with success-based milestones",
          "Security reviews included for enterprise"
        ]
      }
    ],
    cta: "Pick the runway that fits"
  },
  {
    slug: "api",
    title: "API",
    tagline: "Automate blueprint generation inside your stack",
    summary: "REST and webhooks to create, score, and export plans programmatically.",
    category: "Product",
    sections: [
      {
        title: "Capabilities",
        body: "Generate, update, and retrieve plans with typed contracts.",
        bullets: [
          "Idempotent endpoints with request signatures",
          "Rate limits tuned for CI and batch generation",
          "Webhooks for status and export completion"
        ]
      },
      {
        title: "Security",
        body: "Enterprise-grade safeguards by default.",
        bullets: [
          "OAuth or key-based auth with IP allowlists",
          "Audit logs and request provenance",
          "PII minimization and data retention controls"
        ]
      }
    ],
    cta: "Extend AutoFounder into your workflows"
  },
  {
    slug: "about",
    title: "About",
    tagline: "Built by founders for founders",
    summary: "We obsess over compressing the distance between idea and conviction.",
    category: "Company",
    sections: [
      {
        title: "Mission",
        body: "Make world-class startup strategy accessible to every builder.",
        bullets: [
          "Evidence-based playbooks",
          "AI that stays aligned to your context",
          "Human-in-the-loop for critical decisions"
        ]
      },
      {
        title: "Values",
        body: "Craft, clarity, and customer trust guide every release.",
        bullets: [
          "Quality over noise",
          "Security and privacy as defaults",
          "Fast iteration with accountability"
        ]
      }
    ],
    cta: "Meet the team behind AutoFounder"
  },
  {
    slug: "blog",
    title: "Blog",
    tagline: "Signals from the frontier of building",
    summary: "Launch notes, founder stories, and deep dives on what is working now.",
    category: "Company",
    sections: [
      {
        title: "What We Cover",
        body: "No fluff—only practical tactics and transparent learnings.",
        bullets: [
          "Launch breakdowns with metrics",
          "Interviews with operators and investors",
          "Architecture and AI how-tos"
        ]
      },
      {
        title: "Cadence",
        body: "Weekly drops with RSS and email digests.",
        bullets: [
          "Changelogs for every release",
          "Founder AMA sessions",
          "Community spotlights"
        ]
      }
    ],
    cta: "Subscribe for the latest drops"
  },
  {
    slug: "careers",
    title: "Careers",
    tagline: "Build the tool founders trust first",
    summary: "Join a lean team shipping with conviction and craft.",
    category: "Company",
    sections: [
      {
        title: "What Matters",
        body: "Autonomy, ownership, and customer obsession.",
        bullets: [
          "Remote-first with quarterly on-sites",
          "High trust, high accountability",
          "Competitive comp with meaningful equity"
        ]
      },
      {
        title: "Open Roles",
        body: "Product, design, engineering, GTM, and ops.",
        bullets: [
          "Builders who prototype fast",
          "Designers who love systems and craft",
          "Operators who turn chaos into cadence"
        ]
      }
    ],
    cta: "See open roles"
  },
  {
    slug: "contact",
    title: "Contact",
    tagline: "We respond fast to real founders",
    summary: "Talk to us about pilots, partnerships, or security reviews.",
    category: "Company",
    sections: [
      {
        title: "How to Reach Us",
        body: "Pick the channel that fits your request.",
        bullets: [
          "Product questions: support@autofounder.io",
          "Partnerships and press: partnerships@autofounder.io",
          "Security and privacy: security@autofounder.io"
        ]
      },
      {
        title: "Response Times",
        body: "We target same-day for support and 48h for reviews.",
        bullets: [
          "Status page for incidents",
          "Dedicated TAM for enterprise",
          "Slack connect for strategic customers"
        ]
      }
    ],
    cta: "Start the conversation"
  },
  {
    slug: "documentation",
    title: "Documentation",
    tagline: "Everything you need to build with AutoFounder",
    summary: "Guides, API references, and implementation recipes.",
    category: "Support",
    sections: [
      {
        title: "Getting Started",
        body: "Hello world to production in under an hour.",
        bullets: [
          "Quickstart for the dashboard and API",
          "Environment setup and keys",
          "Sample scripts in JS/TS"
        ]
      },
      {
        title: "Deep Dives",
        body: "Advanced topics for power users.",
        bullets: [
          "Webhooks, retries, and idempotency",
          "Scoring customization and templates",
          "Security and compliance configuration"
        ]
      }
    ],
    cta: "Open the docs"
  },
  {
    slug: "help-center",
    title: "Help Center",
    tagline: "Fast answers for common questions",
    summary: "Short articles, troubleshooting flows, and live support options.",
    category: "Support",
    sections: [
      {
        title: "Self-Serve",
        body: "Searchable knowledge base with step-by-step fixes.",
        bullets: [
          "Account, billing, and workspace management",
          "Plan limits and exports",
          "Troubleshooting AI outputs"
        ]
      },
      {
        title: "Live Help",
        body: "Talk to a human when it matters.",
        bullets: [
          "Chat and email with <24h response",
          "Escalations with incident playbooks",
          "Office hours for onboarding"
        ]
      }
    ],
    cta: "Find answers now"
  },
  {
    slug: "community",
    title: "Community",
    tagline: "Learn with other builders",
    summary: "AMAs, workshops, and shared templates to accelerate together.",
    category: "Support",
    sections: [
      {
        title: "Events",
        body: "Live sessions to learn and ship faster.",
        bullets: [
          "Weekly build-in-public demos",
          "Founder Q&A and office hours",
          "Template swaps and feedback rounds"
        ]
      },
      {
        title: "Spaces",
        body: "Join the channels that match your focus.",
        bullets: [
          "Slack community with topic rooms",
          "Show-and-tell for launches",
          "Contributor program for templates"
        ]
      }
    ],
    cta: "Join the community"
  },
  {
    slug: "status",
    title: "Status",
    tagline: "Transparent uptime and incident comms",
    summary: "Real-time view of system health, past incidents, and maintenance windows.",
    category: "Support",
    sections: [
      {
        title: "Live Metrics",
        body: "Uptime, latency, and error rates across services.",
        bullets: [
          "API, dashboard, and export pipeline",
          "Historical uptime and SLA commitments",
          "Subscription options for alerts"
        ]
      },
      {
        title: "Incident Process",
        body: "How we communicate and resolve issues.",
        bullets: [
          "Timelines with root cause and fixes",
          "Post-incident reviews shared publicly",
          "Customer impact summaries"
        ]
      }
    ],
    cta: "View system status"
  },
  {
    slug: "privacy-policy",
    title: "Privacy Policy",
    tagline: "Your data, handled with respect",
    summary: "Clear commitments on data collection, use, retention, and user rights.",
    category: "Trust",
    sections: [
      {
        title: "Data Practices",
        body: "What we collect, why we collect it, and how long we keep it.",
        bullets: [
          "PII minimization by design",
          "Opt-outs and data access requests",
          "Sub-processor list and regions"
        ]
      },
      {
        title: "User Rights",
        body: "Your controls over your information.",
        bullets: [
          "Access, correction, and deletion",
          "Portability and consent management",
          "Contact details for requests"
        ]
      }
    ],
    cta: "Review our privacy commitments"
  },
  {
    slug: "terms-of-service",
    title: "Terms of Service",
    tagline: "Clear rules so you can build with confidence",
    summary: "Usage rights, responsibilities, and limits spelled out in plain language.",
    category: "Trust",
    sections: [
      {
        title: "Usage",
        body: "What you can expect from the service and what we expect from you.",
        bullets: [
          "Account eligibility and acceptable use",
          "Service availability and changes",
          "IP ownership and license to use"
        ]
      },
      {
        title: "Liability",
        body: "Fair limits and dispute resolution.",
        bullets: [
          "Limitations of liability and indemnity",
          "Warranties and disclaimers",
          "Governing law and arbitration"
        ]
      }
    ],
    cta: "Understand the agreement"
  },
  {
    slug: "cookie-policy",
    title: "Cookie Policy",
    tagline: "Transparency on tracking and preferences",
    summary: "How we use cookies and similar technologies, and how you can control them.",
    category: "Trust",
    sections: [
      {
        title: "What We Use",
        body: "Essential, performance, and analytics cookies explained.",
        bullets: [
          "Session cookies for secure auth",
          "Analytics for product improvement",
          "Preference storage to reduce friction"
        ]
      },
      {
        title: "Controls",
        body: "Manage consent without losing functionality.",
        bullets: [
          "Opt-out flows and browser controls",
          "Granular categories per region",
          "Retention periods and revocation"
        ]
      }
    ],
    cta: "Manage cookie preferences"
  },
  {
    slug: "security",
    title: "Security",
    tagline: "Defense in depth for your data",
    summary: "Technical and organizational safeguards to keep customer data safe.",
    category: "Trust",
    sections: [
      {
        title: "Controls",
        body: "Security built into every layer.",
        bullets: [
          "SOC 2 aligned controls and regular pen tests",
          "Encryption in transit and at rest",
          "Role-based access with least privilege"
        ]
      },
      {
        title: "Response & Compliance",
        body: "Prepared for incidents and audits.",
        bullets: [
          "24/7 incident response with runbooks",
          "Vendor risk management and SDLC checks",
          "Responsible disclosure program"
        ]
      }
    ],
    cta: "Review our security posture"
  }
];
