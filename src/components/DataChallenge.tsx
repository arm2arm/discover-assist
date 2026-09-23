import { Card, CardContent } from "@/components/ui/card";
import { Scale, Boxes, Bot } from "lucide-react";

const items = [
  {
    icon: Scale,
    title: "Data Collection vs. Data Provision",
    description:
      "The amount of data recorded and analyzed in physics experiments has grown rapidly over the last decade, and will grow further with the next generation of facilities. The provision of FAIR data is lagging behind — closing this imbalance is what enables the transition from Big Data to Smart Data.",
  },
  {
    icon: Boxes,
    title: "An LLM-Enhanced RDM Toolkit",
    description:
      "Physics-LLM develops a toolkit for research data management covering the collection, reduction and analysis of data, as well as its storing, sharing and finding — fostering swift data publication alongside robust metadata and machine-readable standards.",
  },
  {
    icon: Bot,
    title: "Large Language Models and Agentic AI",
    description:
      "Leveraging LLMs and agentic AI increases the effectiveness of research workflows and the efficiency of data usage. Including non-classical sources such as software repositories and laboratory notebooks lets the toolkit extract knowledge that would be hard to obtain otherwise.",
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
            Physics-LLM tackles pressing challenges in research data management with a dedicated
            LLM-enhanced RDM toolkit for the seamless publication, curation and findability of
            scientific data.
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
