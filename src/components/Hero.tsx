import { Button } from "@/components/ui/button";
import { ArrowRight, FileText } from "lucide-react";
import AnimatedBackground from "./backgrounds/AnimatedBackground";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-hero-gradient overflow-hidden">
      <AnimatedBackground intensity={1} />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="inline-block mb-4">
            <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium border border-white/30">
              Work Package: Agentic Assistants
            </span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Physics-LLM: Agentic LLMs for Autonomous{" "}
            <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Scientific Discovery
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Developing autonomous AI agents powered by domain-specific Large Language Models to advance 
            reproducible, efficient, and discoverable physics research.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 hover:scale-105 transition-all duration-300 shadow-glow group"
            >
              Explore Research
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 backdrop-blur-sm"
            >
              <FileText className="mr-2 h-5 w-5" />
              Documentation
            </Button>
          </div>

          <div className="pt-8 flex items-center justify-center gap-2 text-white/80 text-sm">
            <div className="h-px w-12 bg-white/30" />
            <span>Principal Investigator: Dr. A. Khalatyan</span>
            <div className="h-px w-12 bg-white/30" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
