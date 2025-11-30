import { Radio, Search, Brain, AlertTriangle, ArrowRight } from "lucide-react";

const Implementation = () => {
  const steps = [
    {
      icon: Radio,
      title: "Real-Time Packet Capture",
      description: "Continuous monitoring of all network traffic using advanced packet sniffing technology",
      tech: ["Scapy", "PyShark"],
    },
    {
      icon: Search,
      title: "Deep Packet Inspection",
      description: "Analyze packet contents, headers, and payloads for suspicious patterns",
      tech: ["Protocol Analysis", "Pattern Matching"],
    },
    {
      icon: Brain,
      title: "AI Anomaly Detection",
      description: "Machine learning models classify threats and predict attack vectors",
      tech: ["TensorFlow", "PyTorch", "scikit-learn"],
    },
    {
      icon: AlertTriangle,
      title: "Risk Scoring & Alerting",
      description: "Generate bank-specific risk scores and trigger immediate alerts",
      tech: ["FastAPI", "WebSockets", "React"],
    },
  ];

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            How We <span className="text-gradient">Implement</span> the Solution
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A four-stage pipeline powered by cutting-edge AI
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Arrow connector */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 -right-3 z-20">
                    <ArrowRight className="w-6 h-6 text-neon-cyan/50" />
                  </div>
                )}
                
                <div className="border-gradient rounded-2xl p-6 h-full hover:glow-cyan transition-all duration-300 group">
                  {/* Step number */}
                  <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-gradient-to-br from-neon-cyan to-neon-pink flex items-center justify-center font-display text-sm font-bold text-primary-foreground">
                    {index + 1}
                  </div>

                  <div className="w-14 h-14 rounded-xl bg-neon-cyan/10 flex items-center justify-center mb-4 group-hover:bg-neon-cyan/20 transition-all duration-300">
                    <step.icon className="w-7 h-7 text-neon-cyan" />
                  </div>

                  <h3 className="font-display text-lg font-bold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {step.description}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2">
                    {step.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="text-xs px-2 py-1 rounded-full bg-muted text-neon-cyan"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI emphasis */}
        <div className="mt-16 max-w-3xl mx-auto text-center">
          <div className="glass rounded-2xl p-8">
            <Brain className="w-12 h-12 text-neon-cyan mx-auto mb-4" />
            <h3 className="font-display text-xl font-bold mb-4">
              AI at the Core
            </h3>
            <p className="text-muted-foreground">
              Our solution leverages state-of-the-art machine learning models trained on banking-specific 
              threat patterns. The AI continuously learns and adapts to new attack vectors, ensuring 
              protection against emerging threats.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Implementation;
