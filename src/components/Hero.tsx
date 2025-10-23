import AnimatedBackground from "./backgrounds/AnimatedBackground";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-hero-gradient overflow-hidden">
      <AnimatedBackground intensity={1} />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-12 animate-fade-in">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Physics-LLM: AI Research Assistants for{" "}
            <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Reproducible Science
            </span>
          </h1>
          
          <div className="pt-8">
            <p className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white/90 tracking-wide">
              Coming Soon
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
