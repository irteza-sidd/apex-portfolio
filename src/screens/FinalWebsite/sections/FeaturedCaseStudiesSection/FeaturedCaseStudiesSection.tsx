import { Card, CardContent } from "../../../../components/ui/card";

// Data for the three case studies
const caseStudies = [
  {
    id: 1,
    bg: "bg-[#ffffff]",
    imageUrl: "/rectangle-3.png",
    imagePosition: "right",
    tags: [
      {
        label: "User Retention",
        dotColor: "bg-[#1d1d1d]",
        borderColor: "border-[#b9b9b9]",
        textColor: "text-[#1d1d1d]",
      },
      {
        label: "Mobile App",
        dotColor: "bg-[#1d1d1d]",
        borderColor: "border-[#b9b9b9]",
        textColor: "text-[#1d1d1d]",
      },
      {
        label: "Fintech",
        dotColor: "bg-[#1d1d1d]",
        borderColor: "border-[#b9b9b9]",
        textColor: "text-[#1d1d1d]",
      },
    ],
    title: "Case Study 01 — High Performance Mobile App",
    titleColor: "text-[#131313]",
    titleFont:
      "font-h2 font-[number:var(--h2-font-weight)] text-[length:var(--h2-font-size)] tracking-[var(--h2-letter-spacing)] leading-[var(--h2-line-height)] [font-style:var(--h2-font-style)]",
    stats: [
      {
        value: "-42%",
        label: "App Load Time",
        valueColor: "text-[#131313]",
        labelColor: "text-[#939393]",
      },
      {
        value: "2.6M+",
        label: "Monthly Active Users",
        valueColor: "text-[#131313]",
        labelColor: "text-[#939393]",
      },
      {
        value: "+58%",
        label: "User Retention",
        valueColor: "text-[#131313]",
        labelColor: "text-[#939393]",
      },
    ],
    borderColor: "border-[#b1b1b1]",
  },
  {
    id: 2,
    bg: "bg-[#071f1d]",
    imageUrl: "/rectangle-3-1.png",
    imagePosition: "left",
    tags: [
      {
        label: "Multichannel Integration",
        dotColor: "bg-[#229990]",
        borderColor: "border-[#0f4642]",
        textColor: "text-[#229990]",
      },
      {
        label: "Knowledge Base Engineering",
        dotColor: "bg-[#229990]",
        borderColor: "border-[#0f4642]",
        textColor: "text-[#229990]",
      },
    ],
    title: "Case Study 02 — Keyword Rankings Improvement Search Engines",
    titleColor: "text-[#229990]",
    titleFont:
      "font-h2 font-[number:var(--h2-font-weight)] text-[length:var(--h2-font-size)] tracking-[var(--h2-letter-spacing)] leading-[var(--h2-line-height)] [font-style:var(--h2-font-style)]",
    stats: [
      {
        value: "64%",
        label: "Organic Traffic",
        valueColor: "text-[#229990]",
        labelColor: "text-[#197069]",
      },
      {
        value: "40%",
        label: "Leads Generated",
        valueColor: "text-[#229990]",
        labelColor: "text-[#197069]",
      },
      {
        value: "24/7",
        label: "Uptime Fast Speed",
        valueColor: "text-[#229990]",
        labelColor: "text-[#197069]",
      },
    ],
    borderColor: "border-[#b1b1b1]",
  },
  {
    id: 3,
    bg: "bg-[#ffffff]",
    imageUrl: "/rectangle-2.png",
    imagePosition: "right",
    tags: [
      {
        label: "User Retention",
        dotColor: "bg-[#1d1d1d]",
        borderColor: "border-[#b9b9b9]",
        textColor: "text-[#1d1d1d]",
      },
      {
        label: "Mobile App",
        dotColor: "bg-[#1d1d1d]",
        borderColor: "border-[#b9b9b9]",
        textColor: "text-[#1d1d1d]",
      },
      {
        label: "Fintech",
        dotColor: "bg-[#1d1d1d]",
        borderColor: "border-[#b9b9b9]",
        textColor: "text-[#1d1d1d]",
      },
    ],
    title: "Case Study 03 — AI Agent Automation Impact",
    titleColor: "text-[#131313]",
    titleFont:
      "[font-family:'Inter_Display-Regular',Helvetica] font-normal text-[38px] tracking-[-0.38px] leading-[normal]",
    stats: [
      {
        value: "-71%",
        label: "Support Response",
        valueColor: "text-[#131313]",
        labelColor: "text-[#939393]",
      },
      {
        value: "94%",
        label: "Automation Accuracy",
        valueColor: "text-[#131313]",
        labelColor: "text-[#939393]",
      },
      {
        value: "38%",
        label: "Cost Reduction",
        valueColor: "text-[#131313]",
        labelColor: "text-[#939393]",
      },
    ],
    borderColor: "border-[#b1b1b1]",
  },
];

export const FeaturedCaseStudiesSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center relative self-stretch w-full flex-[0_0_auto]">
      {/* Header */}
      <div className="inline-flex flex-col items-center justify-center gap-2.5 pt-10 pb-0 px-0 relative flex-[0_0_auto]">
        {/* "Case Studies" pill badge */}
        <div className="inline-flex items-center justify-center gap-2 px-4 py-2.5 relative flex-[0_0_auto] rounded-[6000px] overflow-hidden border-[none] bg-[linear-gradient(180deg,rgba(72,72,72,0.2)_0%,rgba(255,0,0,0.2)_100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[6000px] before:[background:linear-gradient(6deg,rgba(255,140,140,0)_0%,rgba(153,84,84,0.2)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
          <img className="relative w-3 h-3" alt="Vector" src="/vector.svg" />
          <span className="relative w-fit mt-[-1.00px] font-eye-borrow font-[number:var(--eye-borrow-font-weight)] text-[#ffffff] text-[length:var(--eye-borrow-font-size)] tracking-[var(--eye-borrow-letter-spacing)] leading-[var(--eye-borrow-line-height)] [font-style:var(--eye-borrow-font-style)]">
            Case Studies
          </span>
        </div>

        {/* Section heading */}
        <h2 className="relative w-full max-w-[878px] font-h2 font-[number:var(--h2-font-weight)] text-[#ffffff] text-[length:var(--h2-font-size)] text-center tracking-[var(--h2-letter-spacing)] leading-[var(--h2-line-height)] [font-style:var(--h2-font-style)]">
          See how we turn complex ideas into scalable digital products
        </h2>
      </div>

      {/* Case studies container */}
      <div className="flex flex-col w-full max-w-[1620px] items-center gap-[30px] relative flex-[0_0_auto] mt-[-52px]">
        {caseStudies.map((study) => (
          <div
            key={study.id}
            className="flex flex-col items-start gap-2.5 pt-[260px] pb-0 px-0 relative self-stretch w-full flex-[0_0_auto]"
          >
            <Card
              className={`flex h-[660px] items-center gap-12 p-8 relative self-stretch w-full ${study.bg} rounded-xl border border-solid ${study.borderColor} shadow-none`}
            >
              <CardContent className="flex items-center gap-12 p-0 w-full h-full">
                {/* Image on the left for study 2 */}
                {study.imagePosition === "left" && (
                  <div
                    className="relative w-[754px] h-[596px] rounded-2xl overflow-hidden bg-cover bg-[50%_50%] flex-shrink-0"
                    style={{ backgroundImage: `url(${study.imageUrl})` }}
                  />
                )}

                {/* Text content */}
                <div className="flex flex-col items-end justify-between p-8 relative flex-1 self-stretch grow">
                  {/* Tags */}
                  <div className="inline-flex items-center gap-2.5 relative flex-[0_0_auto]">
                    {study.tags.map((tag, tagIndex) => (
                      <div
                        key={tagIndex}
                        className={`inline-flex items-center justify-center gap-2 px-4 py-2.5 relative flex-[0_0_auto] rounded-lg border border-solid ${tag.borderColor}`}
                      >
                        <div
                          className={`relative w-2 h-2 ${tag.dotColor} rounded`}
                        />
                        <span
                          className={`relative w-fit mt-[-1.00px] [font-family:'Inter_Display-Regular',Helvetica] font-normal ${tag.textColor} text-[15px] tracking-[-0.15px] leading-[normal] whitespace-nowrap`}
                        >
                          {tag.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Title + divider + stats */}
                  <div className="flex flex-col items-start gap-12 relative self-stretch w-full flex-[0_0_auto]">
                    <h3
                      className={`relative self-stretch mt-[-1.00px] ${study.titleColor} ${study.titleFont}`}
                    >
                      {study.title}
                    </h3>

                    <img
                      className="relative self-stretch w-full h-px"
                      alt="Line"
                      src="/line-1-1.svg"
                    />

                    {/* Stats row */}
                    <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
                      {study.stats.map((stat, statIndex) => (
                        <div key={statIndex} className="contents">
                          <div className="inline-flex flex-col items-start gap-1.5 relative flex-[0_0_auto]">
                            <span
                              className={`self-stretch font-h2 ${stat.valueColor} text-[length:var(--h2-font-size)] tracking-[var(--h2-letter-spacing)] leading-[var(--h2-line-height)] relative mt-[-1.00px] font-[number:var(--h2-font-weight)] [font-style:var(--h2-font-style)]`}
                            >
                              {stat.value}
                            </span>
                            <span
                              className={`relative self-stretch font-paragraph-medium font-[number:var(--paragraph-medium-font-weight)] ${stat.labelColor} text-[length:var(--paragraph-medium-font-size)] tracking-[var(--paragraph-medium-letter-spacing)] leading-[var(--paragraph-medium-line-height)] [font-style:var(--paragraph-medium-font-style)]`}
                            >
                              {stat.label}
                            </span>
                          </div>
                          {statIndex < study.stats.length - 1 && (
                            <img
                              className="relative w-px h-11"
                              alt="Line"
                              src="/line-2.svg"
                            />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Image on the right for studies 1 and 3 */}
                {study.imagePosition === "right" && (
                  <div
                    className="relative w-[754px] h-[596px] rounded-2xl overflow-hidden bg-cover bg-[50%_50%] flex-shrink-0"
                    style={{ backgroundImage: `url(${study.imageUrl})` }}
                  />
                )}
              </CardContent>
            </Card>
          </div>
        ))}

        {/* View all Case Studies banner */}
        <div className="relative w-full bg-[linear-gradient(180deg,rgba(15,15,15,0)_0%,rgba(10,10,10,1)_100%)] flex items-end pb-0">
          <Card className="w-full gap-7 p-3.5 bg-[#ffffff] flex items-center rounded-xl shadow-none border-0">
            <CardContent className="flex items-center gap-7 p-0 w-full">
              {/* Thumbnail */}
              <div
                className="relative self-stretch w-[135px] rounded-lg bg-cover bg-[50%_50%] min-h-[80px]"
                style={{ backgroundImage: "url(/rectangle-2.png)" }}
              />

              {/* Text */}
              <div className="flex flex-col items-start gap-8 px-0 py-5 relative flex-1 grow">
                <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                  <h3 className="relative self-stretch mt-[-1.00px] [font-family:'Inter_Display-Regular',Helvetica] font-normal text-[#131313] text-[38px] tracking-[-0.38px] leading-[normal]">
                    View all Case Studies
                  </h3>
                  <p className="relative self-stretch font-paragraph-medium font-[number:var(--paragraph-medium-font-weight)] text-[#939393] text-[length:var(--paragraph-medium-font-size)] tracking-[var(--paragraph-medium-letter-spacing)] leading-[var(--paragraph-medium-line-height)] [font-style:var(--paragraph-medium-font-style)]">
                    Access in-depth reports, strategic analysis, and thought
                    leadership
                  </p>
                </div>
              </div>

              {/* Arrow icon */}
              <img
                className="relative w-[70px] h-[70px] flex-shrink-0"
                alt="Frame"
                src="/frame-1321325373-2.svg"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
