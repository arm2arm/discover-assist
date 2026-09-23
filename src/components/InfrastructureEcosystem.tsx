import { Button } from "@/components/ui/button";
import bmbfLogo from "@/assets/bmbf-logo.png";
import aipLogo from "@/assets/aip-logo.jpg";
import erumLogo from "@/assets/erum-data-hub-logo.png";
import SectionHeading from "./SectionHeading";

const partners = [
  { name: "ErUM-Data-Hub", href: "https://erumdatahub.de", logo: erumLogo },
  { name: "BMFTR", href: "https://www.bmftr.bund.de", logo: bmbfLogo },
  { name: "Leibniz Institute for Astrophysics Potsdam", href: "https://www.aip.de", logo: aipLogo },
];

const InfrastructureEcosystem = () => (
  <section id="partners" className="py-20 md:py-28 bg-background">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading eyebrow="Project network" title="Funders and institutional partners" description="Each organization is represented individually so visitors can identify and visit it directly." />
      <div className="grid sm:grid-cols-3 gap-4 max-w-5xl">
        {partners.map((partner) => <Button key={partner.name} asChild variant="outline" className="h-28 bg-card hover:bg-muted p-5"><a href={partner.href} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${partner.name}`}><img src={partner.logo} alt={partner.name} className="max-h-16 max-w-full w-auto object-contain" /></a></Button>)}
      </div>
      <p className="text-sm leading-relaxed text-muted-foreground mt-8 max-w-3xl">PhysicsLLM is funded through the ErUM-Data initiative and works within a research ecosystem supported by PUNCH4NFDI and partner institutions.</p>
    </div>
  </section>
);

export default InfrastructureEcosystem;
