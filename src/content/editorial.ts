export type EditorialCategory = "Guidelines" | "News" | "Event" | "Workshop" | "Paper" | "Outreach" | "Interview";

export type EditorialPost = {
  slug: string;
  title: string;
  category: EditorialCategory;
  date: string;
  displayDate: string;
  summary: string;
  readTime: string;
  body: { heading?: string; paragraphs: string[]; bullets?: string[] }[];
};

export const editorialPosts: EditorialPost[] = [
  {
    slug: "llm-hosting-guidelines",
    title: "Practical guidelines for hosting LLMs in research environments",
    category: "Guidelines",
    date: "2026-09-18",
    displayDate: "18 September 2026",
    summary: "A research-first checklist for operating language models securely, reproducibly, and efficiently on institutional infrastructure.",
    readTime: "6 min read",
    body: [
      {
        paragraphs: [
          "Hosting a large language model for research is not only a deployment task. It is part of the scientific method: model versions, prompts, retrieval sources, hardware, and inference settings can all influence a result.",
          "These guidelines provide a practical starting point for teams that want to offer shared LLM services without losing transparency or control of research data."
        ]
      },
      {
        heading: "Keep research data under control",
        paragraphs: ["Classify inputs before they reach a model and define which data may leave institutional infrastructure."],
        bullets: ["Separate public, internal, sensitive, and embargoed material.", "Document retention and logging policies.", "Use access controls appropriate to the data, not only to the model endpoint."]
      },
      {
        heading: "Make every result reproducible",
        paragraphs: ["A useful service records enough context for another researcher to understand how an output was produced."],
        bullets: ["Pin model and tokenizer versions.", "Record generation settings and retrieval sources.", "Preserve prompts and workflow definitions alongside research outputs."]
      },
      {
        heading: "Operate within a compute budget",
        paragraphs: ["Right-size models for the task, measure utilization, and publish service limits so researchers can plan reliable workflows."],
        bullets: ["Start with the smallest model that meets the quality threshold.", "Batch compatible workloads and monitor idle accelerators.", "Report energy and hardware assumptions with benchmark results."]
      }
    ]
  },
  {
    slug: "agentic-workflows-work-package",
    title: "Inside the Agentic Workflows work package",
    category: "News",
    date: "2026-08-28",
    displayDate: "28 August 2026",
    summary: "How the AIP team is connecting domain knowledge, tools, and reproducible workflow records for physics research.",
    readTime: "4 min read",
    body: [{ paragraphs: ["The Agentic Workflows work package explores how specialized assistants can coordinate analysis tools while keeping their decisions inspectable.", "The focus is not autonomous science without researchers. It is dependable assistance that helps researchers find context, compose workflows, and preserve the steps behind a result."] }]
  },
  {
    slug: "from-big-data-to-smart-data",
    title: "From Big Data to Smart Data",
    category: "Outreach",
    date: "2026-07-14",
    displayDate: "14 July 2026",
    summary: "A plain-language introduction to why context, metadata, and provenance matter as much as scale in scientific data.",
    readTime: "3 min read",
    body: [{ paragraphs: ["Modern physics produces immense data collections. Their value depends on whether researchers can discover, understand, and reuse them.", "PhysicsLLM investigates assistants that connect datasets with the metadata, software, and decisions needed to turn stored information into research-ready knowledge."] }]
  }
];

export const activityGroups = [
  { id: "workshops", title: "Workshops", category: "Workshop", description: "Hands-on sessions where researchers test methods, compare workflows, and shape shared practices." },
  { id: "events", title: "Events", category: "Event", description: "Talks, meetings, and community dates across PhysicsLLM and the ErUM ecosystem." },
  { id: "papers", title: "Papers", category: "Paper", description: "Publications, preprints, and technical reports produced by the project." },
  { id: "outreach", title: "Outreach presentations", category: "Outreach", description: "Accessible presentations that connect our research with broader scientific communities." },
  { id: "interviews", title: "Interviews", category: "Interview", description: "Conversations with researchers about practical, responsible AI for science." }
] as const;
