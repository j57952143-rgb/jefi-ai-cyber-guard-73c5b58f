import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import Demo from "@/components/Demo";
import Comparison from "@/components/Comparison";
import Technology from "@/components/Technology";
import Impact from "@/components/Impact";
import Team from "@/components/Team";
import Roadmap from "@/components/Roadmap";
import Implementation from "@/components/Implementation";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navigation />
      <Hero />
      <ProblemSolution />
      <Demo />
      <Comparison />
      <section id="technology">
        <Technology />
      </section>
      <Impact />
      <Team />
      <Roadmap />
      <Implementation />
      <Footer />
    </div>
  );
};

export default Index;
