import { ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const team = [
  { name: "Dr. Arman Khalatyan", initials: "AK", role: "WP Lead · Agentic Systems Architecture", institution: "Leibniz Institute for Astrophysics Potsdam (AIP)", orcid: "https://orcid.org/0000-0002-8913-0690", isPi: true },
  { name: "Dr. Tom Tong", initials: "TT", role: "Implementation · AI model development", institution: "Leibniz Institute for Astrophysics Potsdam (AIP)", orcid: "https://orcid.org/0000-0000-0000-0001", isPi: false },
];

const TeamSection = () => (
  <section id="team" className="py-20 md:py-28 bg-muted">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">People behind the work</p>
      <h2 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-12">Agentic Workflows team</h2>
      <div className="grid sm:grid-cols-2 gap-6 max-w-4xl">
        {team.map((member) => <Card key={member.name} className="border-border bg-card"><CardContent className="p-7 flex gap-5">
          <Avatar className="h-16 w-16 border-2 border-accent/40"><AvatarFallback className="bg-accent/15 text-accent font-heading font-bold">{member.initials}</AvatarFallback></Avatar>
          <div>{member.isPi && <span className="text-xs font-bold text-accent uppercase tracking-widest">Principal Investigator</span>}<h3 className="font-heading text-xl font-semibold text-card-foreground mt-1">{member.name}</h3><p className="text-sm text-muted-foreground mt-2">{member.role}</p><p className="text-xs text-muted-foreground mt-2">{member.institution}</p><a href={member.orcid} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs font-bold text-accent mt-4 hover:underline">ORCID <ExternalLink className="h-3 w-3" /></a></div>
        </CardContent></Card>)}
      </div>
    </div>
  </section>
);

export default TeamSection;
