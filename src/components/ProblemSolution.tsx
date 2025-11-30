import { AlertTriangle, ShieldCheck, TrendingDown, Clock, Eye, Bell } from "lucide-react";
import cyberSecurityImg from "@/assets/cyber-security.jpg";
import networkMonitoringImg from "@/assets/network-monitoring.jpg";
import aiTechnologyImg from "@/assets/ai-technology.jpg";

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
            The <span className="text-neon-pink">Problem</span> Banks Face
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Traditional security leaves banks vulnerable to sophisticated attacks
          </p>
        </div>

        {/* Problem section with image */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20 items-center">
          <div className="grid gap-6">
            {problems.map((problem, index) => (
              <div 
                key={index}
                className="glass rounded-xl p-6 flex items-center gap-6 hover:border-neon-pink/30 transition-all duration-300 group opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="w-14 h-14 rounded-full bg-neon-pink/10 flex items-center justify-center flex-shrink-0 group-hover:bg-neon-pink/20 transition-all duration-300">
                  <problem.icon className="w-7 h-7 text-neon-pink" />
                </div>
                <div>
                  <div className="font-display text-2xl font-bold text-foreground mb-1">
                    {problem.stat}
                  </div>
                  <p className="text-muted-foreground text-sm">{problem.text}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Cyber threat image */}
          <div className="relative opacity-0 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="border-gradient rounded-2xl p-1">
              <img 
                src={cyberSecurityImg} 
                alt="Cyber security threat visualization" 
                className="w-full h-64 lg:h-80 object-cover rounded-xl"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 glass px-4 py-2 rounded-full text-xs font-display text-neon-pink">
              Banks are under constant attack
            </div>
          </div>
        </div>

        {/* Solution Header */}
        <div id="solution" className="text-center mb-16 scroll-mt-24">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            The <span className="text-neon-cyan">JeFi AI</span> Solution
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            AI-powered protection that detects and prevents threats in real-time
          </p>
        </div>

        {/* Solution section with images */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Solution images */}
          <div className="grid grid-cols-2 gap-4 opacity-0 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <div className="border-gradient rounded-xl p-1">
              <img 
                src={networkMonitoringImg} 
                alt="Network monitoring system" 
                className="w-full h-40 object-cover rounded-lg"
              />
            </div>
            <div className="border-gradient rounded-xl p-1 mt-8">
              <img 
                src={aiTechnologyImg} 
                alt="AI technology" 
                className="w-full h-40 object-cover rounded-lg"
              />
            </div>
          </div>
          
          <div className="grid gap-6">
            {solutions.map((solution, index) => (
              <div 
                key={index}
                className="glass rounded-xl p-6 flex items-center gap-6 hover:border-neon-cyan/30 transition-all duration-300 group opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${0.6 + index * 0.15}s` }}
              >
                <div className="w-14 h-14 rounded-full bg-neon-cyan/10 flex items-center justify-center flex-shrink-0 group-hover:bg-neon-cyan/20 transition-all duration-300">
                  <solution.icon className="w-7 h-7 text-neon-cyan" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-1">
                    {solution.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{solution.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
