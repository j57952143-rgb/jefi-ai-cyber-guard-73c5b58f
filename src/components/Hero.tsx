import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap } from "lucide-react";
import heroBg from "@/assets/hero-bg.png";
import logo from "@/assets/jefi-logo.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-navy/60 via-transparent to-cyber-navy" />
      
      {/* Cyber grid */}
      <div className="absolute inset-0 cyber-grid opacity-30" />
      
      {/* Animated scan line */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-full h-px bg-gradient-to-r from-transparent via-neon-cyan to-transparent opacity-50"
          style={{
            animation: "scan-line 4s linear infinite",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Logo */}
        <div className="flex justify-center mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <img 
            src={logo} 
            alt="JeFi AI Logo" 
            className="w-32 h-32 md:w-40 md:h-40 animate-float"
          />
        </div>

        {/* Title */}
        <h1 
          className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 opacity-0 animate-fade-in"
          style={{ animationDelay: "0.3s" }}
        >
          <span className="text-neon-cyan">JeFi AI</span>
          <span className="block text-2xl md:text-3xl lg:text-4xl mt-4 text-foreground font-medium">
            Real-Time AI-Powered Network Protection for Banks
          </span>
        </h1>

        {/* Subtitle */}
        <p 
          className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 opacity-0 animate-fade-in"
          style={{ animationDelay: "0.5s" }}
        >
          Stopping fraud before it happens. Protecting banks with AI-driven packet intelligence.
        </p>

        {/* Features badges */}
        <div 
          className="flex flex-wrap justify-center gap-4 mb-10 opacity-0 animate-fade-in"
          style={{ animationDelay: "0.7s" }}
        >
          <div className="glass px-4 py-2 rounded-full flex items-center gap-2">
            <Shield className="w-4 h-4 text-neon-cyan" />
            <span className="text-sm">Banking-Grade Security</span>
          </div>
          <div className="glass px-4 py-2 rounded-full flex items-center gap-2">
            <Zap className="w-4 h-4 text-neon-pink" />
            <span className="text-sm">Real-Time Detection</span>
          </div>
        </div>

        {/* CTA Button */}
        <div 
          className="opacity-0 animate-fade-in"
          style={{ animationDelay: "0.9s" }}
        >
          <Button 
            variant="hero" 
            size="xl"
            onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
          >
            See Demo
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>

        {/* Scroll indicator */}
        <div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in"
          style={{ animationDelay: "1.2s" }}
        >
          <div className="w-6 h-10 border-2 border-neon-cyan/50 rounded-full flex justify-center p-2">
            <div className="w-1 h-2 bg-neon-cyan rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
