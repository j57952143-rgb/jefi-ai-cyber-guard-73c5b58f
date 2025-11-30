import { Github, Mail } from "lucide-react";
import logo from "@/assets/jefi-logo.png";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/50 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Name */}
          <div className="flex items-center gap-3">
            <img src={logo} alt="JeFi AI" className="w-10 h-10" />
            <span className="font-display text-xl font-bold text-gradient">JeFi AI</span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-neon-cyan transition-colors duration-300"
            >
              <Github className="w-5 h-5" />
              <span className="text-sm">GitHub</span>
            </a>
            <a 
              href="mailto:contact@jefi.ai"
              className="flex items-center gap-2 text-muted-foreground hover:text-neon-cyan transition-colors duration-300"
            >
              <Mail className="w-5 h-5" />
              <span className="text-sm">Contact</span>
            </a>
          </div>

          {/* Hackathon Badge */}
          <div className="glass px-4 py-2 rounded-full">
            <span className="text-sm text-muted-foreground">
              Built for <span className="text-neon-pink font-display">Hackathon 2024</span>
            </span>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 JeFi AI. Protecting banks with AI-driven intelligence.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
