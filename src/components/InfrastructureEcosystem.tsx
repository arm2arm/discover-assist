import { Card, CardContent } from "@/components/ui/card";
import bmbfLogo from "@/assets/bmbf-logo.png";
import aipLogo from "@/assets/aip-logo.jpg";
import erumLogo from "@/assets/erum-data-hub-logo.png";

const infoCols = [
  {
    title: "ErUM Communities",
    text: "8 physics research areas united in digital transformation across ~20,000 scientists in German fundamental physics.",
  },
  {
    title: "PUNCH4NFDI",
    text: "9,000+ PhD physicists, 30+ institutions, DFG-funded consortium for particles, universe, nuclei, and hadrons.",
  },
  {
    title: "Infrastructure",
    text: "Federated compute and storage across DESY, KIT, FZJ, LMU, GSI, and partner institutions.",
  },
];

const InfrastructureEcosystem = () => {
  return (
    <section id="resources" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">
            Research Infrastructure Ecosystem
          </h2>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-lg text-muted-foreground leading-relaxed text-center">
            PhysicsLLM is funded through the ErUM-Data Plan of Action, a BMFTR initiative
            advancing digital transformation across ~20,000 scientists in German fundamental
            physics research. Our agentic workflows integrate with the PUNCH4NFDI Science Data
            Platform, leveraging federated compute and storage infrastructures spanning DESY,
            KIT, FZJ, LMU, GSI, and partner institutions.
          </p>
        </div>

        {/* Logo strip */}
        <div className="flex flex-wrap items-center justify-center gap-8 mb-16">
          <a href="https://erumdatahub.de" target="_blank" rel="noopener noreferrer" className="bg-white rounded-lg p-3 hover:shadow-card transition-shadow">
            <img src={erumLogo} alt="ErUM-Data-Hub" className="h-12 w-auto object-contain" />
          </a>
          <a href="https://www.punch4nfdi.de" target="_blank" rel="noopener noreferrer" className="bg-muted rounded-lg px-5 py-3 text-foreground font-semibold text-sm hover:shadow-card transition-shadow border border-border/50">
            PUNCH4NFDI
          </a>
          <a href="https://www.bmftr.bund.de" target="_blank" rel="noopener noreferrer" className="bg-white rounded-lg p-3 hover:shadow-card transition-shadow">
            <img src={bmbfLogo} alt="BMFTR" className="h-12 w-auto object-contain" />
          </a>
          <a href="https://www.aip.de" target="_blank" rel="noopener noreferrer" className="bg-white rounded-lg p-3 hover:shadow-card transition-shadow">
            <img src={aipLogo} alt="AIP" className="h-12 w-auto object-contain" />
          </a>
        </div>

        {/* Info columns */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {infoCols.map((col, i) => (
            <Card key={i} className="border-border/50 bg-card">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-bold text-card-foreground mb-2">{col.title}</h3>
                <p className="text-sm text-muted-foreground">{col.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfrastructureEcosystem;
