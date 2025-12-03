import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { ServicesOverview } from "@/components/ServicesOverview";
import { HowItWorks } from "@/components/HowItWorks";
import { CaseStudies } from "@/components/CaseStudies";
import { DeepDiveServices } from "@/components/DeepDiveServices";
import { Team } from "@/components/Team";
import { Testimonials } from "@/components/Testimonials";
import { ContactCTA } from "@/components/ContactCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <ServicesOverview />
        <HowItWorks />
        <CaseStudies />
        <DeepDiveServices />
        <Team />
        <Testimonials />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}
