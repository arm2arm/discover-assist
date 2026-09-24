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
            AI-powered research data management
          </h2>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground leading-relaxed text-center mb-8">
              Physics-LLM brings together physicists, computer scientists, and industry partners
              to develop a toolkit based on Large Language Models—the same AI technology behind
              chatbots. Researchers will be able to ask questions in natural language, find
              relevant information, and organize, store, and share data in reusable formats.
            </p>

            <div className="bg-card-gradient rounded-2xl p-8 border border-border shadow-card">
              <div className="flex items-start gap-4">
                <Sparkles className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <p className="text-lg text-card-foreground">
                  <strong className="text-accent">Open source matters.</strong>{" "}
                  The project’s tools and fine-tuned AI models will be openly available so
                  research institutes can adapt them without depending on proprietary commercial
                  services. This supports transparency, sustainability, and data sovereignty.
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
