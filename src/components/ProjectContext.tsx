import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import bmbfLogo from "@/assets/bmbf-logo.png";
import erumLogo from "@/assets/erum-data-hub-logo.png";

const ProjectContext = () => {
  return (
    <section className="py-20 bg-hero-gradient relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(165_60%_55%/0.15),transparent_60%)]" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Part of the PhysicsLLM Initiative
          </h2>
          <p className="text-lg text-white/90 leading-relaxed">
            PhysicsLLM develops LLM-enhanced toolkits for research data management across all ErUM
            physics communities—from particle and nuclear physics to astronomy. Our work addresses
            the challenge of transforming Big Data into Smart Data through AI-powered curation,
            publication, and discovery tools.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-8">
            <a href="https://www.bmftr.bund.de" target="_blank" rel="noopener noreferrer" className="bg-white/90 rounded-lg p-3 hover:bg-white transition-colors">
              <img src={bmbfLogo} alt="BMFTR" className="h-10 w-auto object-contain" />
            </a>
            <a href="https://erumdatahub.de" target="_blank" rel="noopener noreferrer" className="bg-white/90 rounded-lg p-3 hover:bg-white transition-colors">
              <img src={erumLogo} alt="ErUM-Data-Hub" className="h-10 w-auto object-contain" />
            </a>
            <a
              href="https://www.punch4nfdi.de"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/15 backdrop-blur-sm border border-white/30 rounded-lg px-5 py-3 text-white font-semibold text-sm hover:bg-white/25 transition-colors"
            >
              PUNCH4NFDI
            </a>
          </div>

          <Button
            asChild
            variant="outline"
            className="border-white text-white hover:bg-white/10"
          >
            <a href="https://physics-llm.erumdatahub.de/" target="_blank" rel="noopener noreferrer">
              Visit PhysicsLLM Main Site <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectContext;
