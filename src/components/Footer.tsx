import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground border-t border-primary-foreground/10 py-10">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-6 md:items-center md:justify-between">
      <div><p className="font-heading font-semibold">PhysicsLLM · Agentic Workflows</p><p className="text-sm text-primary-foreground/60 mt-1">2025–2027 · PI Dr. Arman Khalatyan (AIP)</p></div>
      <nav className="flex flex-wrap gap-5 text-sm text-primary-foreground/70"><Link to="/news" className="hover:text-accent">News</Link><a href="https://physics-llm.erumdatahub.de/" target="_blank" rel="noopener noreferrer" className="hover:text-accent">Main project site</a><a href="https://www.go-fair.org/fair-principles/" target="_blank" rel="noopener noreferrer" className="hover:text-accent">FAIR principles</a></nav>
      <p className="text-xs text-primary-foreground/50">© 2026 PhysicsLLM Project</p>
    </div>
  </footer>
);

export default Footer;
