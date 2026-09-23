import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Research", href: "#overview" },
  { label: "Results", href: "#results" },
  { label: "News", href: "#news" },
  { label: "Activities", href: "#activities" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const scrollTo = (href: string) => {
    setMobileOpen(false);
    if (location.pathname !== "/") { navigate(`/${href}`); return; }
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <Link to="/" className="font-heading text-xl font-bold text-foreground hover:text-accent transition-colors">Physics<span className="text-accent">LLM</span></Link>
        <div className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => <button key={item.href} onClick={() => scrollTo(item.href)} className="text-sm text-muted-foreground hover:text-foreground transition-colors">{item.label}</button>)}
          <Button size="sm" onClick={() => scrollTo("#contact")}>How to reach us</Button>
        </div>
        <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">{mobileOpen ? <X /> : <Menu />}</Button>
      </div>
      {mobileOpen && <div className="lg:hidden bg-background border-b border-border px-4 pb-4 space-y-1">{navItems.map((item) => <button key={item.href} onClick={() => scrollTo(item.href)} className="block w-full text-left py-2 text-sm text-muted-foreground hover:text-foreground">{item.label}</button>)}<Button size="sm" className="w-full" onClick={() => scrollTo("#contact")}>How to reach us</Button></div>}
    </nav>
  );
};

export default Navbar;
