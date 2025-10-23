import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Objectives from "@/components/Objectives";
import AgenticCapabilities from "@/components/AgenticCapabilities";
import DomainKnowledge from "@/components/DomainKnowledge";
import KeyFeatures from "@/components/KeyFeatures";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Mission />
      <Objectives />
      <AgenticCapabilities />
      <DomainKnowledge />
      <KeyFeatures />
      <CallToAction />
      <Footer />
    </main>
  );
};

export default Index;
