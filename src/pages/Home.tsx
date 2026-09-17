import { Hero } from '../components/Hero';
import { TrustSection } from '../components/TrustSection';
import { ServicesSection } from '../components/ServicesSection';
import { TourPackages } from '../components/TourPackages';
import { DestinationExperience } from '../components/DestinationExperience';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { FleetSection } from '../components/FleetSection';
import { Testimonials } from '../components/Testimonials';
import { EditorialStory } from '../components/EditorialStory';
import { FAQ } from '../components/FAQ';
import { ContactSection } from '../components/ContactSection';
import { CTASection } from '../components/CTASection';

export function Home() {
  return (
    <>
      <Hero />
      <TrustSection />
      
      
      
      <WhyChooseUs />
      <FleetSection />
      <Testimonials />
      <EditorialStory />
      <FAQ />
      <ContactSection />
      <CTASection />
    </>
  );
}
