import { Button } from "@/components/ui/button";
import { Mail, Users, ArrowRight } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-20 bg-hero-gradient relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            Join the Physics-LLM Community
          </h2>
          
          <p className="text-xl text-white/90 leading-relaxed">
            We invite physicists, computational scientists, and research institutions to collaborate 
            in advancing reproducible, efficient, and AI-assisted fundamental physics. Whether you're 
            exploring novel materials, discovering new particles, mapping the cosmos, or probing quantum 
            phenomena, Physics-LLM assistants are designed to accelerate your research while maintaining 
            the highest standards of scientific integrity, reproducibility, and sustainability.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 hover:scale-105 transition-all duration-300 shadow-glow group"
            >
              <Mail className="mr-2 h-5 w-5" />
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 backdrop-blur-sm"
            >
              <Users className="mr-2 h-5 w-5" />
              Join Collaboration
            </Button>
          </div>

          <div className="pt-8">
            <p className="text-lg text-white/80 italic">
              "Together, we're building the next generation of physics research infrastructure—intelligent, 
              transparent, reproducible, and conscious of our computational footprint."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
