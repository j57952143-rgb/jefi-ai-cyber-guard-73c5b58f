import { useEffect, useState, useRef } from "react";
import { DollarSign, Clock, TrendingUp, ShieldCheck } from "lucide-react";

const useCountUp = (end: number, duration: number = 2000, startOnView: boolean = true) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!startOnView) {
      setHasStarted(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [hasStarted, startOnView]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [hasStarted, end, duration]);

  return { count, ref };
};

const Impact = () => {
  const stats = [
    { icon: DollarSign, value: 2.7, suffix: "B+", label: "Potential Savings", prefix: "$" },
    { icon: Clock, value: 80, suffix: "%", label: "Faster Detection", prefix: "" },
    { icon: TrendingUp, value: 60, suffix: "%", label: "Reduced Response Costs", prefix: "" },
    { icon: ShieldCheck, value: 99, suffix: "%", label: "Threat Accuracy", prefix: "" },
  ];

  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-cyan/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Impact</span> & Financial Advantages
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Measurable results that protect your bottom line
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const { count, ref } = useCountUp(stat.value, 2000);
            
            return (
              <div 
                key={index}
                ref={ref}
                className="border-gradient rounded-2xl p-8 text-center group hover:glow-cyan transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-neon-cyan/20 to-neon-pink/20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-neon-cyan" />
                </div>
                <div className="font-display text-4xl md:text-5xl font-bold text-neon-cyan mb-2 glow-text-cyan">
                  {stat.prefix}{count}{stat.suffix}
                </div>
                <p className="text-muted-foreground font-display text-sm tracking-wider">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>

        {/* Key benefit callout */}
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="glass rounded-2xl p-8 text-center">
            <p className="text-xl md:text-2xl text-foreground">
              <span className="text-neon-cyan font-bold">Stop attacks</span> before money leaves the system.
              <span className="text-neon-pink font-bold"> Protect millions</span> with proactive AI defense.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
