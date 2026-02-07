import { Card, CardContent } from "@/components/ui/card";
import { User, ExternalLink } from "lucide-react";

const team = [
  {
    name: "Dr. Arman Khalatyan",
    role: "WP Lead · Agentic Systems Architecture",
    institution: "Leibniz Institute for Astrophysics Potsdam (AIP)",
    orcid: "https://orcid.org/0000-0002-8913-0690",
    isPi: true,
  },
  {
    name: "Tom Thong",
    role: "Implementation · Multi-GPU Optimization · CrewAI Development",
    institution: "Leibniz Institute for Astrophysics Potsdam (AIP)",
    orcid: "https://orcid.org/0000-0000-0000-0001",
    isPi: false,
  },
];

const TeamSection = () => {
  return (
    <section id="team" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">
            Work Package Leadership
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The team driving agentic AI for physics research at AIP
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {team.map((member, i) => (
            <Card
              key={i}
              className="group hover:shadow-card hover:-translate-y-1 transition-all duration-300 border-border/50 bg-card"
            >
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-accent/10 p-3 rounded-full">
                    <User className="h-8 w-8 text-accent" />
                  </div>
                  <div>
                    {member.isPi && (
                      <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                        Principal Investigator
                      </span>
                    )}
                    <h3 className="text-xl font-bold text-card-foreground">{member.name}</h3>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-2">{member.institution}</p>
                <p className="text-sm font-medium text-foreground/80 mb-4">{member.role}</p>
                <a
                  href={member.orcid}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-accent hover:underline"
                >
                  ORCID <ExternalLink className="h-3 w-3" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          Full team roster and contributors →
        </p>
      </div>
    </section>
  );
};

export default TeamSection;
