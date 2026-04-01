// Platform ratings data for the left reviews panel
const platformRatings = [
  {
    img: "/amzxshshja4hdd8qhuln-1.png",
    alt: "Amzxshshjahddqhuln",
    rating: "4.9",
    imgClass: "w-9 h-9 object-cover",
  },
  {
    img: "/images-1.png",
    alt: "Images",
    rating: "4.8",
    imgClass: "w-[33px] h-[38px]",
  },
  {
    img: "/amzxshshja4hdd8qhuln-1-1.png",
    alt: "Amzxshshjahddqhuln",
    rating: "5.0",
    imgClass: "w-9 h-9 object-cover",
  },
];

// Text-based testimonial cards data
const textTestimonials = [
  {
    logomark: "/logomark-2.svg",
    logotype: "/logotype-6.svg",
    rating: "4.9",
    ratingSecondaryColor: "#a8a8a8",
    quote:
      "ApexWeb Solutions delivered exactly what we needed clean architecture, scalable code, and a polished user experience. Their AI expertise helped us automate workflows and reduce operational costs significantly.",
    avatar: "/ellipse-11.png",
    name: "Sarah Mitchell",
    title: "Product Director at sisyphus",
    titleColor: "#a8a8a8",
  },
  {
    logomark: "/logomark-1.svg",
    logotype: "/logotype-5.svg",
    rating: "4.9",
    ratingSecondaryColor: "#909090",
    quote:
      "Exceptional engineering quality and communication. The AI agents they developed streamlined our internal operations and customer support dramatically.",
    avatar: "/ellipse-11-3.png",
    name: "Daniel Foster",
    title: "CTO at segment",
    titleColor: "#909090",
  },
  {
    logomark: "/logomark-3.svg",
    logotype: "/logotype-7.svg",
    rating: "4.9",
    ratingSecondaryColor: "#909090",
    quote:
      "They understood our requirements quickly and translated them into a scalable solution. Reliable partner with strong technical expertise.",
    avatar: "/ellipse-11-6.png",
    name: "Andrew Collins",
    title: "CTO at B2B Platform",
    titleColor: "#909090",
  },
];

// Image-based testimonial cards data
const imageTestimonials = [
  {
    bgImage: "/frame-2095586002.png",
    frameSvg: "/frame-2095586007.svg",
    avatar: "/ellipse-11-4.png",
    name: "Michael Rodriguez",
    title: "Operations Manager at retailsphere",
  },
  {
    bgImage: "/frame-2095586002-1.png",
    frameSvg: "/frame-2095586007-1.svg",
    avatar: "/ellipse-11-5.png",
    name: "David Reynolds",
    title: "Head of Marketing at Texiclook",
  },
];

