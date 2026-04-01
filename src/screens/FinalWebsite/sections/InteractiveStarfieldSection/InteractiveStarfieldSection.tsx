// Stats data for the bottom metrics row
const stats = [
  { value: "45+", label: "Clients Globally" },
  { value: "10+", label: "Countries Covered" },
  { value: "$100K+", label: "in Revenue Generated" },
  { value: "400+", label: "Successful Projects" },
  { value: "120+", label: "Certified Experts In Team" },
];

export const InteractiveStarfieldSection = (): JSX.Element => {
  return (
    <section className="relative w-full min-h-[1000px] bg-neutral-950 overflow-hidden">
      {/* Background gradient blobs */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-639px] left-[-438px] w-[1728px] h-[518px] rounded-[864px/259.2px] rotate-[-134.36deg] blur-[75px] bg-[linear-gradient(270deg,rgba(6,6,6,0)_0%,rgba(207,12,32,0.05)_100%)]" />
        <div className="absolute top-[-571px] left-[497px] w-[1728px] h-[518px] rounded-[864px/259.2px] rotate-[-64.62deg] blur-[75px] bg-[linear-gradient(284deg,rgba(6,6,6,0.02)_0%,rgba(207,12,32,0.02)_100%)]" />
        <div className="absolute top-[-123px] left-[1339px] w-[1728px] h-[518px] bg-[#cf0c200d] rounded-[864px/259.2px] rotate-[-45.97deg] blur-[75px]" />
        <div className="absolute top-[850px] left-[-1109px] w-[1728px] h-[518px] bg-[#cf0c200d] rounded-[864px/259.2px] rotate-[110.92deg] blur-[75px]" />
      </div>

      {/* Stars background image */}
      <img
        className="absolute top-px left-0 w-full h-full object-cover pointer-events-none"
        alt="Stars"
        src="/stars.svg"
      />

      {/* Main content container */}
      <div className="relative z-10 flex flex-col items-start gap-[100px] w-full max-w-[1620px] mx-auto px-8 py-[115px]">
        {/* Top section: image + text */}
        <div className="flex items-center gap-[200px] w-full">
          {/* Left: decorative image */}
          <div className="relative w-[472px] h-[476px] flex-shrink-0">
            <div className="w-[608px] h-[476px] bg-[url(/a4f1adb0f16d0a1e9619a02769838a12-1.png)] bg-cover bg-[50%_50%]" />
          </div>

          {/* Right: text content */}
          <div className="flex flex-col items-start justify-center gap-[60px] flex-1">
            <div className="flex flex-col items-start gap-3 w-full">
              {/* "About us" badge */}
              <div className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-[6000px] overflow-hidden border-none bg-[linear-gradient(180deg,rgba(72,72,72,0.2)_0%,rgba(255,0,0,0.2)_100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[6000px] before:[background:linear-gradient(6deg,rgba(255,140,140,0)_0%,rgba(153,84,84,0.2)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none relative flex-shrink-0">
                <img className="w-3 h-3" alt="Vector" src="/vector.svg" />
                <span className="font-eye-borrow font-[number:var(--eye-borrow-font-weight)] text-white text-[length:var(--eye-borrow-font-size)] tracking-[var(--eye-borrow-letter-spacing)] leading-[var(--eye-borrow-line-height)] [font-style:var(--eye-borrow-font-style)]">
                  About us
                </span>
              </div>

              {/* Description text */}
              <p className="w-full [font-family:'Inter_Display-Regular',Helvetica] font-normal text-transparent text-[40px] leading-10">
                <span className="text-white tracking-[-0.32px]">
                  Blank Empty ApexWeb Solutions is a global software, AI, and
                  digital innovation company building{" "}
                </span>
                <span className="text-[#a8a8a8] tracking-[-0.32px]">
                  intelligent products
                </span>
                <span className="text-white tracking-[-0.32px]">
                  {" "}
                  — from high-performance apps to AI agents and scalable SaaS
                  platforms — designed to turn{" "}
                </span>
                <span className="text-[#a8a8a8] tracking-[-0.32px]">
                  complex ideas
                </span>
                <span className="text-white tracking-[-0.32px]">
                  {" "}
                  into real-world impact.
                </span>
              </p>
            </div>

            {/* "View Our Work" button */}
            <div className="relative w-[244px] h-[74px] bg-[#0000001a] rounded-[63.78px] overflow-hidden flex-shrink-0">
              <div className="inline-flex flex-col h-[26px] items-center gap-2.5 absolute top-6 left-7 overflow-hidden">
                <span className="w-fit [font-family:'Inter_Display-Medium',Helvetica] font-medium text-white text-xl tracking-[-0.20px] leading-[26px] whitespace-nowrap">
                  View Our Work
                </span>
                <span className="w-fit [font-family:'Inter_Display-Medium',Helvetica] font-medium text-neutral-900 text-xl tracking-[-0.20px] leading-[26px] whitespace-nowrap">
                  View Our Work
                </span>
              </div>

              <div className="absolute top-[calc(50.00%_-_1px)] left-[calc(50.00%_+_58px)] w-0.5 h-0.5 rounded-[0.86px] bg-[linear-gradient(180deg,rgba(210,48,48,1)_0%,rgba(98,0,0,1)_100%)]" />

              <img
                className="absolute top-3 left-[183px] w-[50px] h-[50px]"
                alt="Frame"
                src="/frame-1321325373.svg"
              />
            </div>
          </div>
        </div>

        {/* Horizontal divider */}
        <img className="w-full h-px" alt="Vector" src="/vector-29-1.svg" />

        {/* Stats row */}
        <div className="flex items-center justify-end gap-[70px] w-full">
          {stats.map((stat, index) => (
            <div key={stat.value} className="flex items-center gap-[70px]">
              <div className="flex flex-col w-[210px] items-center justify-end gap-2">
                <div className="self-stretch font-h2 font-[number:var(--h2-font-weight)] text-white text-[length:var(--h2-font-size)] tracking-[var(--h2-letter-spacing)] leading-[var(--h2-line-height)] [font-style:var(--h2-font-style)]">
                  {stat.value}
                </div>
                <div
                  className={`self-stretch font-paragraph-medium font-[number:var(--paragraph-medium-font-weight)] text-[#909090] text-[length:var(--paragraph-medium-font-size)] tracking-[var(--paragraph-medium-letter-spacing)] leading-[var(--paragraph-medium-line-height)] [font-style:var(--paragraph-medium-font-style)]${index === stats.length - 1 ? " whitespace-nowrap" : ""}`}
                >
                  {stat.label}
                </div>
              </div>
              {/* Vertical divider between stats, not after the last one */}
              {index < stats.length - 1 && (
                <img
                  className="w-px h-[73px]"
                  alt="Vector"
                  src="/vector-29.svg"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
