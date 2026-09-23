import { useState } from "react";
import { ArrowRight, Calendar, FileText, Image, Mic2, Presentation } from "lucide-react";
import { activityGroups } from "@/content/editorial";
import SectionHeading from "./SectionHeading";
import { Button } from "@/components/ui/button";

const icons = [Image, Calendar, FileText, Presentation, Mic2];

const ActivityChannels = () => {
  const [galleryOpen, setGalleryOpen] = useState(false);
  return (
    <section id="activities" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Follow the work" title="Workshops, events, and ideas in public" description="Different ways to explore how the project develops and shares its work." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {activityGroups.map((group, index) => {
            const Icon = icons[index];
            return (
              <article id={group.id} key={group.id} className="border-t-2 border-accent bg-card p-6 min-h-64 flex flex-col">
                <Icon aria-hidden="true" className="h-6 w-6 text-accent" />
                <h3 className="font-heading text-lg font-semibold mt-7 text-card-foreground">{group.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground mt-3 flex-1">{group.description}</p>
                {group.id === "workshops" ? (
                  <Button variant="ghost" className="justify-start px-0 hover:bg-transparent hover:text-accent" onClick={() => setGalleryOpen((open) => !open)} aria-expanded={galleryOpen}>
                    {galleryOpen ? "Close gallery" : "Open gallery"} <ArrowRight className="h-4 w-4" />
                  </Button>
                ) : <p className="text-xs font-bold uppercase tracking-widest text-accent mt-6">Updates coming soon</p>}
              </article>
            );
          })}
        </div>
        {galleryOpen && (
          <div className="mt-6 grid sm:grid-cols-3 gap-4" aria-label="Workshop gallery placeholders">
            {["Hands-on sessions", "Research exchange", "Shared workflows"].map((label, index) => (
              <div key={label} className="aspect-[4/3] bg-muted border border-border p-6 flex flex-col justify-between overflow-hidden relative">
                <div className="absolute inset-0 activity-grid opacity-40" />
                <span className="relative text-xs font-bold uppercase tracking-widest text-accent">Photo {index + 1}</span>
                <p className="relative font-heading text-lg font-semibold text-foreground">{label}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ActivityChannels;