export const ClientTestimonialsSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center justify-center gap-12 px-[150px] py-20 relative bg-neutral-950">
      {/* Header */}
      <div className="items-center gap-3 flex flex-col relative self-stretch w-full">
        {/* Badge */}
        <div className="inline-flex items-center justify-center gap-2 px-4 py-2.5 relative rounded-[6000px] overflow-hidden bg-[linear-gradient(180deg,rgba(72,72,72,0.2)_0%,rgba(255,0,0,0.2)_100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[6000px] before:[background:linear-gradient(6deg,rgba(255,140,140,0)_0%,rgba(153,84,84,0.2)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
          <img className="relative w-3 h-3" alt="Vector" src="/vector.svg" />
          <div className="relative w-fit mt-[-1.00px] font-eye-borrow font-[number:var(--eye-borrow-font-weight)] text-[#ffffff] text-[length:var(--eye-borrow-font-size)] tracking-[var(--eye-borrow-letter-spacing)] leading-[var(--eye-borrow-line-height)] [font-style:var(--eye-borrow-font-style)]">
            Testimonial
          </div>
        </div>

        {/* Heading */}
        <div className="flex items-center justify-center gap-2.5 relative self-stretch w-full">
          <h2 className="relative max-w-[842px] mt-[-1.00px] font-h2 font-[number:var(--h2-font-weight)] text-[#ffffff] text-[length:var(--h2-font-size)] text-center tracking-[var(--h2-letter-spacing)] leading-[var(--h2-line-height)] [font-style:var(--h2-font-style)]">
            Built for impact. Trusted by innovators and growing companies
          </h2>
        </div>
      </div>

      {/* Cards row */}
      <div className="flex h-[530px] items-stretch relative self-stretch w-full">
        {/* Left reviews panel */}
        <div className="flex flex-col items-start justify-around gap-[60px] p-8 relative flex-shrink-0 w-[245px] bg-[#101010] border-t border-b border-l border-[#1a1a1a]">
          <div className="flex flex-col items-start gap-8 relative flex-1 self-stretch w-full">
            {/* Reviews title */}
            <div className="flex flex-col items-center gap-3 relative flex-1 self-stretch w-full">
              <div className="relative self-stretch mt-[-1.00px] [font-family:'Inter_Display-SemiBold',Helvetica] font-semibold text-[#ffffff] text-2xl text-center tracking-[-0.24px] leading-[normal]">
                Reviews
              </div>
              <div className="relative w-[245px] [font-family:'Inter_Display-Regular',Helvetica] font-normal text-[#909090] text-lg text-center tracking-[0] leading-[normal]">
                High rated across multiple platforms
              </div>
            </div>

            {/* Platform rating rows */}
            <div className="items-start gap-3 flex flex-col relative self-stretch w-full">
              {platformRatings.map((platform, index) => (
                <div
                  key={index}
                  className="flex items-center justify-end gap-2.5 px-3.5 py-1.5 relative self-stretch w-full rounded-[176px] border border-solid border-[#1a1a1a]"
                >
                  <div className="flex items-center gap-2.5 relative flex-1 grow">
                    <img
                      className={`relative ${platform.imgClass}`}
                      alt={platform.alt}
                      src={platform.img}
                    />
                  </div>
                  <div className="inline-flex items-center gap-1 relative">
                    <div className="w-fit [font-family:'Inter_Display-Regular',Helvetica] text-[#ffffff] text-lg tracking-[0.54px] leading-6 whitespace-nowrap relative mt-[-1.00px] font-normal">
                      {platform.rating}
                    </div>
                    <img
                      className="relative w-[14.83px] h-[14.2px]"
                      alt="Star"
                      src="/star-5.svg"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonial cards container */}
        <div className="relative flex-1 h-[530px] overflow-hidden">
          <div className="flex h-full">
            {/* Text testimonial card 1 */}
            <div className="flex flex-col w-[405px] h-[530px] flex-shrink-0 items-start justify-between p-8 bg-[#101010] border-t border-b border-l border-[#1a1a1a]">
              <div className="flex flex-col items-start gap-8 relative flex-1 self-stretch w-full">
                {/* Logo + rating */}
                <div className="items-start gap-3 flex flex-col relative self-stretch w-full">
                  <div className="flex items-center justify-between relative self-stretch w-full">
                    <div className="relative w-[100px] h-7">
                      <img
                        className="absolute w-[17.16%] h-full top-0 left-0"
                        alt="Logomark"
                        src={textTestimonials[0].logomark}
                      />
                      <img
                        className="absolute w-[74.65%] h-[56.76%] top-[25.80%] left-[24.84%]"
                        alt="Logotype"
                        src={textTestimonials[0].logotype}
                      />
                    </div>
                    <div className="inline-flex items-center gap-1 relative">
                      <img
                        className="relative w-[11.03px] h-[10.58px]"
                        alt="Star"
                        src="/star-5-2.svg"
                      />
                      <div className="mt-[-0.50px] [font-family:'Inter_Display-Regular',Helvetica] font-normal text-transparent text-xs tracking-[0] leading-[normal] relative w-fit">
                        <span className="text-[#ffffff]">
                          {textTestimonials[0].rating}
                        </span>
                        <span
                          style={{
                            color: textTestimonials[0].ratingSecondaryColor,
                          }}
                        >
                          /
                        </span>
                        <span
                          style={{
                            color: textTestimonials[0].ratingSecondaryColor,
                          }}
                          className="text-[10px]"
                        >
                          5.0
                        </span>
                      </div>
                    </div>
                  </div>
                  <img
                    className="relative self-stretch w-full h-px"
                    alt="Line"
                    src="/line-7.svg"
                  />
                </div>
                {/* Quote */}
                <div className="items-start gap-6 flex flex-col relative self-stretch w-full">
                  <img
                    className="relative w-6 h-[21px]"
                    alt="Image"
                    src="/-.svg"
                  />
                  <p className="relative self-stretch font-paragraph-medium font-[number:var(--paragraph-medium-font-weight)] text-[#ffffff] text-[length:var(--paragraph-medium-font-size)] tracking-[var(--paragraph-medium-letter-spacing)] leading-[var(--paragraph-medium-line-height)] [font-style:var(--paragraph-medium-font-style)]">
                    {textTestimonials[0].quote}
                  </p>
                </div>
              </div>
              {/* Author */}
              <div className="flex items-center gap-5 relative self-stretch w-full">
                <div className="relative w-[54px] h-[54px] rounded-[120px] overflow-hidden">
                  <img
                    className="w-[54px] h-[54px] object-cover"
                    alt="Ellipse"
                    src={textTestimonials[0].avatar}
                  />
                </div>
                <div className="flex flex-col items-start justify-center gap-1 relative flex-1 self-stretch">
                  <div className="relative self-stretch [font-family:'Inter_Display-SemiBold',Helvetica] font-semibold text-[#ffffff] text-base tracking-[0] leading-[normal]">
                    {textTestimonials[0].name}
                  </div>
                  <div
                    className="relative w-fit font-paragraph-xsmall font-[number:var(--paragraph-xsmall-font-weight)] text-[length:var(--paragraph-xsmall-font-size)] tracking-[var(--paragraph-xsmall-letter-spacing)] leading-[var(--paragraph-xsmall-line-height)] whitespace-nowrap [font-style:var(--paragraph-xsmall-font-style)]"
                    style={{ color: textTestimonials[0].titleColor }}
                  >
                    {textTestimonials[0].title}
                  </div>
                </div>
              </div>
            </div>

            {/* Image testimonial card 1 */}
            <div className="flex flex-col w-[405px] h-[530px] flex-shrink-0 items-start justify-around gap-[60px] p-1.5 bg-[#101010] border-t border-b border-l border-[#1a1a1a]">
              <div
                className="flex flex-col items-center justify-end gap-8 relative flex-1 self-stretch w-full rounded"
                style={{
                  background: `linear-gradient(0deg,rgba(0,0,0,0.2) 0%,rgba(0,0,0,0.2) 100%),linear-gradient(176deg,rgba(0,0,0,0) 0%,rgba(0,0,0,0.7) 100%),url(${imageTestimonials[0].bgImage}) 50% 50% / cover`,
                }}
              >
                <img
                  className="relative w-full flex-1 object-contain"
                  alt="Frame"
                  src={imageTestimonials[0].frameSvg}
                />
                <div className="flex items-center gap-5 px-8 py-7 relative self-stretch w-full">
                  <div className="relative w-[54px] h-[54px] rounded-[120px] overflow-hidden">
                    <img
                      className="w-[54px] h-[54px] object-cover"
                      alt="Ellipse"
                      src={imageTestimonials[0].avatar}
                    />
                  </div>
                  <div className="flex flex-col items-start justify-center gap-1 flex-1 grow relative">
                    <div className="relative self-stretch mt-[-1.00px] [font-family:'Inter_Display-SemiBold',Helvetica] font-semibold text-[#ffffff] text-base tracking-[-0.32px] leading-[normal]">
                      {imageTestimonials[0].name}
                    </div>
                    <div className="relative w-fit [font-family:'Inter_Display-Regular',Helvetica] font-normal text-[#a8a8a8] text-base tracking-[-0.32px] leading-[normal] whitespace-nowrap">
                      {imageTestimonials[0].title}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Text testimonial card 2 */}
            <div className="flex flex-col w-[405px] h-[530px] flex-shrink-0 items-start justify-between p-8 bg-[#101010] border border-solid border-[#1a1a1a]">
              <div className="flex flex-col items-start gap-8 relative flex-1 self-stretch w-full">
                {/* Logo + rating */}
                <div className="items-start gap-3 flex flex-col relative self-stretch w-full">
                  <div className="flex items-center justify-between relative self-stretch w-full">
                    <div className="relative w-[100px] h-[27px]">
                      <img
                        className="absolute w-[24.86%] top-[4.17%] left-0 h-[91.67%]"
                        alt="Logomark"
                        src={textTestimonials[1].logomark}
                      />
                      <img
                        className="absolute w-[68.63%] h-[55.60%] top-[27.64%] left-[31.14%]"
                        alt="Logotype"
                        src={textTestimonials[1].logotype}
                      />
                    </div>
                    <div className="inline-flex items-center gap-1 relative">
                      <img
                        className="relative w-[11.03px] h-[10.58px]"
                        alt="Star"
                        src="/star-5-2.svg"
                      />
                      <div className="mt-[-0.50px] [font-family:'Inter_Display-Regular',Helvetica] font-normal text-transparent text-xs tracking-[0] leading-[normal] relative w-fit">
                        <span className="text-[#ffffff]">
                          {textTestimonials[1].rating}
                        </span>
                        <span
                          style={{
                            color: textTestimonials[1].ratingSecondaryColor,
                          }}
                        >
                          /
                        </span>
                        <span
                          style={{
                            color: textTestimonials[1].ratingSecondaryColor,
                          }}
                          className="text-[10px]"
                        >
                          5.0
                        </span>
                      </div>
                    </div>
                  </div>
                  <img
                    className="relative self-stretch w-full h-px"
                    alt="Line"
                    src="/line-7.svg"
                  />
                </div>
                {/* Quote */}
                <div className="items-start gap-6 flex flex-col relative self-stretch w-full">
                  <img
                    className="relative w-6 h-[21px]"
                    alt="Image"
                    src="/-.svg"
                  />
                  <p className="relative self-stretch font-paragraph-medium font-[number:var(--paragraph-medium-font-weight)] text-[#ffffff] text-[length:var(--paragraph-medium-font-size)] tracking-[var(--paragraph-medium-letter-spacing)] leading-[var(--paragraph-medium-line-height)] [font-style:var(--paragraph-medium-font-style)]">
                    {textTestimonials[1].quote}
                  </p>
                </div>
              </div>
              {/* Author */}
              <div className="flex items-center gap-5 relative self-stretch w-full">
                <div className="relative w-[54px] h-[54px] rounded-[120px] overflow-hidden">
                  <img
                    className="w-[54px] h-[54px] object-cover"
                    alt="Ellipse"
                    src={textTestimonials[1].avatar}
                  />
                </div>
                <div className="flex flex-col items-start justify-center gap-1 relative flex-1 self-stretch">
                  <div className="relative self-stretch [font-family:'Inter_Display-SemiBold',Helvetica] font-semibold text-[#ffffff] text-base tracking-[0] leading-[normal]">
                    {textTestimonials[1].name}
                  </div>
                  <div
                    className="relative w-fit font-paragraph-xsmall font-[number:var(--paragraph-xsmall-font-weight)] text-[length:var(--paragraph-xsmall-font-size)] tracking-[var(--paragraph-xsmall-letter-spacing)] leading-[var(--paragraph-xsmall-line-height)] whitespace-nowrap [font-style:var(--paragraph-xsmall-font-style)]"
                    style={{ color: textTestimonials[1].titleColor }}
                  >
                    {textTestimonials[1].title}
                  </div>
                </div>
              </div>
            </div>

            {/* Image testimonial card 2 */}
            <div className="flex flex-col w-[405px] h-[530px] flex-shrink-0 items-start justify-around gap-[60px] p-1.5 bg-[#101010] border-t border-b border-l border-[#1a1a1a]">
              <div
                className="flex flex-col items-center justify-end gap-8 relative flex-1 self-stretch w-full rounded"
                style={{
                  background: `linear-gradient(0deg,rgba(0,0,0,0.2) 0%,rgba(0,0,0,0.2) 100%),linear-gradient(176deg,rgba(0,0,0,0) 0%,rgba(0,0,0,0.7) 100%),url(${imageTestimonials[1].bgImage}) 50% 50% / cover`,
                }}
              >
                <img
                  className="relative w-full flex-1 object-contain"
                  alt="Frame"
                  src={imageTestimonials[1].frameSvg}
                />
                <div className="flex items-center gap-5 px-8 py-7 relative self-stretch w-full">
                  <div className="relative w-[54px] h-[54px] rounded-[120px] overflow-hidden">
                    <img
                      className="w-[54px] h-[54px] object-cover"
                      alt="Ellipse"
                      src={imageTestimonials[1].avatar}
                    />
                  </div>
                  <div className="flex flex-col items-start justify-center gap-1 flex-1 grow relative">
                    <div className="relative self-stretch mt-[-1.00px] [font-family:'Inter_Display-SemiBold',Helvetica] font-semibold text-[#ffffff] text-base tracking-[-0.32px] leading-[normal]">
                      {imageTestimonials[1].name}
                    </div>
                    <div className="relative w-fit [font-family:'Inter_Display-Regular',Helvetica] font-normal text-[#a8a8a8] text-base tracking-[-0.32px] leading-[normal] whitespace-nowrap">
                      {imageTestimonials[1].title}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Text testimonial card 3 */}
            <div className="flex flex-col w-[405px] h-[530px] flex-shrink-0 items-start justify-between p-8 bg-[#101010] border border-solid border-[#1a1a1a]">
              <div className="flex flex-col items-start gap-8 relative flex-1 self-stretch w-full">
                {/* Logo + rating */}
                <div className="items-start gap-3 flex flex-col relative self-stretch w-full">
                  <div className="flex items-center justify-between relative self-stretch w-full">
                    <div className="relative w-[100px] h-[28.74px]">
                      <img
                        className="absolute w-[22.75%] top-0 left-0 h-[91.67%]"
                        alt="Logomark"
                        src={textTestimonials[2].logomark}
                      />
                      <img
                        className="absolute w-[69.48%] h-[60.52%] top-[20%] left-[25%]"
                        alt="Logotype"
                        src={textTestimonials[2].logotype}
                      />
                    </div>
                    <div className="inline-flex items-center gap-1 relative">
                      <img
                        className="relative w-[11.03px] h-[10.58px]"
                        alt="Star"
                        src="/star-5-2.svg"
                      />
                      <div className="mt-[-0.50px] [font-family:'Inter_Display-Regular',Helvetica] font-normal text-transparent text-xs tracking-[0] leading-[normal] relative w-fit">
                        <span className="text-[#ffffff]">
                          {textTestimonials[2].rating}
                        </span>
                        <span
                          style={{
                            color: textTestimonials[2].ratingSecondaryColor,
                          }}
                        >
                          /
                        </span>
                        <span
                          style={{
                            color: textTestimonials[2].ratingSecondaryColor,
                          }}
                          className="text-[10px]"
                        >
                          5.0
                        </span>
                      </div>
                    </div>
                  </div>
                  <img
                    className="relative self-stretch w-full h-px"
                    alt="Line"
                    src="/line-7.svg"
                  />
                </div>
                {/* Quote */}
                <div className="items-start gap-6 flex flex-col relative self-stretch w-full">
                  <img
                    className="relative w-6 h-[21px]"
                    alt="Image"
                    src="/-.svg"
                  />
                  <p className="relative self-stretch font-paragraph-medium font-[number:var(--paragraph-medium-font-weight)] text-[#ffffff] text-[length:var(--paragraph-medium-font-size)] tracking-[var(--paragraph-medium-letter-spacing)] leading-[var(--paragraph-medium-line-height)] [font-style:var(--paragraph-medium-font-style)]">
                    {textTestimonials[2].quote}
                  </p>
                </div>
              </div>
              {/* Author */}
              <div className="flex items-center gap-5 relative self-stretch w-full">
                <div className="relative w-[54px] h-[54px] rounded-[120px] overflow-hidden">
                  <img
                    className="w-[54px] h-[54px] object-cover"
                    alt="Ellipse"
                    src={textTestimonials[2].avatar}
                  />
                </div>
                <div className="flex flex-col items-start justify-center gap-1 relative flex-1 self-stretch">
                  <div className="relative self-stretch [font-family:'Inter_Display-SemiBold',Helvetica] font-semibold text-[#ffffff] text-base tracking-[0] leading-[normal]">
                    {textTestimonials[2].name}
                  </div>
                  <div
                    className="relative w-fit font-paragraph-xsmall font-[number:var(--paragraph-xsmall-font-weight)] text-[length:var(--paragraph-xsmall-font-size)] tracking-[var(--paragraph-xsmall-letter-spacing)] leading-[var(--paragraph-xsmall-line-height)] whitespace-nowrap [font-style:var(--paragraph-xsmall-font-style)]"
                    style={{ color: textTestimonials[2].titleColor }}
                  >
                    {textTestimonials[2].title}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Left fade gradient overlay */}
          <div className="absolute top-0 left-0 w-[155px] h-full bg-[linear-gradient(270deg,rgba(0,0,0,0)_0%,rgba(10,10,10,1)_100%)] opacity-40 pointer-events-none" />
        </div>
      </div>

      {/* Navigation arrows */}
      <img
        className="absolute top-[558px] right-[150px] w-9 h-9"
        alt="Right"
        src="/right-1.svg"
      />
      <img
        className="absolute top-[558px] left-[150px] w-9 h-9"
        alt="Left"
        src="/right.svg"
      />

      {/* Bottom decorative frame */}
      <img
        className="relative self-stretch w-full"
        alt="Frame"
        src="/frame-2095586047.svg"
      />
    </section>
  );
};
