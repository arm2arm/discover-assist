import { Card, CardContent } from "@/components/ui/card";
import { Shield, Gauge, Users } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Reproducibility and Transparency",
    items: [
      "Automatic generation of machine-readable workflow specifications",
      "Comprehensive recording of all computational parameters",
      "Code traceability with documentation and version tracking",
      "Energy and compute logging for sustainability assessment",
      "Complete provenance recording from raw data to final results"
    ]
  },
  {
    icon: Gauge,
    title: "Compute Efficiency and Energy Consciousness",
    items: [
      "Intelligent algorithm selection balancing accuracy and cost",
      "Resource-aware execution matching tasks to available hardware",
      "Energy profiling and optimization opportunity identification",
      "Sustainable practices avoiding redundant computation",
      "Scalability guidance for parallelization and distribution"
    ]
  },
  {
    icon: Users,
    title: "Collaborative Intelligence",
    items: [
      "Handling computational routine and documentation burden",
      "Rapid exploration of design spaces and parameter variations",
      "Synthesizing information across vast literature",
      "Suggesting optimizations and efficiency improvements",
      "Researchers retain full agency and creative direction"
    ]
  }
];

const KeyFeatures = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">
            Key Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Advancing physics research through trustworthy AI collaboration
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="group hover:shadow-glow transition-all duration-300 hover:-translate-y-1 border-border/50 bg-card"
            >
              <CardContent className="p-8">
                <div className="mb-6 bg-gradient-to-br from-accent/20 to-primary/20 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <feature.icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold mb-6 text-card-foreground">
                  {feature.title}
                </h3>
                <ul className="space-y-3">
                  {feature.items.map((item, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-accent mt-1 flex-shrink-0">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
