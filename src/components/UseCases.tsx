import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Database, Workflow } from "lucide-react";

const cases = [
  {
    icon: BookOpen,
    title: "Autonomous Literature Review",
    description:
      "Agents that search, summarize, and synthesize physics papers with citation management and metadata extraction across all ErUM communities.",
  },
  {
    icon: Database,
    title: "FAIR Data Pipeline Orchestration",
    description:
      "Multi-step workflows for processing, curating, and publishing research data with automated metadata generation following FAIR principles.",
  },
  {
    icon: Workflow,
    title: "Research Workflow Automation",
    description:
      "End-to-end agents that coordinate data analysis, visualization, and documentation for reproducible science using REANA.",
  },
];

const UseCases = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">
            What We're Building
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Concrete applications of agentic AI in fundamental physics research
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {cases.map((c, i) => (
            <Card
              key={i}
              className="group hover:shadow-glow hover:-translate-y-1 transition-all duration-300 border-border/50 bg-card"
            >
              <CardContent className="p-8 text-center">
                <div className="mx-auto mb-6 bg-gradient-to-br from-accent/20 to-primary/20 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <c.icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-card-foreground">{c.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{c.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
