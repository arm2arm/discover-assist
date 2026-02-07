import { Card, CardContent } from "@/components/ui/card";
import { Target, Layers, Package, Activity } from "lucide-react";

const cards = [
  {
    icon: Target,
    title: "Objective",
    text: "Create autonomous research assistants using CrewAI, LangChain, and domain-specific physics LLMs for seamless data publication and curation.",
  },
  {
    icon: Layers,
    title: "Focus Areas",
    text: "Workflow orchestration · Multi-agent systems · FAIR data pipelines · Metadata extraction · Knowledge synthesis",
  },
  {
    icon: Package,
    title: "Deliverables",
    text: "Open-source frameworks · RDM toolkit components · Benchmark datasets · Best-practice guides · Deployment templates",
  },
  {
    icon: Activity,
    title: "Status",
    text: "Active (2025–2027) · Part of PhysicsLLM · Funded by BMFTR via ErUM-Data-Hub · ~2.8M EUR consortium",
  },
];

const TLDRPanel = () => {
  return (
    <section id="overview" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">At a Glance</h2>
          <p className="text-muted-foreground">Quick overview of the Agentic Workflows work package</p>
        </div>
        <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {cards.map((c, i) => (
            <Card key={i} className="group hover:shadow-card hover:-translate-y-1 transition-all duration-300 border-border/50 bg-card">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-accent/10 p-2 rounded-lg group-hover:bg-accent/20 transition-colors">
                    <c.icon className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="text-lg font-bold text-card-foreground">{c.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{c.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TLDRPanel;
