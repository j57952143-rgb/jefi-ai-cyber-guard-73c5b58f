import { Play } from "lucide-react";

const Demo = () => {
  return (
    <section id="demo" className="py-24 relative">
      <div className="absolute inset-0 cyber-grid opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            See <span className="text-neon-cyan">JeFi AI</span> in Action
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Watch how our AI detects and prevents network threats in real-time
          </p>
        </div>

        {/* Video Container */}
        <div className="max-w-5xl mx-auto">
          <div className="border-gradient rounded-3xl p-2 glow-cyan animate-glow-pulse">
            <div className="bg-cyber-midnight rounded-2xl overflow-hidden relative aspect-video">
              <video 
                controls
                className="w-full h-full object-cover"
                poster="/videos/demo-poster.jpg"
              >
                <source src="/videos/demo.mov" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Overlay decorations */}
              <div className="absolute top-4 left-4 flex items-center gap-2 glass px-3 py-1 rounded-full pointer-events-none">
                <div className="w-2 h-2 bg-neon-cyan rounded-full animate-pulse" />
                <span className="text-xs font-display text-neon-cyan">LIVE DEMO</span>
              </div>
            </div>
          </div>
          
          {/* Video caption */}
          <p className="text-center text-muted-foreground mt-6 max-w-2xl mx-auto">
            The demo shows real-time packet capture, AI anomaly detection, and instant alert generation when suspicious activity is detected.
          </p>
        </div>

        {/* Feature highlights below video */}
        <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-12 h-12 rounded-full bg-neon-cyan/10 flex items-center justify-center mx-auto mb-4">
              <span className="font-display text-lg text-neon-cyan">01</span>
            </div>
            <h3 className="font-display text-sm text-foreground mb-2">PACKET CAPTURE</h3>
            <p className="text-muted-foreground text-sm">Real-time network traffic monitoring</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 rounded-full bg-neon-purple/10 flex items-center justify-center mx-auto mb-4">
              <span className="font-display text-lg text-neon-purple">02</span>
            </div>
            <h3 className="font-display text-sm text-foreground mb-2">AI ANALYSIS</h3>
            <p className="text-muted-foreground text-sm">Anomaly detection & classification</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 rounded-full bg-neon-pink/10 flex items-center justify-center mx-auto mb-4">
              <span className="font-display text-lg text-neon-pink">03</span>
            </div>
            <h3 className="font-display text-sm text-foreground mb-2">ALERT & PROTECT</h3>
            <p className="text-muted-foreground text-sm">Instant threat prevention</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;
