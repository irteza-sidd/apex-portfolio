import { ClientTestimonialsSection } from "./sections/ClientTestimonialsSection";
import { CompanyIntroSection } from "./sections/CompanyIntroSection/CompanyIntroSection";
import { ContactCallToActionSection } from "./sections/ContactCallToActionSection";
import { ContactFormSection } from "./sections/ContactFormSection/ContactFormSection";
import { FaqsSection } from "./sections/FaqsSection/FaqsSection";
import { FeaturedCaseStudiesSection } from "./sections/FeaturedCaseStudiesSection";
import { FooterNavigationSection } from "./sections/FooterNavigationSection/FooterNavigationSection";
import { HeroShowcaseSection } from "./sections/HeroShowcaseSection";
import { IndustrySolutionsSection } from "./sections/IndustrySolutionsSection/IndustrySolutionsSection";
import { InteractiveStarfieldSection } from "./sections/InteractiveStarfieldSection";
import { ReasonsToChooseSection } from "./sections/ReasonsToChooseSection/ReasonsToChooseSection";
import { ServiceOfferingSection } from "./sections/ServiceOfferingSection/ServiceOfferingSection";

export const FinalWebsite = (): JSX.Element => {
  return (
    <main className="flex flex-col items-start relative bg-neutral-950 border border-solid border-transparent [border-image:linear-gradient(180deg,rgba(16,16,16,0.6)_0%,rgba(28,28,28,0)_100%)_1] w-full overflow-x-hidden">
      {/* All page sections stacked vertically */}
      <div className="flex flex-col items-start relative self-stretch w-full">
        {/* Hero section with overlay CTA button */}
        <div className="relative w-full">
          <HeroShowcaseSection />

          {/* Gradient overlay at bottom of hero */}
          <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1920px] h-[178px] bg-[linear-gradient(180deg,rgba(6,6,6,0)_0%,rgba(10,10,10,1)_100%)]" />

          {/* Floating CTA pill positioned near bottom of hero */}
          <div className="absolute bottom-5 left-0 right-0 flex justify-center pointer-events-none">
            <div className="pointer-events-auto inline-flex items-center bg-[#3838384c] rounded-3xl overflow-hidden backdrop-blur-md backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(12px)_brightness(100%)]">
              {/* Left icon group */}
              <div className="inline-flex flex-col items-start justify-around gap-[50px] p-3.5 self-stretch">
                <div className="inline-flex items-center gap-3.5">
                  {/* Hamburger/menu icon box */}
                  <div className="inline-flex flex-col items-start gap-[50px]">
                    <div className="flex w-20 h-20 items-center justify-center gap-2.5 bg-neutral-950 rounded-[10px]">
                      <div className="relative w-10 h-10 rotate-180">
                        <div className="relative w-[66.77%] h-[50.24%] top-[24.88%] left-[16.62%]">
                          <div className="absolute w-[62.56%] h-[16.82%] top-0 left-[37.43%] bg-white rounded-[1.69px] rotate-180" />
                          <div className="absolute w-[62.56%] h-[16.82%] top-[83.18%] left-0 bg-white rounded-[1.69px] rotate-180" />
                          <div className="absolute w-full h-[16.82%] top-[41.59%] left-0 bg-white rounded-[1.69px] rotate-180" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Component SVG icon box */}
                  <div className="inline-flex flex-col items-start gap-[50px]">
                    <img
                      className="w-20 h-20"
                      alt="Component"
                      src="/component-6.svg"
                    />
                  </div>
                </div>
              </div>

              {/* Right CTA button */}
              <div className="inline-flex flex-col items-center gap-6 p-3.5">
                <div className="inline-flex flex-col items-start gap-2.5">
                  <div className="flex h-20 items-center justify-center gap-[34px] px-[38px] py-[23px] bg-white rounded-[10px]">
                    <div className="inline-flex items-center gap-3.5">
                      <span className="[font-family:'Inter_Display-Regular',Helvetica] font-normal text-black text-[26px] tracking-[0] leading-7 whitespace-nowrap">
                        Let&apos;s make a project
                      </span>
                      <img
                        className="w-[16.14px] h-[16.14px]"
                        alt="Vector"
                        src="/vector-113.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <CompanyIntroSection />
        <InteractiveStarfieldSection />
        <ServiceOfferingSection />
        <FeaturedCaseStudiesSection />
        <IndustrySolutionsSection />
        <ClientTestimonialsSection />
        <ReasonsToChooseSection />
        <ContactFormSection />
        <FaqsSection />
        <ContactCallToActionSection />
        <FooterNavigationSection />
      </div>
    </main>
  );
};
