import { Lightbulb, Cpu, Rocket, Flag, Check } from "lucide-react";

const Roadmap = () => {
  const stages = [
    { 
      icon: Lightbulb, 
      title: "Idea", 
      status: "completed",
      description: "Concept validation & research"
    },
    { 
      icon: Cpu, 
      title: "Prototype", 
      status: "current",
      description: "AI model development & testing"
    },
    { 
      icon: Rocket, 
      title: "MVP", 
      status: "upcoming",
      description: "Full system integration"
    },
    { 
      icon: Flag, 
      title: "Launch", 
      status: "upcoming",
      description: "Production deployment"
    },
  ];

  const nextSteps = [
    "Complete demo testing with simulated bank traffic",
    "Integrate real-time AI alert notifications",
    "Finalize security compliance audit",
    "Deploy to production environment",
  ];

  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 cyber-grid opacity-10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Project <span className="text-gradient">Roadmap</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our journey from concept to production
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="relative">
            {/* Connection line */}
            <div className="absolute top-12 left-0 right-0 h-1 bg-muted hidden md:block">
              <div 
                className="h-full bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink"
                style={{ width: "37.5%" }}
              />
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {stages.map((stage, index) => (
                <div key={index} className="text-center relative">
                  {/* Node */}
                  <div 
                    className={`w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center relative z-10 transition-all duration-300 ${
                      stage.status === "completed" 
                        ? "bg-neon-cyan/20 border-2 border-neon-cyan glow-cyan" 
                        : stage.status === "current"
                        ? "bg-gradient-to-br from-neon-cyan via-neon-purple to-neon-pink p-0.5 animate-glow-pulse"
                        : "bg-muted border-2 border-border"
                    }`}
                  >
                    {stage.status === "current" ? (
                      <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                        <stage.icon className="w-10 h-10 text-neon-cyan" />
                      </div>
                    ) : (
                      <stage.icon className={`w-10 h-10 ${
                        stage.status === "completed" ? "text-neon-cyan" : "text-muted-foreground"
                      }`} />
                    )}
                  </div>

                  {/* Label */}
                  <h3 className={`font-display text-lg font-bold mb-2 ${
                    stage.status === "current" ? "text-neon-cyan glow-text-cyan" : "text-foreground"
                  }`}>
                    {stage.title}
                    {stage.status === "current" && (
                      <span className="block text-xs text-neon-pink mt-1">CURRENT</span>
                    )}
                  </h3>
                  <p className="text-muted-foreground text-sm">{stage.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="max-w-2xl mx-auto">
          <h3 className="font-display text-xl font-bold text-center mb-8 text-neon-cyan">
            Next Steps
          </h3>
          <div className="space-y-4">
            {nextSteps.map((step, index) => (
              <div 
                key={index}
                className="glass rounded-xl p-4 flex items-center gap-4 hover:border-neon-cyan/50 transition-all duration-300"
              >
                <div className="w-8 h-8 rounded-full bg-neon-cyan/10 flex items-center justify-center flex-shrink-0">
                  <span className="font-display text-sm text-neon-cyan">{index + 1}</span>
                </div>
                <p className="text-foreground/90">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
