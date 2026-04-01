import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";

// FAQ questions data
const faqItems = [
  { id: "faq-1", question: "What services does ApexWeb Solutions provide?" },
  { id: "faq-2", question: "Which industries do you serve?" },
  { id: "faq-3", question: "Do you handle end-to-end project delivery?" },
  { id: "faq-4", question: "How do you ensure the quality of your solutions?" },
  {
    id: "faq-5",
    question: "Can you build AI-powered solutions for my business?",
  },
  {
    id: "faq-6",
    question: "How do you handle project timelines and communication?",
  },
];

// Overlapping avatar images
const avatarImages = [
  {
    src: "/ellipse-23.png",
    alt: "Ellipse",
    className:
      "relative w-[99.89px] h-[99.89px] mt-[-20.31px] mb-[-27.08px] ml-[-18.62px]",
  },
  {
    src: "/ellipse-22.png",
    alt: "Ellipse",
    className:
      "relative w-[99.89px] h-[99.89px] mt-[-20.31px] mb-[-27.08px] ml-[-15px]",
  },
  {
    src: "/ellipse-28.png",
    alt: "Ellipse",
    className:
      "relative w-[99.89px] h-[99.89px] mt-[-20.31px] mb-[-27.08px] mr-[-28.77px] ml-[-15px]",
  },
];

export const FaqsSection = (): JSX.Element => {
  return (
    <section className="flex w-full items-start justify-center gap-[230px] px-[150px] py-20 bg-[#0c0c0c]">
      {/* Left column: heading + CTA card */}
      <div className="flex flex-col w-[626px] items-start justify-center gap-12 relative shrink-0">
        {/* Badge + Heading */}
        <div className="items-start gap-3 flex flex-col relative self-stretch w-full">
          {/* FAQs badge pill */}
          <div className="inline-flex items-center justify-center gap-2 px-4 py-2.5 relative rounded-[6000px] overflow-hidden bg-[linear-gradient(180deg,rgba(10,10,10,0.2)_0%,rgba(255,0,0,0.2)_100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[6000px] before:[background:linear-gradient(6deg,rgba(255,140,140,0)_0%,rgba(153,84,84,0.2)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
            <img className="relative w-3 h-3" alt="Vector" src="/vector.svg" />
            <span className="relative w-fit mt-[-1.00px] font-eye-borrow font-[number:var(--eye-borrow-font-weight)] text-[#ffffff] text-[length:var(--eye-borrow-font-size)] tracking-[var(--eye-borrow-letter-spacing)] leading-[var(--eye-borrow-line-height)] [font-style:var(--eye-borrow-font-style)]">
              FAQs
            </span>
          </div>

          {/* Heading */}
          <div className="flex items-center relative self-stretch w-full">
            <h2 className="relative flex-1 mt-[-1.00px] font-h2 font-[number:var(--h2-font-weight)] text-[#ffffff] text-[length:var(--h2-font-size)] tracking-[var(--h2-letter-spacing)] leading-[var(--h2-line-height)] [font-style:var(--h2-font-style)]">
              Have questions about your project?
            </h2>
          </div>
        </div>

        {/* CTA Card */}
        <div className="flex flex-col items-start justify-center gap-[58px] pl-[70px] pr-[140px] py-12 relative self-stretch w-full bg-[#0e0e0e] rounded-2xl overflow-hidden before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-2xl before:[background:linear-gradient(68deg,rgba(45,45,45,0)_0%,rgba(147,147,147,0.4)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
          {/* Avatars + subtitle */}
          <div className="items-start gap-3 flex flex-col relative self-stretch w-full">
            <div className="inline-flex items-center relative">
              {avatarImages.map((avatar, index) => (
                <img
                  key={index}
                  className={avatar.className}
                  alt={avatar.alt}
                  src={avatar.src}
                />
              ))}
            </div>

            <p className="relative self-stretch font-h5 font-[number:var(--h5-font-weight)] text-[#ffffff] text-[length:var(--h5-font-size)] tracking-[var(--h5-letter-spacing)] leading-[var(--h5-line-height)] [font-style:var(--h5-font-style)]">
              Find the perfect solution for your business today!
            </p>
          </div>

          {/* View Our Work button */}
          <div className="relative w-[195px] h-[55.5px] bg-[#0000001a] rounded-[47.83px] overflow-hidden">
            <div className="inline-flex flex-col h-5 items-center gap-[7.5px] absolute top-[18px] left-[21px] overflow-hidden">
              <span className="relative w-fit mt-[-0.75px] [font-family:'Inter_Display-Medium',Helvetica] font-medium text-[#ffffff] text-[15px] tracking-[-0.15px] leading-[19.5px] whitespace-nowrap">
                View Our Work
              </span>
              <span className="relative w-fit [font-family:'Inter_Display-Medium',Helvetica] font-medium text-neutral-900 text-[15px] tracking-[-0.15px] leading-[19.5px] whitespace-nowrap">
                View Our Work
              </span>
            </div>

            <div className="top-[50.00%] left-[calc(50.00%_+_44px)] w-px h-px rounded-[0.64px] absolute bg-[linear-gradient(180deg,rgba(210,48,48,1)_0%,rgba(98,0,0,1)_100%)]" />

            <img
              className="absolute top-[9px] left-[137px] w-[38px] h-[38px]"
              alt="Frame"
              src="/frame-1321325373-5.svg"
            />
          </div>

          {/* Decorative blurred images */}
          <img
            className="top-[226px] left-[427px] w-[199px] h-[106px] blur-[2.5px] absolute object-cover"
            alt="Img"
            src="/aac51a56b67c91e6cee6283adb3d39cb-2.png"
          />
          <img
            className="top-0 left-0 w-[51px] h-16 blur-[0.5px] absolute object-cover"
            alt="Img"
            src="/aac51a56b67c91e6cee6283adb3d39cb-2.png"
          />
        </div>
      </div>

      {/* Right column: FAQ accordion list */}
      <div className="flex flex-col items-start px-0 py-6 relative flex-1 self-stretch">
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem
              key={item.id}
              value={item.id}
              className={`px-0 py-0 ${index === 0 ? "border-b border-[#282828]" : "border-b border-[#1a1a1a]"} ${index === faqItems.length - 1 ? "border-b-0" : ""}`}
            >
              <AccordionTrigger className="flex items-center gap-4 px-0 py-9 w-full text-left hover:no-underline [&>svg]:hidden">
                <span className="flex-1 font-paragraph-large font-[number:var(--paragraph-large-font-weight)] text-[#ffffff] text-[length:var(--paragraph-large-font-size)] tracking-[var(--paragraph-large-letter-spacing)] leading-[var(--paragraph-large-line-height)] [font-style:var(--paragraph-large-font-style)]">
                  {item.question}
                </span>
                <img
                  className="w-10 h-10 shrink-0"
                  alt="Left"
                  src="/left.svg"
                />
              </AccordionTrigger>
              <AccordionContent className="pb-4 text-[#999999] font-paragraph-large font-[number:var(--paragraph-large-font-weight)] text-[length:var(--paragraph-large-font-size)] tracking-[var(--paragraph-large-letter-spacing)] leading-[var(--paragraph-large-line-height)]"></AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
