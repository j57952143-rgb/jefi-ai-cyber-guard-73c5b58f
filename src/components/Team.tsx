import { Github, Linkedin, Globe } from "lucide-react";

const Team = () => {
  const members = [
    {
      name: "Mustafo Xalimov",
      role: "Project Manager (Team Leader)",
      links: [{ type: "portfolio", url: "https://my-portfolio-phi-tan-47.vercel.app/" }],
    },
    {
      name: "Samirjon Tursunov",
      role: "Presenter",
      links: [{ type: "github", url: "https://github.com/Samirjon07" }],
    },
    {
      name: "Диёрбек Зокиров",
      role: "Tester",
      links: [{ type: "github", url: "https://github.com/fowlerta" }],
    },
    {
      name: "Mironshoh Akhmadov",
      role: "Technical Specialist",
      links: [
        { type: "github", url: "https://github.com/poyoniy" },
        { type: "linkedin", url: "https://www.linkedin.com/in/mironshoh-akhmadov" },
      ],
    },
    {
      name: "Камилла Абдуллаева",
      role: "Backend Developer / Ideator",
      links: [{ type: "linkedin", url: "https://www.linkedin.com/in/kamilla-abdullayeva-75449b31a/" }],
    },
  ];

  const getLinkIcon = (type: string) => {
    switch (type) {
      case "github":
        return Github;
      case "linkedin":
        return Linkedin;
      default:
        return Globe;
    }
  };

  return (
    <section id="team" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Meet the <span className="text-neon-purple">Team</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The innovators behind JeFi AI
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {members.map((member, index) => (
            <div 
              key={index}
              className="glass rounded-2xl p-6 hover:border-neon-cyan/50 transition-all duration-300 group"
            >
              {/* Avatar placeholder */}
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-neon-cyan via-neon-purple to-neon-pink p-0.5 mx-auto mb-4 group-hover:glow-cyan transition-all duration-300">
                <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                  <span className="font-display text-2xl text-neon-cyan">
                    {member.name.charAt(0)}
                  </span>
                </div>
              </div>

              <h3 className="font-display text-lg font-bold text-foreground text-center mb-1">
                {member.name}
              </h3>
              <p className="text-neon-cyan text-sm text-center mb-4 font-display">
                {member.role}
              </p>

              {/* Social links */}
              <div className="flex justify-center gap-3">
                {member.links.map((link, linkIndex) => {
                  const Icon = getLinkIcon(link.type);
                  return (
                    <a
                      key={linkIndex}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center hover:bg-neon-cyan/20 hover:text-neon-cyan transition-all duration-300"
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
