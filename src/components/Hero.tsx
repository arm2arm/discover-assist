import AnimatedBackground from "./backgrounds/AnimatedBackground";
import { Brain, Zap, Network, Sparkles } from "lucide-react";

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
        <div className="max-w-5xl mx-auto text-center space-y-12 animate-[fade-in_1s_ease-out,scale-in_0.8s_ease-out]">
          {/* AI Badge indicator */}
          <div className="inline-flex items-center gap-3 bg-white/15 backdrop-blur-md border-2 border-white/40 rounded-full px-8 py-4 mb-8 shadow-glow animate-pulse">
            <div className="relative">
              <Brain className="w-8 h-8 text-white animate-[spin_8s_linear_infinite]" />
              <div className="absolute inset-0 bg-white/30 rounded-full animate-ping" />
            </div>
            <span className="text-white font-bold text-lg tracking-wider">AGENTIC AI • POWERED BY LLM</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold leading-tight animate-[fade-in_1.2s_ease-out]">
            <span className="inline-block bg-gradient-to-r from-white via-white to-white/90 bg-clip-text text-transparent animate-[shimmer_3s_ease-in-out_infinite] bg-[length:200%_auto]">
              Physics-LLM
            </span>
            <br />
            <span className="text-white/95 text-4xl sm:text-5xl lg:text-6xl mt-4 inline-block">
              AI Research Assistants for
            </span>
            <br />
            <span className="inline-block mt-4 bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent animate-[shimmer_3s_ease-in-out_infinite_1s] bg-[length:200%_auto]">
              Reproducible Science
            </span>
          </h1>
          
          <div className="pt-12 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-72 h-72 bg-white/5 rounded-full blur-3xl animate-pulse" />
            </div>
            <p className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white tracking-wide animate-[pulse_2s_ease-in-out_infinite] relative z-10">
              Coming Soon
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
