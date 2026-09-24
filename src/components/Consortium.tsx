import { Card, CardContent } from "@/components/ui/card";

type Person = { name: string; institution: string; email: string };

const coordination: Person[] = [
  { name: "Dr. Tim Ruhe", institution: "Technische Universität Dortmund", email: "tim.ruhe@tu-dortmund.de" },
];

const partners: Person[] = [
  { name: "Dr. Kilian Schwarz", institution: "Deutsches Elektronen-Synchrotron (DESY)", email: "kilian.schwarz@desy.de" },
  { name: "Prof. Dr. Philipp Neumann", institution: "Deutsches Elektronen-Synchrotron (DESY)", email: "philipp.neumann@desy.de" },
  { name: "Sven Karstensen", institution: "Deutsches Elektronen-Synchrotron (DESY)", email: "sven.karstensen@desy.de" },
  { name: "Prof. Dr. Stefan Sandfeld", institution: "Forschungszentrum Jülich", email: "s.sandfeld@fz-juelich.de" },
  { name: "Prof. Dr. Hans-Georg Steinrück", institution: "Forschungszentrum Jülich & RWTH Aachen", email: "h.steinrueck@fz-juelich.de" },
  { name: "Dr. Kay Graf", institution: "Friedrich-Alexander-Universität Erlangen-Nürnberg", email: "kay.graf@fau.de" },
  { name: "Dr. Jutta Schnabel", institution: "Friedrich-Alexander-Universität Erlangen-Nürnberg", email: "jutta.schnabel@fau.de" },
  { name: "Prof. Dr. Michael Schulz", institution: "Technical University of Munich", email: "Michael.Schulz@frm2.tum.de" },
  { name: "Dr. Sebastian Busch", institution: "Helmholtz-Zentrum Hereon", email: "sebastian.busch@hereon.de" },
  { name: "Dr. Arman Khalatyan", institution: "Leibniz-Institut für Astrophysik Potsdam", email: "akhalatyan@aip.de" },
  { name: "Dr. Harry Enke", institution: "Leibniz-Institut für Astrophysik Potsdam", email: "henke@aip.de" },
  { name: "Prof. Dr. Lucie Flek", institution: "Universität Bonn", email: "flek@bit.uni-bonn.de" },
  { name: "Prof. Dr. Dr. Wolfgang Rhode", institution: "Technische Universität Dortmund", email: "wolfgang.rhode@tu-dortmund.de" },
];

const associated: Person[] = [
  { name: "Dr. Pierre Schnizer", institution: "Helmholtz-Zentrum Berlin", email: "pierre.schnizer@helmholtz-berlin.de" },
  { name: "Dr. Theo Steininger", institution: "Erium GmbH", email: "theo.steininger@erium.ai" },
];

const PersonCard = ({ p }: { p: Person }) => (
  <Card className="border-border/50 bg-card hover:shadow-glow hover:-translate-y-1 transition-all duration-300">
    <CardContent className="p-5">
      <h4 className="font-semibold text-card-foreground">{p.name}</h4>
      <p className="text-sm text-muted-foreground mt-1">{p.institution}</p>
      <a
        href={`mailto:${p.email}`}
        className="text-sm text-accent hover:underline break-all mt-2 inline-block"
      >
        {p.email}
      </a>
    </CardContent>
  </Card>
);

const Group = ({ title, people }: { title: string; people: Person[] }) => (
  <div className="mb-12 last:mb-0">
    <h3 className="text-lg font-bold uppercase tracking-wide text-accent mb-5">{title}</h3>
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {people.map((p) => (
        <PersonCard key={p.email} p={p} />
      ))}
    </div>
  </div>
);

const Consortium = () => {
  return (
    <section id="consortium" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">
            The Physics-LLM Consortium
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Coordinated by Technische Universität Dortmund, the project includes partners from
            DESY, Forschungszentrum Jülich, FAU Erlangen-Nürnberg, Technical University of Munich,
            Helmholtz-Zentrum Hereon, Leibniz Institute for Astrophysics Potsdam, the University
            of Bonn, and industry partner Erium GmbH.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Group title="Project Coordination" people={coordination} />
          <Group title="Principal Investigators" people={partners} />
          <Group title="Associated Partners" people={associated} />
        </div>
      </div>
    </section>
  );
};

export default Consortium;
