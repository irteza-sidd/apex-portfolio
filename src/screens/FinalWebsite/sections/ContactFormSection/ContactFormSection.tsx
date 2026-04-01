import { useState } from "react";

const budgetOptions = ["$1-5k", "$5-10k", "$10-20k", "$20-50K", "$50K+"];

export const ContactFormSection = (): JSX.Element => {
  const [selectedBudget, setSelectedBudget] = useState<string | null>(null);

  return (
    <section className="flex flex-col w-full items-center px-[150px] py-[100px] relative bg-neutral-950 overflow-hidden">
      {/* Background decorative image */}
      <img
        className="absolute left-px bottom-px w-full h-[672px] object-cover pointer-events-none"
        alt="Group"
        src="/group-1171274896.png"
      />

      <div className="flex flex-col items-start gap-[60px] relative w-full">
        {/* Top section: badge + heading + form rows */}
        <div className="flex flex-col items-start gap-3 w-full">
          {/* "Contact Us" badge pill */}
          <div className="inline-flex items-center justify-center gap-2 px-4 py-2.5 relative flex-[0_0_auto] rounded-[6000px] overflow-hidden border-[none] bg-[linear-gradient(180deg,rgba(10,10,10,0.2)_0%,rgba(255,0,0,0.2)_100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[6000px] before:[background:linear-gradient(6deg,rgba(255,140,140,0)_0%,rgba(153,84,84,0.2)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
            <img className="relative w-3 h-3" alt="Vector" src="/vector.svg" />
            <span className="relative w-fit mt-[-1.00px] font-eye-borrow font-[number:var(--eye-borrow-font-weight)] text-[#ffffff] text-[length:var(--eye-borrow-font-size)] tracking-[var(--eye-borrow-letter-spacing)] leading-[var(--eye-borrow-line-height)] [font-style:var(--eye-borrow-font-style)]">
              Contact Us
            </span>
          </div>

          {/* Heading + form rows */}
          <div className="flex flex-col items-start gap-12 w-full">
            {/* Heading SVG */}
            <img
              className="relative w-[887.53px] h-[59.62px]"
              alt="Hey we are ready to consult you"
              src="/hey--we-are-ready-to-consult-you.svg"
            />

            {/* Form rows */}
            <div className="flex flex-col items-start gap-[34px] w-full">
              {/* Row 1: My name is [name] and I'm interested in [service]. */}
              <div className="flex flex-wrap items-start gap-[22px]">
                <span className="flex items-center mt-[-1.00px] [font-family:'Inter_Display-Regular',Helvetica] font-normal text-[#ffffff] text-[38px] tracking-[-0.38px] leading-[normal]">
                  My name is
                </span>

                {/* Name input field */}
                <div className="flex flex-col w-[445.43px] items-center gap-1.5">
                  <span className="flex items-center self-stretch mt-[-1.00px] opacity-40 font-h3 font-[number:var(--h3-font-weight)] text-[#ffffff] text-[length:var(--h3-font-size)] tracking-[var(--h3-letter-spacing)] leading-[var(--h3-line-height)] [font-style:var(--h3-font-style)]">
                    first and last name
                  </span>
                  <img
                    className="w-[445.43px] h-px mb-[-0.50px]"
                    alt="Vector"
                    src="/vector-29-1.svg"
                  />
                </div>

                <span className="flex items-center mt-[-1.00px] [font-family:'Inter_Display-Regular',Helvetica] font-normal text-[#ffffff] text-[38px] tracking-[-0.38px] leading-[normal]">
                  and I&apos;m interested in
                </span>

                {/* Service input field */}
                <div className="flex flex-col w-[445.43px] items-center gap-1.5">
                  <span className="flex items-center self-stretch mt-[-1.00px] opacity-40 font-h3 font-[number:var(--h3-font-weight)] text-[#ffffff] text-[length:var(--h3-font-size)] tracking-[var(--h3-letter-spacing)] leading-[var(--h3-line-height)] [font-style:var(--h3-font-style)]">
                    service name
                  </span>
                  <img
                    className="w-[445.43px] h-px mb-[-0.50px]"
                    alt="Vector"
                    src="/vector-29-1.svg"
                  />
                </div>

                <span className="flex items-center self-stretch w-[7px] font-h3 text-[#ffffff] text-[length:var(--h3-font-size)] tracking-[var(--h3-letter-spacing)] leading-[var(--h3-line-height)] whitespace-nowrap mt-[-1.00px] font-[number:var(--h3-font-weight)] [font-style:var(--h3-font-style)]">
                  .
                </span>
              </div>

              {/* Row 2: My Project budget [budget options]. */}
              <div className="inline-flex flex-wrap items-start gap-[22px]">
                <span className="flex items-center mt-[-1.00px] [font-family:'Inter_Display-Regular',Helvetica] font-normal text-[#ffffff] text-[38px] tracking-[-0.38px] leading-[normal]">
                  My Project budget
                </span>

                {/* Budget toggle buttons */}
                {budgetOptions.map((option) => (
                  <button
                    key={option}
                    onClick={() =>
                      setSelectedBudget(
                        option === selectedBudget ? null : option,
                      )
                    }
                    className={`flex w-[140px] h-[52px] items-center justify-center gap-2.5 rounded-[60px] border border-solid transition-colors ${
                      selectedBudget === option
                        ? "border-[#ff4444] bg-[rgba(255,0,0,0.15)]"
                        : "border-[#383838] bg-transparent"
                    }`}
                  >
                    <span className="flex items-center w-fit font-h5 font-[number:var(--h5-font-weight)] text-[#ffffff] text-[length:var(--h5-font-size)] tracking-[var(--h5-letter-spacing)] leading-[var(--h5-line-height)] [font-style:var(--h5-font-style)]">
                      {option}
                    </span>
                  </button>
                ))}

                <span className="flex items-center self-stretch w-[7px] font-h3 text-[#ffffff] text-[length:var(--h3-font-size)] tracking-[var(--h3-letter-spacing)] leading-[var(--h3-line-height)] whitespace-nowrap mt-[-1.00px] font-[number:var(--h3-font-weight)] [font-style:var(--h3-font-style)]">
                  .
                </span>
              </div>

              {/* Row 3: Please, Contact me at [email]. */}
              <div className="inline-flex flex-wrap items-start gap-[22px]">
                <span className="flex items-center mt-[-1.00px] [font-family:'Inter_Display-Regular',Helvetica] font-normal text-[#ffffff] text-[38px] tracking-[-0.38px] leading-[normal]">
                  Please, Contact me at
                </span>

                {/* Email input field */}
                <div className="flex flex-col w-[445.43px] items-center gap-1.5">
                  <span className="flex items-center self-stretch mt-[-1.00px] opacity-40 font-h3 font-[number:var(--h3-font-weight)] text-[#ffffff] text-[length:var(--h3-font-size)] tracking-[var(--h3-letter-spacing)] leading-[var(--h3-line-height)] [font-style:var(--h3-font-style)]">
                    name@example.com
                  </span>
                  <img
                    className="w-[445.43px] h-px mb-[-0.50px]"
                    alt="Vector"
                    src="/vector-29-1.svg"
                  />
                </div>

                <span className="flex items-center self-stretch w-[7px] font-h3 text-[#ffffff] text-[length:var(--h3-font-size)] tracking-[var(--h3-letter-spacing)] leading-[var(--h3-line-height)] whitespace-nowrap mt-[-1.00px] font-[number:var(--h3-font-weight)] [font-style:var(--h3-font-style)]">
                  .
                </span>
              </div>

              {/* Row 4: Optionally, I'm sharing more: [details]. */}
              <div className="inline-flex flex-wrap items-start gap-[22px]">
                <span className="flex items-center mt-[-1.00px] [font-family:'Inter_Display-Regular',Helvetica] font-normal text-[#ffffff] text-[38px] tracking-[-0.38px] leading-[normal]">
                  Optionally, I&apos;m sharing more:
                </span>

                {/* Project details input field */}
                <div className="flex flex-col w-[445.43px] items-center gap-1.5">
                  <span className="flex items-center self-stretch mt-[-1.00px] opacity-40 font-h3 font-[number:var(--h3-font-weight)] text-[#ffffff] text-[length:var(--h3-font-size)] tracking-[var(--h3-letter-spacing)] leading-[var(--h3-line-height)] [font-style:var(--h3-font-style)]">
                    your project details
                  </span>
                  <img
                    className="w-[445.43px] h-px mb-[-0.50px]"
                    alt="Vector"
                    src="/vector-29-1.svg"
                  />
                </div>

                <span className="flex items-center self-stretch w-[7px] font-h3 text-[#ffffff] text-[length:var(--h3-font-size)] tracking-[var(--h3-letter-spacing)] leading-[var(--h3-line-height)] whitespace-nowrap mt-[-1.00px] font-[number:var(--h3-font-weight)] [font-style:var(--h3-font-style)]">
                  .
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Submit / CTA button */}
        <div className="relative w-[244px] h-[74px] bg-[#0000001a] rounded-[63.78px] overflow-hidden">
          <div className="inline-flex flex-col h-[26px] items-center gap-2.5 absolute top-6 left-7 overflow-hidden">
            <span className="relative w-fit mt-[-1.00px] [font-family:'Inter_Display-Medium',Helvetica] font-medium text-[#ffffff] text-xl tracking-[-0.20px] leading-[26px] whitespace-nowrap">
              View Our Work
            </span>
            <span className="relative w-fit [font-family:'Inter_Display-Medium',Helvetica] font-medium text-neutral-900 text-xl tracking-[-0.20px] leading-[26px] whitespace-nowrap">
              View Our Work
            </span>
          </div>

          {/* Decorative dot */}
          <div className="absolute top-[calc(50.00%_-_1px)] left-[calc(50.00%_+_58px)] w-0.5 h-0.5 rounded-[0.86px] bg-[linear-gradient(180deg,rgba(210,48,48,1)_0%,rgba(98,0,0,1)_100%)]" />

          {/* Arrow icon */}
          <img
            className="absolute top-3 left-[183px] w-[50px] h-[50px]"
            alt="Frame"
            src="/frame-1321325373.svg"
          />
        </div>
      </div>
    </section>
  );
};
