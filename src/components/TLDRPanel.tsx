import { Card, CardContent } from "@/components/ui/card";
import { Target, Layers, Package, Activity } from "lucide-react";

const cards = [
  {
    icon: Target,
    title: "The goal",
    text: "Make research data easier to organize, find, share, and reuse with AI-powered research data management tools.",
  },
  {
    icon: Layers,
    title: "How it works",
    text: "Researchers use natural-language questions to find information across publications, databases, software repositories, and laboratory notebooks.",
  },
  {
    icon: Package,
    title: "What we will build",
    text: "Open-source physics AI models, intelligent research assistants, code-generation tools, and simpler interfaces for sharing and retrieving data.",
  },
  {
    icon: Activity,
    title: "Why open source",
    text: "Open tools support transparency, long-term sustainability, adaptability, and scientific data sovereignty.",
  },
];

const TLDRPanel = () => {
  return (
    <section id="overview" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">At a Glance</h2>
          <p className="text-muted-foreground">A quick overview of Physics-LLM and its research data toolkit</p>
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
