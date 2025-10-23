import { Card, CardContent } from "@/components/ui/card";
import { Atom, Microscope, Telescope, CircuitBoard } from "lucide-react";

const domains = [
  {
    icon: Atom,
    title: "High-Energy Physics",
    items: ["Particle interactions", "Detector simulations", "Monte Carlo methods", "Data analysis workflows"]
  },
  {
    icon: Microscope,
    title: "Materials Science & Condensed Matter",
    items: ["Crystal structures", "Electronic properties", "Simulation methods", "Synthesis pathways"]
  },
  {
    icon: Telescope,
    title: "Astrophysics & Cosmology",
    items: ["Observational techniques", "Data integration", "Statistical inference", "Cosmological modeling"]
  },
  {
    icon: CircuitBoard,
    title: "Quantum Physics",
    items: ["Quantum mechanics", "Many-body systems", "Quantum algorithms", "Quantum computing workflows"]
  }
];

const DomainKnowledge = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">
            Domain-Oriented Knowledge Bases
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Specialized expertise across fundamental physics domains
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-12">
          {domains.map((domain, index) => (
            <Card 
              key={index}
              className="group hover:shadow-glow transition-all duration-300 hover:-translate-y-1 border-border/50 bg-card"
            >
              <CardContent className="p-6">
                <div className="mb-4 bg-gradient-to-br from-accent/20 to-primary/20 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <domain.icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-card-foreground">
                  {domain.title}
                </h3>
                <ul className="space-y-2">
                  {domain.items.map((item, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-card-gradient border-border/50">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-card-foreground">
                Knowledge Base Integration
              </h3>
              <ul className="grid sm:grid-cols-2 gap-4 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">✓</span>
                  <span>Curated physics literature and theoretical frameworks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">✓</span>
                  <span>Established computational methods and algorithms</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">✓</span>
                  <span>Experimental protocols and instrumentation specs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">✓</span>
                  <span>Data formats and metadata standards</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">✓</span>
                  <span>Energy efficiency and computational best practices</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">✓</span>
                  <span>Community feedback and cutting-edge developments</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DomainKnowledge;
