import bmbfLogo from "@/assets/bmbf-logo.png";
import aipLogo from "@/assets/aip-logo.jpg";
import erumLogo from "@/assets/erum-data-hub-logo.png";

const navLinks = [
  { label: "Main Site", href: "https://physics-llm.erumdatahub.de/" },
  { label: "GitHub", href: "#" },
  { label: "FAIR Data Principles", href: "https://www.go-fair.org/fair-principles/" },
];

const Footer = () => {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Left */}
            <div>
              <h3 className="text-xl font-bold mb-4">PhysicsLLM Agentic Workflows</h3>
              <p className="text-primary-foreground/80 text-sm leading-relaxed">
                2025–2027 · Funded by BMFTR via ErUM-Data-Hub
              </p>
              <p className="text-primary-foreground/80 text-sm mt-2">
                PI: <strong className="text-primary-foreground">Dr. A. Khalatyan</strong> (AIP)
              </p>
            </div>

            {/* Center – links */}
            <div>
              <h3 className="text-xl font-bold mb-4">Links</h3>
              <ul className="space-y-2 text-sm">
                {navLinks.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
                <li>
                  <button
                    onClick={() => scrollTo("#contact")}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            {/* Right */}
            <div>
              <h3 className="text-xl font-bold mb-4">Ecosystem</h3>
              <a
                href="https://www.punch4nfdi.de"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-primary-foreground/10 border border-primary-foreground/20 rounded-lg px-4 py-2 text-sm font-semibold hover:bg-primary-foreground/20 transition-colors"
              >
                Part of PUNCH4NFDI →
              </a>
            </div>
          </div>

          {/* Funding logos */}
          <div className="border-t border-primary-foreground/20 pt-8 mb-8">
            <p className="text-center text-primary-foreground/60 text-sm mb-6">Funded by</p>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
              <a href="https://erumdatahub.de/en/" target="_blank" rel="noopener noreferrer" className="bg-white/90 rounded-lg p-2 hover:bg-white transition-colors">
                <img src={erumLogo} alt="ErUM-Data-Hub" className="h-12 w-auto object-contain" />
              </a>
              <a href="https://www.bmftr.bund.de" target="_blank" rel="noopener noreferrer" className="bg-white/90 rounded-lg p-2 hover:bg-white transition-colors">
                <img src={bmbfLogo} alt="BMFTR" className="h-12 w-auto object-contain" />
              </a>
              <a href="https://www.aip.de" target="_blank" rel="noopener noreferrer" className="bg-white/90 rounded-lg p-2 hover:bg-white transition-colors">
                <img src={aipLogo} alt="AIP" className="h-12 w-auto object-contain" />
              </a>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 pt-8">
            <p className="text-center text-primary-foreground/60 text-sm">
              © 2025 PhysicsLLM Project · Advancing autonomous scientific discovery through agentic AI systems.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
