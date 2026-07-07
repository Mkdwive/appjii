import HeroSection from "./components/hero-section/HeroSection";
import CustomerCommunication from "./components/CustomerCommunication";
import FasterResponse from "./components/FasterResponse";
import OnePlaceConversation from "./components/OnePlaceConversation";
import MultiBusiness from "./components/MultiBusiness";
import ModernCustomerTeams from "./components/ModernCustomerTeams";
import ModernBusiness from "./components/ModernBusiness";
import AIFeature from "./components/AIFeature";
import SmarterCustomerCommunication from "./components/SmarterCustomerCommunication";
import HowItWork from "./components/HowItWork";
import UseCases from "./components/UseCases";
import MostPowerfullApp from "./components/MostPowerfullApp";
import StopSwitchingBetweenApps from "./components/StopSwitchingBetweenApps";

export default function Home() {
  return (
    <>
      <section id="inbox-section">
        <HeroSection />
        <CustomerCommunication />
        <FasterResponse />
        <OnePlaceConversation />
        <MultiBusiness />
      </section>
      <section className="pt-154 pb-154 collab-and-design-sec common-union-fade-both">
        <ModernCustomerTeams />
      </section>
      <section className="choose-section pt-154 common-union-fade-both">
        <ModernBusiness />
      </section>
      <section className="bottom-cta-section " id="ai-feature-section">
        <AIFeature />
      </section>
      <section className="pb-134">
        <SmarterCustomerCommunication />
      </section>
      <section id="how-it-work-section">
        <HowItWork />
      </section>
      <section id="use-cases-section">
        <UseCases />
      </section>
      <section className="ecosystem-section pb-0 most-powerful-app-sec common-union-fade-both">
        <MostPowerfullApp />
      </section>
      <section className="bottom-cta-section">
        <StopSwitchingBetweenApps />
      </section>

    </>
  );
}
