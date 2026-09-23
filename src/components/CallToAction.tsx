import { Mail, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CallToAction = () => (
  <section className="py-20 md:py-28 bg-primary">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        <div><p className="text-xs font-bold uppercase tracking-widest text-accent mb-4">Contact / How to reach us</p><h2 className="font-heading text-4xl sm:text-5xl font-bold text-primary-foreground">Start with the project coordination team</h2><p className="text-lg text-primary-foreground/75 leading-relaxed mt-5">For project questions, events, press enquiries, or help finding the right work package, contact the PhysicsLLM coordinator.</p></div>
        <div className="border-l-2 border-accent pl-7 py-2"><p className="font-heading text-2xl font-semibold text-primary-foreground">Dr. Tim Ruhe</p><p className="text-primary-foreground/70 mt-1">Project Coordinator · TU Dortmund University</p><Button asChild size="lg" className="mt-6 group"><a href="mailto:tim.ruhe@tu-dortmund.de"><Mail className="h-5 w-5" />Email the coordinator<ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" /></a></Button><p className="flex items-center gap-2 text-sm text-primary-foreground/60 mt-5"><MapPin className="h-4 w-4" /> Dortmund, Germany</p></div>
      </div>
    </div>
  </section>
);

export default CallToAction;
