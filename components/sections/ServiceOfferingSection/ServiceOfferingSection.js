import { Card, CardContent } from "@/components/ui/card";
// Service card data
const services = [
    {
        number: "01.",
        imageSrc: "/frame-7-2.svg",
        imageAlt: "Frame",
        title: "AI Strategy & Agent Development",
    },
    {
        number: "02.",
        imageSrc: "/frame-7-1.svg",
        imageAlt: "Frame",
        title: "Mobile Application Development",
    },
    {
        number: "03.",
        imageSrc: "/frame-7-3.svg",
        imageAlt: "Frame",
        title: "SaaS Consultation & Development",
    },
    {
        number: "04.",
        imageSrc: "/frame-7.svg",
        imageAlt: "Frame",
        title: "Web Apps Development",
    },
];
// Polygon decorators count
const polygons = [1, 2, 3];
export const ServiceOfferingSection = () => {
    return (<section className="flex flex-col w-full items-center gap-10 px-[150px] py-[60px] bg-[#0c0c0c]">
      {/* Header */}
      <div className="flex flex-col items-start justify-center gap-3 self-stretch w-full">
        {/* "Our Services" badge */}
        <div className="inline-flex items-center justify-center gap-2 px-4 py-2.5 relative rounded-[6000px] overflow-hidden border-[none] bg-[linear-gradient(180deg,rgba(72,72,72,0.2)_0%,rgba(255,0,0,0.2)_100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[6000px] before:[background:linear-gradient(6deg,rgba(255,140,140,0)_0%,rgba(153,84,84,0.2)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
          <img className="w-3 h-3" alt="Vector" src="/vector.svg"/>
          <span className="font-eye-borrow font-[number:var(--eye-borrow-font-weight)] text-[#ffffff] text-[length:var(--eye-borrow-font-size)] tracking-[var(--eye-borrow-letter-spacing)] leading-[var(--eye-borrow-line-height)] [font-style:var(--eye-borrow-font-style)]">
            Our Services
          </span>
        </div>

        {/* Heading row */}
        <div className="flex items-center justify-between self-stretch w-full">
          <h2 className="w-[892px] mt-[-1.00px] font-h2 font-[number:var(--h2-font-weight)] text-[#ffffff] text-[length:var(--h2-font-size)] tracking-[var(--h2-letter-spacing)] leading-[var(--h2-line-height)] [font-style:var(--h2-font-style)]">
            Scalable software, AI, and digital solutions designed for growth.
          </h2>
          <img className="flex-[0_0_auto]" alt="Arrow" src="/arrow.svg"/>
        </div>
      </div>

      {/* Cards + pagination */}
      <div className="flex flex-col items-center gap-6 self-stretch w-full">
        {/* Service cards row */}
        <div className="flex items-center gap-5 px-0 py-5 self-stretch w-full">
          {services.map((service) => (<Card key={service.number} className="flex flex-col h-[416px] items-start justify-between p-8 flex-1 bg-neutral-950 rounded-xl overflow-hidden border border-solid border-[#383838]">
              <CardContent className="flex flex-col h-full w-full justify-between p-0">
                {/* Number */}
                <div className="self-stretch mt-[-1.00px] font-h2 font-[number:var(--h2-font-weight)] text-[#b8b8b8] text-[length:var(--h2-font-size)] tracking-[var(--h2-letter-spacing)] leading-[var(--h2-line-height)] [font-style:var(--h2-font-style)]">
                  {service.number}
                </div>

                {/* Bottom content: icon + title */}
                <div className="flex flex-col items-center gap-8 self-stretch w-full">
                  <div className="flex flex-col items-start gap-[66px] self-stretch w-full">
                    <div className="items-start gap-3 flex flex-col self-stretch w-full">
                      <img className="self-stretch w-full" alt={service.imageAlt} src={service.imageSrc}/>
                      <div className="flex flex-col items-start gap-1.5 self-stretch w-full">
                        <h6 className="self-stretch mt-[-1.00px] font-h6 font-[number:var(--h6-font-weight)] text-[#ffffff] text-[length:var(--h6-font-size)] tracking-[var(--h6-letter-spacing)] leading-[var(--h6-line-height)] [font-style:var(--h6-font-style)]">
                          {service.title}
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>))}
        </div>

        {/* Polygon decorators */}
        <div className="flex flex-col items-center justify-center gap-2.5 px-[150px] py-0 self-stretch w-full">
          <div className="inline-flex items-center gap-[5px]">
            {polygons.map((_, index) => (<img key={index} className="w-[16.34px] h-[16.34px]" alt="Polygon" src="/polygon-4.svg"/>))}
          </div>
        </div>
      </div>
    </section>);
};
