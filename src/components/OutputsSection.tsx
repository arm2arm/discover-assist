import { Card, CardContent } from "@/components/ui/card";
import { FileText, Code, BookOpen } from "lucide-react";

const columns = [
  {
    icon: FileText,
    title: "Publications & Preprints",
    items: [
      { label: "Physics-LLM research publications", note: "To be published" },
      { label: "Technical reports and preprints", note: "To be published" },
    ],
    link: "View all publications →",
  },
  {
    icon: Code,
    title: "Code & Tools",
    items: [
      { label: "Open-source physics AI models", note: "In development" },
      { label: "Research assistant tools", note: "In development" },
      { label: "Data management interfaces", note: "In development" },
    ],
    link: "Browse repositories →",
  },
  {
    icon: BookOpen,
    title: "Documentation & Guides",
    items: [
      { label: "Model and tool documentation", note: "To be published" },
      { label: "Research data guidance", note: "To be published" },
      { label: "Code generation guidance", note: "To be published" },
      { label: "Open-source adaptation guides", note: "To be published" },
    ],
    link: "Read the docs →",
  },
];

const OutputsSection = () => {
  return (
    <section id="outputs" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">
            Resources & Deliverables
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Open-source tools, publications, and documentation
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {columns.map((col, i) => (
            <Card
              key={i}
              className="group hover:shadow-card hover:-translate-y-1 transition-all duration-300 border-border/50 bg-card"
            >
              <CardContent className="p-8">
                <div className="mb-6 bg-accent/10 w-14 h-14 rounded-xl flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <col.icon className="h-7 w-7 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-card-foreground">{col.title}</h3>
                <ul className="space-y-3 mb-6">
                  {col.items.map((item, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground">
                      <span className="text-foreground/80">{item.label}</span>
                      <br />
                      <span className="text-xs italic text-muted-foreground/60">{item.note}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm font-medium text-accent">{col.link}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OutputsSection;
