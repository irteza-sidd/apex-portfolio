import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
// Industry data categories
const categories = [
    "Healthcare",
    "Finance",
    "Real Estate",
    "Ecommerce",
    "Education",
];
const industriesData = [
    {
        title: "Automotive Industry Solution",
        bgImage: "bg-[url(/rectangle-3-2.png)]",
    },
    {
        title: "Logistics Industry Solution",
        bgImage: "bg-[url(/rectangle-3-3.png)]",
    },
    {
        title: "Travel Industry Solution",
        bgImage: "bg-[url(/rectangle-3-4.png)]",
    },
];
export const IndustrySolutionsSection = () => {
    return (<section className="flex flex-col w-full items-center px-0 py-[120px] bg-neutral-950">
      {/* Header Container */}
      <div className="flex flex-col items-center justify-center gap-12 w-full max-w-[1620px]">
        {/* Title and Categories row */}
        <div className="flex items-end justify-between self-stretch w-full">
          {/* Main heading part */}
          <div className="flex flex-col w-[608px] items-start gap-3">
            <div className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-[6000px] overflow-hidden border-none bg-[linear-gradient(180deg,rgba(10,10,10,0.2)_0%,rgba(255,0,0,0.2)_100%)] relative before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[6000px] before:[background:linear-gradient(6deg,rgba(255,140,140,0)_0%,rgba(153,84,84,0.2)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
              <img className="w-3 h-3" alt="Vector" src="/vector.svg"/>
              <span className="font-eye-borrow font-[number:var(--eye-borrow-font-weight)] text-[#ffffff] text-[length:var(--eye-borrow-font-size)] tracking-[var(--eye-borrow-letter-spacing)] leading-[var(--eye-borrow-line-height)] [font-style:var(--eye-borrow-font-style)]">
                Our Industries
              </span>
            </div>
            <div className="flex items-center self-stretch w-full">
              <h2 className="flex-1 mt-[-1.00px] font-h2 font-[number:var(--h2-font-weight)] text-[#ffffff] text-[length:var(--h2-font-size)] tracking-[var(--h2-letter-spacing)] leading-[var(--h2-line-height)] [font-style:var(--h2-font-style)]">
                Digital innovation across every industry.
              </h2>
            </div>
          </div>

          {/* Categories List */}
          <div className="inline-flex items-center gap-6">
            {categories.map((category) => (<div key={category} className="inline-flex items-center justify-center gap-[15px] px-[22px] py-3.5 bg-neutral-900 rounded-[50px]">
                <div className="w-1.5 h-1.5 bg-[#5b5b5b] rounded-[3px]"/>
                <span className="mt-[-1.00px] [font-family:'Inter_Display-Regular',Helvetica] font-normal text-white text-[15px] tracking-[0] leading-normal whitespace-nowrap">
                  {category}
                </span>
              </div>))}
          </div>
        </div>

        {/* Industry Cards Grid */}
        <div className="flex items-center gap-[30px] self-stretch w-full">
          {industriesData.map((industry, index) => (<Card key={index} className={`flex flex-col h-[676px] items-center p-8 flex-1 bg-cover bg-[50%_50%] rounded-2xl overflow-hidden border-none shadow-none ${industry.bgImage} relative group cursor-pointer`}>
              <CardContent className="flex flex-col items-start justify-between w-full h-full p-0">
                {/* Expand icon at top left */}
                <div className="flex w-14 h-14 items-center justify-center gap-2.5 p-2 bg-[#ffffff4c] rounded-[34px] backdrop-blur-[17.5px] backdrop-brightness-100 transition-transform group-hover:scale-110">
                  <img className="w-6 h-6" alt="Expand" src="/expand-2-1.svg"/>
                </div>

                {/* Bottom blurred badge */}
                <div className="flex flex-col items-center justify-center gap-2.5 p-3.5 self-stretch w-full bg-[#34343466] rounded-xl backdrop-blur-[5.6px] backdrop-brightness-100 relative before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-xl before:[background:linear-gradient(217deg,rgba(119,119,119,1)_0%,rgba(147,147,147,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
                  <div className="flex items-center self-stretch w-full">
                    <h5 className="flex-[0_0_auto] mt-[-1.00px] font-h5 font-[number:var(--h5-font-weight)] text-[#ffffff] text-[length:var(--h5-font-size)] tracking-[var(--h5-letter-spacing)] leading-[var(--h5-line-height)] [font-style:var(--h5-font-style)]">
                      {industry.title}
                    </h5>
                  </div>
                </div>
              </CardContent>
            </Card>))}
        </div>

        {/* View all button */}
        <Button variant="outline" className="h-[55.5px] px-[30px] py-[18px] bg-[#0000001a] rounded-[47.83px] border border-solid border-[#444444] text-[#ffffff] [font-family:'Inter_Display-Medium',Helvetica] font-medium text-[15px] hover:bg-[#1a1a1a] hover:text-white transition-colors">
          View all Industries
        </Button>
      </div>
    </section>);
};
