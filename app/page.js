import { HeroShowcaseSection } from "@/components/sections/HeroShowcaseSection/HeroShowcaseSection";
import { ServiceOfferingSection } from "@/components/sections/ServiceOfferingSection/ServiceOfferingSection";
import { IndustrySolutionsSection } from "@/components/sections/IndustrySolutionsSection/IndustrySolutionsSection";
import { FeaturedCaseStudiesSection } from "@/components/sections/FeaturedCaseStudiesSection/FeaturedCaseStudiesSection";
import { ReasonsToChooseSection } from "@/components/sections/ReasonsToChooseSection/ReasonsToChooseSection";
import { FaqsSection } from "@/components/sections/FaqsSection/FaqsSection";
import { ContactFormSection } from "@/components/sections/ContactFormSection/ContactFormSection";
import { FooterNavigationSection } from "@/components/sections/FooterNavigationSection/FooterNavigationSection";

export default function Home() {
  return (
    <div className="bg-[#0c0c0c] flex flex-col items-center w-full">
      <HeroShowcaseSection />
      <ServiceOfferingSection />
      <IndustrySolutionsSection />
      <FeaturedCaseStudiesSection />
      <ReasonsToChooseSection />
      <FaqsSection />
      <ContactFormSection />
      <FooterNavigationSection />
    </div>
  );
}
