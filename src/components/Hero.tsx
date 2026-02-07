import AnimatedBackground from "./backgrounds/AnimatedBackground";
import { Button } from "@/components/ui/button";
import { Brain, Zap, Network, Sparkles, ArrowRight, FileText } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-hero-gradient overflow-hidden">
      <AnimatedBackground intensity={1.5} />

      {/* Floating AI badges */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <div className="absolute top-20 left-10 animate-[float_6s_ease-in-out_infinite]">
          <div className="bg-white/10 backdrop-blur-md border border-white/30 rounded-full px-6 py-3 flex items-center gap-2 shadow-glow">
            <Brain className="w-5 h-5 text-white animate-pulse" />
            <span className="text-white font-semibold text-sm">AI Agents</span>
          </div>
        </div>
        <div className="absolute top-32 right-16 animate-[float_7s_ease-in-out_infinite_1s]">
          <div className="bg-white/10 backdrop-blur-md border border-white/30 rounded-full px-6 py-3 flex items-center gap-2 shadow-glow">
            <Network className="w-5 h-5 text-white animate-pulse" />
            <span className="text-white font-semibold text-sm">Neural Networks</span>
          </div>
        </div>
        <div className="absolute bottom-32 left-20 animate-[float_8s_ease-in-out_infinite_2s]">
          <div className="bg-white/10 backdrop-blur-md border border-white/30 rounded-full px-6 py-3 flex items-center gap-2 shadow-glow">
            <Zap className="w-5 h-5 text-white animate-pulse" />
            <span className="text-white font-semibold text-sm">LLM Powered</span>
          </div>
        </div>
        <div className="absolute bottom-24 right-24 animate-[float_6.5s_ease-in-out_infinite_1.5s]">
          <div className="bg-white/10 backdrop-blur-md border border-white/30 rounded-full px-6 py-3 flex items-center gap-2 shadow-glow">
            <Sparkles className="w-5 h-5 text-white animate-pulse" />
            <span className="text-white font-semibold text-sm">ML Research</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8 animate-[fade-in_1s_ease-out,scale-in_0.8s_ease-out]">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 bg-white/15 backdrop-blur-md border-2 border-white/40 rounded-full px-8 py-4 shadow-glow animate-pulse">
            <div className="relative">
              <Brain className="w-8 h-8 text-white animate-[spin_8s_linear_infinite]" />
              <div className="absolute inset-0 bg-white/30 rounded-full animate-ping" />
            </div>
            <span className="text-white font-bold text-lg tracking-wider">
              AGENTIC AI · POWERED BY LLM
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="inline-block bg-gradient-to-r from-white via-white to-white/90 bg-clip-text text-transparent animate-[shimmer_3s_ease-in-out_infinite] bg-[length:200%_auto]">
              Agentic Workflows
            </span>
            <br />
            <span className="text-white/95 text-3xl sm:text-4xl lg:text-5xl mt-2 inline-block">
              Building Autonomous AI Systems for
            </span>
            <br />
            <span className="inline-block mt-2 bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent animate-[shimmer_3s_ease-in-out_infinite_1s] bg-[length:200%_auto]">
              Physics Research Automation
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-white/85 max-w-3xl mx-auto leading-relaxed">
            Developing LLM-based agentic frameworks that orchestrate complex research
            workflows—from data analysis to publication-ready results. Leveraging large language
            models and agentic AI to transform Big Data into Smart Data.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 hover:scale-105 transition-all duration-300 shadow-glow group"
              onClick={() => document.querySelector("#outputs")?.scrollIntoView({ behavior: "smooth" })}
            >
              Explore Our Tools
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 backdrop-blur-sm"
              onClick={() => document.querySelector("#resources")?.scrollIntoView({ behavior: "smooth" })}
            >
              <FileText className="mr-2 h-5 w-5" />
              Read Documentation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
