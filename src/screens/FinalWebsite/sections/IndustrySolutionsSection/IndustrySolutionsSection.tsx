import { Card, CardContent } from "../../../../components/ui/card";

// Industry card data organized in rows of 4
const industryRows = [
  [
    {
      icon: "/industrycard-3.svg",
      title: "E-commerce",
      description:
        "Scalable online stores that drive sales, conversions, and customer loyalty.",
      descClass:
        "font-paragraph-xsmall font-[number:var(--paragraph-xsmall-font-weight)] text-[length:var(--paragraph-xsmall-font-size)] tracking-[var(--paragraph-xsmall-letter-spacing)] leading-[var(--paragraph-xsmall-line-height)] [font-style:var(--paragraph-xsmall-font-style)]",
    },
    {
      icon: "/industrycard-2.svg",
      title: "Healthcare & Wellness",
      description:
        "Secure digital solutions improving patient care, engagement.",
      descClass:
        "font-paragraph-xsmall font-[number:var(--paragraph-xsmall-font-weight)] text-[length:var(--paragraph-xsmall-font-size)] tracking-[var(--paragraph-xsmall-letter-spacing)] leading-[var(--paragraph-xsmall-line-height)] [font-style:var(--paragraph-xsmall-font-style)]",
    },
    {
      icon: "/industrycard-10.svg",
      title: "Finance & Banking",
      description:
        "Reliable, compliant systems for secure financial operations and growth.",
      descClass:
        "font-paragraph-xsmall font-[number:var(--paragraph-xsmall-font-weight)] text-[length:var(--paragraph-xsmall-font-size)] tracking-[var(--paragraph-xsmall-letter-spacing)] leading-[var(--paragraph-xsmall-line-height)] [font-style:var(--paragraph-xsmall-font-style)]",
    },
    {
      icon: "/industrycard.svg",
      title: "Real Estate & Construction",
      description:
        "Digital tools to streamline property management and project execution.",
      descClass:
        "font-paragraph-xsmall font-[number:var(--paragraph-xsmall-font-weight)] text-[length:var(--paragraph-xsmall-font-size)] tracking-[var(--paragraph-xsmall-letter-spacing)] leading-[var(--paragraph-xsmall-line-height)] [font-style:var(--paragraph-xsmall-font-style)]",
    },
  ],
  [
    {
      icon: "/industrycard-6.svg",
      title: "Hospitality & Travel",
      description:
        "Seamless booking and guest experiences that elevate customer satisfaction.",
      descClass:
        "font-paragraph-xsmall font-[number:var(--paragraph-xsmall-font-weight)] text-[length:var(--paragraph-xsmall-font-size)] tracking-[var(--paragraph-xsmall-letter-spacing)] leading-[var(--paragraph-xsmall-line-height)] [font-style:var(--paragraph-xsmall-font-style)]",
    },
    {
      icon: "/industrycard-9.svg",
      title: "Legal & Professional",
      description:
        "Efficient platforms for case management, documentation, and client trust.",
      descClass:
        "font-paragraph-xsmall font-[number:var(--paragraph-xsmall-font-weight)] text-[length:var(--paragraph-xsmall-font-size)] tracking-[var(--paragraph-xsmall-letter-spacing)] leading-[var(--paragraph-xsmall-line-height)] [font-style:var(--paragraph-xsmall-font-style)]",
    },
    {
      icon: "/industrycard-1.svg",
      title: "Media & Marketing",
      description: "Engaging digital experiences that amplify reach and brand",
      descClass:
        "font-paragraph-xsmall font-[number:var(--paragraph-xsmall-font-weight)] text-[length:var(--paragraph-xsmall-font-size)] tracking-[var(--paragraph-xsmall-letter-spacing)] leading-[var(--paragraph-xsmall-line-height)] [font-style:var(--paragraph-xsmall-font-style)]",
    },
    {
      icon: "/industrycard-5.svg",
      title: "Manufacturing & B2B",
      description:
        "Optimized systems for supply chains, operations, and productivity.",
      descClass:
        "font-paragraph-small font-[number:var(--paragraph-small-font-weight)] text-[length:var(--paragraph-small-font-size)] tracking-[var(--paragraph-small-letter-spacing)] leading-[var(--paragraph-small-line-height)] [font-style:var(--paragraph-small-font-style)]",
    },
  ],
  [
    {
      icon: "/industrycard-11.svg",
      title: "Technology & Startups",
      description:
        "Agile solutions to build, scale, and innovate faster operations, and productivity.",
      descClass:
        "font-paragraph-xsmall font-[number:var(--paragraph-xsmall-font-weight)] text-[length:var(--paragraph-xsmall-font-size)] tracking-[var(--paragraph-xsmall-letter-spacing)] leading-[var(--paragraph-xsmall-line-height)] [font-style:var(--paragraph-xsmall-font-style)]",
    },
    {
      icon: "/industrycard-4.svg",
      title: "Nonprofits & Socials",
      description:
        "Purpose-driven technology that maximizes outreach and impact.",
      descClass:
        "font-paragraph-xsmall font-[number:var(--paragraph-xsmall-font-weight)] text-[length:var(--paragraph-xsmall-font-size)] tracking-[var(--paragraph-xsmall-letter-spacing)] leading-[var(--paragraph-xsmall-line-height)] [font-style:var(--paragraph-xsmall-font-style)]",
    },
    {
      icon: "/industrycard-7.svg",
      title: "Agriculture & Energy",
      description:
        "Smart solutions for sustainable growth and operational efficiency.",
      descClass:
        "font-paragraph-xsmall font-[number:var(--paragraph-xsmall-font-weight)] text-[length:var(--paragraph-xsmall-font-size)] tracking-[var(--paragraph-xsmall-letter-spacing)] leading-[var(--paragraph-xsmall-line-height)] [font-style:var(--paragraph-xsmall-font-style)]",
    },
    {
      icon: "/industrycard-8.svg",
      title: "Local Services",
      description:
        "Digital platforms that connect businesses with nearby customers effortlessly.",
      descClass:
        "font-paragraph-xsmall font-[number:var(--paragraph-xsmall-font-weight)] text-[length:var(--paragraph-xsmall-font-size)] tracking-[var(--paragraph-xsmall-letter-spacing)] leading-[var(--paragraph-xsmall-line-height)] [font-style:var(--paragraph-xsmall-font-style)]",
    },
  ],
];

