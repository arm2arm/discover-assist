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
            Our Mission to Assist Researchers
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground leading-relaxed text-center mb-8">
              Physics-LLM empowers researchers with autonomous AI agents that accelerate automated 
              scientific discoveries. By combining domain-specific Large Language Models with 
              physics-grounded knowledge bases, our agentic systems work alongside researchers to 
              automate hypothesis generation, experiment design, and data analysis—transforming the 
              pace of discovery across fundamental sciences while maintaining reproducibility and 
              scientific rigor.
            </p>
            
            <div className="bg-card-gradient rounded-2xl p-8 border border-border shadow-card">
              <div className="flex items-start gap-4">
                <Sparkles className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <p className="text-lg text-card-foreground">
                  We are committed to building AI assistants that embody{" "}
                  <strong className="text-accent">FAIR principles</strong>{" "}
                  (Findable, Accessible, Interoperable, Reusable) and support the entire research 
                  lifecycle—from hypothesis conception through reproducible execution and transparent documentation.
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
