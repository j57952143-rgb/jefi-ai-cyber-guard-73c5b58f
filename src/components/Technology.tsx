import { Brain, Network, Lock, FileText, Fingerprint, Activity } from "lucide-react";

const Technology = () => {
  const capabilities = [
    { icon: Activity, title: "Traffic Pattern Detection", text: "Identifies abnormal network behaviors in real-time" },
    { icon: Fingerprint, title: "Fraud Signature Prediction", text: "AI predicts emerging fraud patterns before they strike" },
    { icon: Brain, title: "Threat Classification", text: "MITM, data exfiltration, brute force, scanning attacks" },
    { icon: FileText, title: "Explainable Alerts", text: "Human-readable explanations for every detection" },
    { icon: Lock, title: "Zero-Trust Architecture", text: "AI never accesses sensitive banking data" },
    { icon: Network, title: "Full Audit Logs", text: "Complete transparency and compliance tracking" },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background neural network effect */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="hsl(186, 100%, 50%)" stopOpacity="0.8" />
              <stop offset="100%" stopColor="hsl(186, 100%, 50%)" stopOpacity="0" />
            </radialGradient>
          </defs>
          {/* Animated connection lines */}
          {[...Array(15)].map((_, i) => (
            <line
              key={i}
              x1={Math.random() * 100}
              y1={Math.random() * 100}
              x2={Math.random() * 100}
              y2={Math.random() * 100}
              stroke="url(#nodeGlow)"
              strokeWidth="0.1"
              className="animate-pulse"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
          {/* Nodes */}
          {[...Array(20)].map((_, i) => (
            <circle
              key={i}
              cx={Math.random() * 100}
              cy={Math.random() * 100}
              r="0.5"
              fill="url(#nodeGlow)"
              className="animate-pulse"
              style={{ animationDelay: `${i * 0.15}s` }}
            />
          ))}
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">AI Model</span> & Technology
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Cutting-edge artificial intelligence designed specifically for banking network security
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, index) => (
            <div 
              key={index}
              className="glass rounded-2xl p-6 hover:border-neon-cyan/50 transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 flex items-center justify-center flex-shrink-0 group-hover:glow-cyan transition-all duration-300">
                  <cap.icon className="w-6 h-6 text-neon-cyan" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-2">
                    {cap.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {cap.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tech stack badges */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6 font-display text-sm tracking-wider">POWERED BY</p>
          <div className="flex flex-wrap justify-center gap-4">
            {["Python", "TensorFlow", "Scapy", "PyTorch", "FastAPI", "React"].map((tech) => (
              <div key={tech} className="glass px-4 py-2 rounded-full text-sm text-neon-cyan">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
