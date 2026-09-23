import { ArrowRight, CheckCircle2, Code2, Database, Workflow } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "./SectionHeading";

const results = [
  { icon: Workflow, label: "Workflow architecture", title: "Agent orchestration patterns", text: "Reusable patterns for assistants that coordinate tools while preserving human oversight." },
  { icon: Database, label: "Research data", title: "Context-aware discovery", text: "Methods that connect data with metadata, provenance, software, and domain knowledge." },
  { icon: Code2, label: "Infrastructure", title: "Efficient model serving", text: "Multi-GPU strategies and hosting guidance for dependable institutional LLM services." }
];

const ResultsSection = () => (
  <section id="results" className="py-20 md:py-28 bg-muted">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading eyebrow="Progress made visible" title="Results and developments" description="Milestones, methods, and open outputs from the Agentic Workflows work package." />
      <div className="grid md:grid-cols-3 gap-px bg-border border border-border">
        {results.map((result) => (
          <article key={result.title} className="bg-card p-7 md:p-8">
            <result.icon aria-hidden="true" className="h-7 w-7 text-accent mb-8" />
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{result.label}</p>
            <h3 className="font-heading text-xl font-semibold text-card-foreground mt-2">{result.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground mt-3">{result.text}</p>
            <div className="mt-6 flex items-center gap-2 text-xs font-bold text-accent"><CheckCircle2 className="h-4 w-4" /> In development</div>
          </article>
        ))}
      </div>
      <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-5">
        <Button size="lg" onClick={() => document.querySelector("#outputs")?.scrollIntoView({ behavior: "smooth" })}>
          Explore our tools <ArrowRight className="h-4 w-4" />
        </Button>
        <p className="text-sm text-muted-foreground">Code, publications, and documentation will be linked as they are released.</p>
      </div>
    </div>
  </section>
);

export default ResultsSection;
