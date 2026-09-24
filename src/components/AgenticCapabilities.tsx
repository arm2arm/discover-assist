import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, BrainCircuit, Code, Bot, Database, Search } from "lucide-react";

const capabilities = [
  {
    icon: BookOpen,
    title: "Collect Knowledge from New Sources",
    description: "Bring publications, software repositories, and laboratory notebooks into research data workflows alongside experiments, observatories, and simulations."
  },
  {
    icon: BrainCircuit,
    title: "Train AI Models for Physics",
    description: "Fine-tune open-source models for physics tasks such as metadata extraction, summarization, and domain-specific question answering."
  },
  {
    icon: Code,
    title: "Generate and Optimize Code",
    description: "Help researchers create code for data analysis and improve its speed and energy efficiency."
  },
  {
    icon: Bot,
    title: "Build Intelligent Research Assistants",
    description: "Develop agentic AI systems that can plan, reason, and carry out multi-step tasks, suggest next steps, and help write the required code."
  },
  {
    icon: Database,
    title: "Simplify Data Sharing and Storage",
    description: "Create a natural-language interface that makes it easier to deposit, classify, retrieve, and share research data."
  },
  {
    icon: Search,
    title: "Make Hidden Data Discoverable",
    description: "Extract information and metadata from publications and other sources to populate searchable databases."
  }
];

const AgenticCapabilities = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">
            What the project will build
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Six connected areas spanning the research data management process
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {capabilities.map((capability, index) => (
            <Card 
              key={index}
              className="group hover:shadow-card transition-all duration-300 hover:-translate-y-1 border-border/50 bg-card"
            >
              <CardContent className="p-6">
                <div className="mb-4 bg-accent/10 w-14 h-14 rounded-xl flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <capability.icon className="h-7 w-7 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-card-foreground">
                  {capability.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {capability.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgenticCapabilities;