export const IndustrySolutionsSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center justify-center gap-[60px] px-40 py-[100px] bg-[#0c0c0c]">
      {/* Header */}
      <div className="items-center gap-3 flex flex-col self-stretch w-full">
        {/* Badge */}
        <div className="inline-flex items-center justify-center gap-2 px-4 py-2.5 relative rounded-[6000px] overflow-hidden border-[none] bg-[linear-gradient(180deg,rgba(72,72,72,0.2)_0%,rgba(255,0,0,0.2)_100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[6000px] before:[background:linear-gradient(6deg,rgba(255,140,140,0)_0%,rgba(153,84,84,0.2)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
          <img className="w-3 h-3" alt="Vector" src="/vector.svg" />
          <span className="w-fit mt-[-1.00px] font-eye-borrow font-[number:var(--eye-borrow-font-weight)] text-[#ffffff] text-[length:var(--eye-borrow-font-size)] tracking-[var(--eye-borrow-letter-spacing)] leading-[var(--eye-borrow-line-height)] [font-style:var(--eye-borrow-font-style)]">
            Industries We Serve
          </span>
        </div>

        {/* Title */}
        <div className="flex items-center justify-center gap-2.5 px-[150px] py-0 self-stretch w-full">
          <h2 className="flex-1 mt-[-1.00px] font-h2 font-[number:var(--h2-font-weight)] text-[#ffffff] text-[length:var(--h2-font-size)] text-center tracking-[var(--h2-letter-spacing)] leading-[var(--h2-line-height)] [font-style:var(--h2-font-style)]">
            Trusted Across Multiple Domains
          </h2>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="flex flex-col items-start gap-4 self-stretch w-full">
        {industryRows.map((row, rowIndex) => (
          <div
            key={`row-${rowIndex}`}
            className="flex flex-col items-start self-stretch w-full"
          >
            <div className="flex items-start gap-4 self-stretch w-full">
              {row.map((card, cardIndex) => (
                <Card
                  key={`card-${rowIndex}-${cardIndex}`}
                  className="flex flex-col h-[199px] items-start gap-8 px-6 py-8 flex-1 grow bg-transparent border-0 rounded-none"
                >
                  <CardContent className="flex flex-col items-start gap-8 self-stretch w-full p-0">
                    <img
                      className="w-6 h-6"
                      alt="Industry card"
                      src={card.icon}
                    />
                    <div className="items-start gap-3 flex flex-col self-stretch w-full">
                      <h6 className="self-stretch mt-[-1.00px] font-h6 font-[number:var(--h6-font-weight)] text-[#ffffff] text-[length:var(--h6-font-size)] tracking-[var(--h6-letter-spacing)] leading-[var(--h6-line-height)] [font-style:var(--h6-font-style)]">
                        {card.title}
                      </h6>
                      <p
                        className={`self-stretch ${card.descClass} text-[#b8b8b8]`}
                      >
                        {card.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
