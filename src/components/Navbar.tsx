import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Why EnggiSure", href: "#why-enggisure" },
  { label: "What We Cover", href: "#products" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Claims Support", href: "#claims" },
  { label: "FAQs", href: "#faq" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      <div className="container-content flex items-center justify-between h-16 md:h-18 px-6 md:px-8">
        <a href="#" className="font-heading text-xl md:text-2xl font-bold text-primary tracking-tight">
          EnggiSure
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <Button size="sm" className="ml-2 bg-primary text-primary-foreground hover:bg-enggisure-navy-light">
            Get a Quote
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-card border-t border-border px-6 pb-6 pt-4 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block text-sm font-medium text-muted-foreground hover:text-primary"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Button className="w-full bg-primary text-primary-foreground hover:bg-enggisure-navy-light">
            Get a Quote
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
