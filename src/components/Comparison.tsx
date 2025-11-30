import { X, Check } from "lucide-react";

const Comparison = () => {
  const features = [
    { feature: "Real-time packet inspection", traditional: false, jefi: true },
    { feature: "AI-powered anomaly detection", traditional: false, jefi: true },
    { feature: "Financial risk scoring", traditional: false, jefi: true },
    { feature: "Banking-specific threat models", traditional: false, jefi: true },
    { feature: "Predictive fraud signatures", traditional: false, jefi: true },
    { feature: "Automated threat response", traditional: false, jefi: true },
    { feature: "Manual inspection only", traditional: true, jefi: false },
    { feature: "Generic security rules", traditional: true, jefi: false },
  ];

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Why <span className="text-neon-pink">Traditional Tools</span> Fail
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            See how JeFi AI compares to legacy security solutions
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="border-gradient rounded-2xl overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-3 bg-card/50">
              <div className="p-6 font-display text-sm text-muted-foreground">FEATURE</div>
              <div className="p-6 text-center font-display text-sm text-neon-pink border-l border-border/50">
                TRADITIONAL
              </div>
              <div className="p-6 text-center font-display text-sm text-neon-cyan border-l border-border/50">
                JEFI AI
              </div>
            </div>
            
            {/* Rows */}
            {features.map((row, index) => (
              <div 
                key={index}
                className="grid grid-cols-3 border-t border-border/50 hover:bg-card/30 transition-colors duration-200"
              >
                <div className="p-4 text-sm text-foreground/80">{row.feature}</div>
                <div className="p-4 flex justify-center items-center border-l border-border/50">
                  {row.traditional ? (
                    <div className="w-8 h-8 rounded-full bg-neon-pink/10 flex items-center justify-center">
                      <Check className="w-4 h-4 text-neon-pink" />
                    </div>
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-muted/50 flex items-center justify-center">
                      <X className="w-4 h-4 text-muted-foreground/50" />
                    </div>
                  )}
                </div>
                <div className="p-4 flex justify-center items-center border-l border-border/50">
                  {row.jefi ? (
                    <div className="w-8 h-8 rounded-full bg-neon-cyan/10 flex items-center justify-center glow-cyan">
                      <Check className="w-4 h-4 text-neon-cyan" />
                    </div>
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-muted/50 flex items-center justify-center">
                      <X className="w-4 h-4 text-muted-foreground/50" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
