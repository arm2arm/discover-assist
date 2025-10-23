import { Card, CardContent } from "@/components/ui/card";
import { RefreshCw, Database, Zap, Lock } from "lucide-react";

const objectives = [
  {
    icon: RefreshCw,
    title: "Reproducible Science Through Automation",
    description: "Our agentic LLMs orchestrate reproducible research workflows using REANA and similar frameworks. These AI assistants automate complex multi-step experiments while maintaining full transparency and traceability, ensuring every result can be independently verified."
  },
  {
    icon: Database,
    title: "Domain-Oriented Knowledge Integration",
    description: "Grounded in structured, domain-specific knowledge bases from physics literature, theory, experimental data, and best practices. Our AI provides physics-informed guidance across particle physics, materials science, astrophysics, and quantum systems."
  },
  {
    icon: Zap,
    title: "Optimized Code Generation",
    description: "Generate scientifically sound code that is computationally efficient and energy-conscious. Our systems select appropriate algorithms, leverage GPU acceleration, minimize energy consumption, and balance numerical accuracy with computational cost."
  },
  {
    icon: Lock,
    title: "FAIR Principles as Foundation",
    description: "Architected to support FAIR science from day one. AI-assisted metadata generation, standardized formats, clear documentation, ontologies for interoperability, and structured workflows enable findable, accessible, and reusable research."
  }
];

const Objectives = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">
            Core Objectives
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building the foundation for trustworthy, efficient, and reproducible AI-assisted physics research
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {objectives.map((objective, index) => (
            <Card 
              key={index}
              className="group hover:shadow-glow transition-all duration-300 hover:-translate-y-1 border-border/50 bg-card"
            >
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="bg-accent/10 p-3 rounded-xl group-hover:bg-accent/20 transition-colors">
                    <objective.icon className="h-8 w-8 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3 text-card-foreground group-hover:text-accent transition-colors">
                      {objective.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {objective.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Objectives;
