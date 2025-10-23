import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, FlaskConical, Code, Workflow, BarChart3, BookOpen } from "lucide-react";

const capabilities = [
  {
    icon: Lightbulb,
    title: "Assist Researchers in Hypothesis Development",
    description: "Query domain knowledge bases and synthesize physics literature to identify research gaps and formulate testable hypotheses grounded in established science."
  },
  {
    icon: FlaskConical,
    title: "Design Reproducible Experiments",
    description: "Translate high-level physics goals into detailed, reproducible protocols suitable for REANA workflow systems, automating the translation from concept to executable pipeline."
  },
  {
    icon: Code,
    title: "Generate Optimized Code",
    description: "Create production-quality code integrating physics correctness with computational efficiency, energy awareness, and industry best practices."
  },
  {
    icon: Workflow,
    title: "Orchestrate Complex Workflows",
    description: "Manage multi-stage simulations, data processing, and analysis across distributed resources while maintaining full reproducibility and transparency."
  },
  {
    icon: BarChart3,
    title: "Analyze Results with Physics Understanding",
    description: "Interpret experimental outcomes in light of physics principles, identifying surprising phenomena and guiding further investigation beyond statistical analysis."
  },
  {
    icon: BookOpen,
    title: "Document and Share Discoveries",
    description: "Generate publication-ready documentation, structured data repositories, and reproducible analysis packages enabling community verification and reuse."
  }
];

const AgenticCapabilities = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">
            What Our Agentic Assistants Do
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            End-to-end support for the complete research lifecycle
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
