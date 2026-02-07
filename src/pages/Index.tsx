import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TLDRPanel from "@/components/TLDRPanel";
import ProjectContext from "@/components/ProjectContext";
import Mission from "@/components/Mission";
import AgenticCapabilities from "@/components/AgenticCapabilities";
import UseCases from "@/components/UseCases";
import Objectives from "@/components/Objectives";
import KeyFeatures from "@/components/KeyFeatures";
import DomainKnowledge from "@/components/DomainKnowledge";
import TeamSection from "@/components/TeamSection";
import OutputsSection from "@/components/OutputsSection";
import InfrastructureEcosystem from "@/components/InfrastructureEcosystem";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <TLDRPanel />
      <ProjectContext />
      <Mission />
      <AgenticCapabilities />
      <UseCases />
      <Objectives />
      <KeyFeatures />
      <DomainKnowledge />
      <TeamSection />
      <OutputsSection />
      <InfrastructureEcosystem />
      <div id="contact">
        <CallToAction />
      </div>
      <Footer />
    </main>
  );
};

export default Index;
