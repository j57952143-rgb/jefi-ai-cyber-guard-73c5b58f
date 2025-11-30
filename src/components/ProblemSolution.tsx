import { AlertTriangle, ShieldCheck, TrendingDown, Clock, Eye, Bell } from "lucide-react";

const ProblemSolution = () => {
  const problems = [
    { icon: TrendingDown, stat: "$2.7B", text: "Lost annually by banks due to network intrusions" },
    { icon: AlertTriangle, stat: "91%", text: "Of fraud starts with unnoticed network anomalies" },
    { icon: Clock, stat: "195 days", text: "Average time to detect a breach" },
  ];

  const solutions = [
    { icon: Eye, title: "Real-Time Inspection", text: "Deep packet sniffing and analysis" },
    { icon: ShieldCheck, title: "AI Anomaly Detection", text: "Instant threat classification" },
    { icon: Bell, title: "Immediate Alerts", text: "Prevent financial loss before it happens" },
  ];

  return (
    <section id="problem" className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">The Problem</span> Banks Face
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Traditional security measures leave banks vulnerable to sophisticated cyber attacks
          </p>
        </div>

        {/* Problem Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="glass rounded-2xl p-8 text-center hover:border-neon-pink/50 transition-all duration-300 group opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="w-16 h-16 rounded-full bg-neon-pink/10 flex items-center justify-center mx-auto mb-6 group-hover:glow-pink transition-all duration-300">
                <problem.icon className="w-8 h-8 text-neon-pink" />
              </div>
              <div className="font-display text-4xl font-bold text-neon-pink mb-2 glow-text-pink">
                {problem.stat}
              </div>
              <p className="text-muted-foreground">{problem.text}</p>
            </div>
          ))}
        </div>

        {/* Solution Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">JeFi AI</span> Solution
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            AI-powered protection that detects and prevents threats in real-time
          </p>
        </div>

        {/* Solution Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {solutions.map((solution, index) => (
            <div 
              key={index}
              className="border-gradient rounded-2xl p-8 text-center hover:glow-cyan transition-all duration-300 group opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${0.6 + index * 0.2}s` }}
            >
              <div className="w-16 h-16 rounded-full bg-neon-cyan/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-neon-cyan/20 transition-all duration-300">
                <solution.icon className="w-8 h-8 text-neon-cyan" />
              </div>
              <h3 className="font-display text-xl font-bold text-neon-cyan mb-2">
                {solution.title}
              </h3>
              <p className="text-muted-foreground">{solution.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
