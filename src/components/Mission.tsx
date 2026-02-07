import { Target, Sparkles } from "lucide-react";

const Mission = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-8">
            <Target className="h-12 w-12 text-accent" />
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-8 text-foreground">
            From Big Data to Smart Data
          </h2>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground leading-relaxed text-center mb-8">
              PhysicsLLM empowers researchers across all ErUM communities with autonomous AI
              agents that accelerate scientific discovery. By combining domain-specific Large
              Language Models with physics-grounded knowledge bases, our agentic systems automate
              data curation, metadata annotation, semantic search, and workflow documentation—transforming
              how ~20,000 scientists manage and publish research data.
            </p>

            <div className="bg-card-gradient rounded-2xl p-8 border border-border shadow-card">
              <div className="flex items-start gap-4">
                <Sparkles className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <p className="text-lg text-card-foreground">
                  Built on{" "}
                  <strong className="text-accent">FAIR principles</strong>{" "}
                  (Findable, Accessible, Interoperable, Reusable) and integrated with{" "}
                  <strong className="text-accent">REANA</strong> for reproducible workflow
                  orchestration. Our tools prioritize energy-conscious and computationally
                  efficient code generation across the entire research lifecycle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
