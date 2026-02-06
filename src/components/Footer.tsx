import bmbfLogo from "@/assets/bmbf-logo.png";
import aipLogo from "@/assets/aip-logo.jpg";
import erumLogo from "@/assets/erum-data-hub-logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Physics-LLM Project</h3>
              <p className="text-primary-foreground/80 text-sm leading-relaxed">
                Agentic Intelligence for Physics. Science Made Reproducible. Research Made Efficient.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Work Package</h3>
              <p className="text-primary-foreground/80 text-sm">
                Agentic Assistants
              </p>
              <p className="text-primary-foreground/80 text-sm mt-2">
                Principal Investigator:<br />
                <strong className="text-primary-foreground">Dr. A. Khalatyan</strong>
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Key Principles</h3>
              <ul className="space-y-2 text-primary-foreground/80 text-sm">
                <li>• FAIR Data Principles</li>
                <li>• Reproducible Science</li>
                <li>• Energy Efficiency</li>
                <li>• Open Collaboration</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 pt-8 mb-8">
            <p className="text-center text-primary-foreground/60 text-sm mb-6">Funded by</p>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
              <a href="https://erumdatahub.de/en/" target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 transition-opacity">
                <img src={erumLogo} alt="ErUM-Data-Hub" className="h-14 w-auto object-contain" />
              </a>
              <a href="https://www.bmbf.de" target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 transition-opacity">
                <img src={bmbfLogo} alt="BMFTR - Bundesministerium für Forschung, Technologie und Raumfahrt" className="h-14 w-auto object-contain" />
              </a>
              <a href="https://www.aip.de" target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 transition-opacity">
                <img src={aipLogo} alt="AIP - Leibniz-Institut für Astrophysik Potsdam" className="h-14 w-auto object-contain" />
              </a>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 pt-8">
            <p className="text-center text-primary-foreground/60 text-sm">
              © 2025 Physics-LLM Project. Advancing autonomous scientific discovery through agentic AI systems.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
