import Footer from "~/components/footer";
import { ContactSection } from "~/components/home/contact";
import { ContentSection } from "~/components/home/content";
import FeatureSection from "~/components/home/features";
import { GetStartedSection } from "~/components/home/getStarted";
import { HeroSection } from "~/components/home/hero";
import { PlansSection } from "~/components/home/plans";
import { TestimonialsSection } from "~/components/home/testimonials";
import Timeline from "~/components/home/timeline";
import Navigation from "~/components/navigation";

const LandingPage = () => {
  return (
    <div className="bg-background">
      <Navigation/>
      <HeroSection/>
      <FeatureSection />
      <ContentSection/>
      <PlansSection/>
      <Timeline/>
      <TestimonialsSection/>
      <ContactSection/>
      <GetStartedSection/>
      <Footer />
    </div>
  );
};

export default LandingPage;
