import { Card, CardContent } from "@/components/ui/card";
import { Scale, Boxes, Bot } from "lucide-react";

const items = [
  {
    icon: Scale,
    title: "A widening data gap",
    description:
      "Physics experiments and simulations generate enormous amounts of data, but much of it is not properly stored, shared, or made accessible for others to reuse.",
  },
  {
    icon: Boxes,
    title: "Unequal access to infrastructure",
    description:
      "Smaller experiments and research facilities often lack the technical infrastructure and staff needed to manage their data effectively.",
  },
  {
    icon: Bot,
    title: "Costly repetition",
    description:
      "When results remain difficult to find, valuable knowledge stays locked away and researchers spend time and resources repeating work that has already been done.",
  },
];

const DataChallenge = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">
            The Challenge We Address
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
             Scientists are highly effective at collecting and analyzing data. The challenge is
             closing the gap between the data we collect and the data we share and reuse.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {items.map((item, i) => (
            <Card
              key={i}
              className="group hover:shadow-glow hover:-translate-y-1 transition-all duration-300 border-border/50 bg-card"
            >
              <CardContent className="p-8">
                <div className="mb-6 bg-gradient-to-br from-accent/20 to-primary/20 w-14 h-14 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <item.icon className="h-7 w-7 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-card-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DataChallenge;
