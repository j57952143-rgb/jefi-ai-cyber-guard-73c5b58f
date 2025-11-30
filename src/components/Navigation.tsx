import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/jefi-logo.png";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Problem", href: "#problem" },
    { label: "Solution", href: "#solution" },
    { label: "Demo", href: "#demo" },
    { label: "Technology", href: "#technology" },
    { label: "Team", href: "#team" },
    { label: "Roadmap", href: "#roadmap" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass py-3" : "py-6"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <img src={logo} alt="JeFi AI" className="w-10 h-10" />
            <span className="font-display text-xl font-bold text-gradient">JeFi AI</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className="text-muted-foreground hover:text-neon-cyan transition-colors duration-300 font-display text-sm tracking-wider"
              >
                {link.label}
              </button>
            ))}
            <Button 
              variant="neon" 
              size="sm"
              onClick={() => scrollToSection("#demo")}
            >
              See Demo
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 glass rounded-xl p-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.href)}
                  className="text-left text-muted-foreground hover:text-neon-cyan transition-colors duration-300 font-display text-sm tracking-wider py-2"
                >
                  {link.label}
                </button>
              ))}
              <Button 
                variant="neon" 
                size="sm"
                onClick={() => scrollToSection("#demo")}
                className="mt-2"
              >
                See Demo
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
