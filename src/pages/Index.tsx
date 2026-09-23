import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TLDRPanel from "@/components/TLDRPanel";
import ProjectContext from "@/components/ProjectContext";
import Mission from "@/components/Mission";
import DataChallenge from "@/components/DataChallenge";
import Consortium from "@/components/Consortium";
import AgenticCapabilities from "@/components/AgenticCapabilities";
import UseCases from "@/components/UseCases";
import TeamSection from "@/components/TeamSection";
import OutputsSection from "@/components/OutputsSection";
import InfrastructureEcosystem from "@/components/InfrastructureEcosystem";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import NewsFeed from "@/components/NewsFeed";
import ResultsSection from "@/components/ResultsSection";
import ActivityChannels from "@/components/ActivityChannels";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <TLDRPanel />
      <ProjectContext />
      <Mission />
      <DataChallenge />
      <AgenticCapabilities />
      <UseCases />
      <ResultsSection />
      <NewsFeed />
      <ActivityChannels />
      <TeamSection />
      <Consortium />
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
