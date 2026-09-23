import { useState } from "react";
import { Play, X } from "lucide-react";
import AnimatedBackground from "./backgrounds/AnimatedBackground";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const [open, setOpen] = useState(false);
  return (
    <section id="overview" className="relative overflow-hidden bg-primary text-primary-foreground py-14 md:py-20">
      <AnimatedBackground intensity={0.8} />
      <div className="absolute inset-0 hero-full-overlay" />
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        <div className="lg:col-span-5 hero-copy-surface p-5 sm:p-7">
          <p className="text-xs font-bold uppercase tracking-widest text-accent mb-5">Agentic Workflows · PhysicsLLM</p>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">AI research assistants for reproducible physics</h1>
          <p className="text-lg leading-relaxed text-primary-foreground/75 mt-6">We develop language-model agents that help researchers connect data, software, and scientific context—while keeping every step visible and reproducible.</p>
          <div className="mt-8 flex flex-wrap gap-3 text-xs font-bold uppercase tracking-widest text-primary-foreground/70">
            <span className="border border-primary-foreground/20 px-3 py-2">AI agents</span><span className="border border-primary-foreground/20 px-3 py-2">Open science</span><span className="border border-primary-foreground/20 px-3 py-2">Human oversight</span>
          </div>
        </div>
        <button onClick={() => setOpen(true)} className="lg:col-span-7 group relative aspect-video overflow-hidden border border-primary-foreground/30 hero-video-placeholder text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent" aria-label="Open PhysicsLLM video placeholder">
          <div className="absolute inset-0 hero-media-overlay" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="h-16 w-16 rounded-full bg-accent text-accent-foreground flex items-center justify-center group-hover:scale-110 transition-transform"><Play className="h-6 w-6 ml-1" fill="currentColor" /></span>
          </div>
          <div className="absolute bottom-5 left-5 right-5">
            <p className="font-heading font-semibold text-primary-foreground">Project video</p>
            <p className="text-xs text-primary-foreground/65 mt-1">Video placeholder · Coming soon</p>
          </div>
        </button>
      </div>
      {open && <div className="fixed inset-0 z-[100] bg-primary/95 p-4 flex items-center justify-center" role="dialog" aria-modal="true" aria-label="PhysicsLLM project overview">
        <div className="relative w-full max-w-4xl aspect-video bg-primary border border-primary-foreground/20 overflow-hidden">
          <AnimatedBackground intensity={1} />
          <Button variant="ghost" size="icon" className="absolute right-3 top-3 z-20 text-primary-foreground hover:bg-primary-foreground/10" onClick={() => setOpen(false)} aria-label="Close overview"><X /></Button>
          <div className="absolute inset-0 flex items-center justify-center p-8 text-center z-10">
            <div className="max-w-2xl"><p className="text-xs font-bold uppercase tracking-widest text-accent">PhysicsLLM in one minute</p><h2 className="font-heading text-3xl md:text-5xl font-bold mt-4">Researchers stay in control. AI helps connect the work.</h2><p className="text-primary-foreground/75 leading-relaxed mt-5">Our assistants bring together domain knowledge, tools, data, and provenance so complex workflows become easier to build, inspect, and reproduce.</p></div>
          </div>
        </div>
      </div>}
    </section>
  );
};

export default Hero;
