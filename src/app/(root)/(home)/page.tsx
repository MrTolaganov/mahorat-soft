import HeroSection from "@/components/sections/hero.section";
import AboutSection from "@/components/sections/about.section";
import WhyWebsitesSection from "@/components/sections/why-websites.section";
import AttractiveBlocksSection from "@/components/sections/attractive-blocks.section";
import WorkProcessSection from "@/components/sections/work-process.section";
import PortfolioSection from "@/components/sections/portfolio.section";
import PartnersSection from "@/components/sections/partners.section";
import ServicesSection from "@/components/sections/services.section";
import StartProjectSection from "@/components/sections/start-project.section";
import ContactSection from "@/components/sections/contact.section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <WhyWebsitesSection />
      <AttractiveBlocksSection />
      <WorkProcessSection />
      <PortfolioSection />
      <PartnersSection />
      <ServicesSection />
      <StartProjectSection />
      <ContactSection />
    </>
  );
}
