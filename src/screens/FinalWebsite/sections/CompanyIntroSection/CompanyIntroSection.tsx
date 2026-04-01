export const CompanyIntroSection = (): JSX.Element => {
  // Row 1 logos data
  const row1Logos = [
    {
      width: "w-[102.38px]",
      height: "h-[33.66px]",
      logomark: {
        src: "/logomark-13.svg",
        className: "w-[30.14%] top-[4.17%] left-0 absolute h-[91.67%]",
      },
      logotype: {
        src: "/logotype-9.svg",
        className: "absolute w-[61.06%] h-[56.41%] top-[29.69%] left-[38.86%]",
      },
      customMark: null,
    },
    {
      width: "w-[118.51px]",
      height: "h-[33.66px]",
      logomark: {
        src: "/logomark-4.svg",
        className: "absolute w-[17.16%] h-full top-0 left-0",
      },
      logotype: {
        src: "/logotype-6.svg",
        className: "absolute w-[74.65%] h-[56.76%] top-[25.80%] left-[24.84%]",
      },
      customMark: null,
    },
    {
      width: "w-[115.71px]",
      height: "h-[33.66px]",
      logomark: {
        src: "/logomark-14.svg",
        className: "w-[26.67%] top-[4.17%] left-0 absolute h-[91.67%]",
      },
      logotype: {
        src: "/logotype-10.svg",
        className: "absolute w-[65.10%] h-[57.94%] top-[25.65%] left-[34.56%]",
      },
      customMark: null,
    },
    {
      width: "w-[112.2px]",
      height: "h-[33.66px]",
      logomark: {
        src: "/logomark-10.svg",
        className: "w-[27.50%] top-[4.17%] left-0 absolute h-[91.67%]",
      },
      logotype: {
        src: "/logotype-12.svg",
        className: "absolute w-[63.82%] h-[55.60%] top-[27.83%] left-[35.93%]",
      },
      customMark: null,
    },
    {
      width: "w-[116.41px]",
      height: "h-[33.66px]",
      logomark: null,
      logotype: {
        src: "/logotype-11.svg",
        className: "absolute w-[66.81%] h-[57.94%] top-[25.65%] left-[32.97%]",
      },
      customMark: "purple",
    },
  ];

  // Row 2 logos data
  const row2Logos = [
    {
      width: "w-[122.72px]",
      height: "h-[33.66px]",
      logomark: {
        src: "/logomark-5.svg",
        className: "w-[25.14%] top-[4.17%] left-0 absolute h-[91.67%]",
      },
      logotype: {
        src: "/logotype-2.svg",
        className: "absolute w-[68.90%] h-[45.69%] top-[25.65%] left-[30.83%]",
      },
      customMark: null,
    },
    {
      width: "w-[139.55px]",
      height: "h-[33.66px]",
      logomark: {
        src: "/logomark-6.svg",
        className: "w-[22.11%] top-[4.17%] left-0 absolute h-[91.67%]",
      },
      logotype: {
        src: "/logotype-4.svg",
        className: "absolute w-[70.76%] h-[43.05%] top-[28.35%] left-[29.07%]",
      },
      customMark: null,
    },
    {
      width: "w-[124.82px]",
      height: "h-[33.66px]",
      logomark: null,
      logotype: {
        src: "/logotype-1.svg",
        className: "absolute w-[70.65%] h-[58.45%] top-[27.48%] left-[29.17%]",
      },
      customMark: "blue",
    },
    {
      width: "w-[141.65px]",
      height: "h-[33.66px]",
      logomark: {
        src: "/logomark-12.svg",
        className: "w-[21.78%] top-[4.17%] left-0 absolute h-[91.67%]",
      },
      logotype: {
        src: "/logotype-3.svg",
        className: "absolute w-[73.81%] h-[58.25%] top-[26.14%] left-[26.08%]",
      },
      customMark: null,
    },
    {
      width: "w-[124.12px]",
      height: "h-[33.66px]",
      logomark: {
        src: "/logomark-1.svg",
        className: "w-[24.86%] top-[4.17%] left-0 absolute h-[91.67%]",
      },
      logotype: {
        src: "/logotype-15.svg",
        className: "absolute w-[68.63%] h-[55.60%] top-[27.64%] left-[31.14%]",
      },
      customMark: null,
    },
    {
      width: "w-[138.85px]",
      height: "h-[33.66px]",
      logomark: {
        src: "/logomark-8.svg",
        className: "w-[22.22%] top-[4.17%] left-0 absolute h-[91.67%]",
      },
      logotype: {
        src: "/logotype-13.svg",
        className: "absolute w-[72.68%] h-[42.41%] top-[29.18%] left-[27.24%]",
      },
      customMark: null,
    },
  ];

  // Row 3 logos data
  const row3Logos = [
    {
      width: "w-[125.52px]",
      height: "h-[33.66px]",
      logomark: {
        src: "/logomark-15.svg",
        className: "w-[24.58%] top-[4.17%] left-0 absolute h-[91.67%]",
      },
      logotype: {
        src: "/logotype-14.svg",
        className: "absolute w-[67.99%] h-[45.45%] top-[25.80%] left-[31.65%]",
      },
      customMark: null,
    },
    {
      width: "w-[117.11px]",
      height: "h-[33.66px]",
      logomark: {
        src: "/logomark-3.svg",
        className: "w-[22.75%] top-[4.17%] left-0 absolute h-[91.67%]",
      },
      logotype: {
        src: "/logotype-7.svg",
        className: "absolute w-[69.48%] h-[60.52%] top-[25.59%] left-[30.35%]",
      },
      customMark: null,
    },
    {
      width: "w-[138.15px]",
      height: "h-[33.66px]",
      logomark: {
        src: "/logomark-16.svg",
        className: "w-[22.34%] top-[4.17%] left-0 absolute h-[91.67%]",
      },
      logotype: {
        src: "/logotype-17.svg",
        className: "absolute w-[72.87%] h-[45.69%] top-[25.65%] left-[26.91%]",
      },
      customMark: null,
    },
    {
      width: "w-[151.47px]",
      height: "h-[33.66px]",
      logomark: {
        src: "/logomark-11.svg",
        className: "w-[16.67%] top-[4.17%] left-0 absolute h-[91.67%]",
      },
      logotype: {
        src: "/logotype-16.svg",
        className: "absolute w-[76.72%] h-[42.29%] top-[29.13%] left-[22.92%]",
      },
      customMark: null,
    },
    {
      width: "w-[136.04px]",
      height: "h-[33.66px]",
      logomark: {
        src: "/logomark.svg",
        className: "w-[20.10%] top-[4.17%] left-0 absolute h-[91.67%]",
      },
      logotype: {
        src: "/logotype.svg",
        className: "absolute w-[72.58%] h-[59.09%] top-[27.67%] left-[27.28%]",
      },
      customMark: null,
    },
  ];

  return (
    <section className="flex flex-col w-full items-center justify-center gap-[60px] px-[150px] py-[60px] bg-neutral-950">
      {/* Header: "Trusted by 350+ clients worldwide" with decorative lines */}
      <div className="flex items-center justify-center gap-6 self-stretch w-full">
        <img className="w-20 h-px" alt="Line" src="/line-10.svg" />

        <p className="w-fit mt-[-1.00px] [font-family:'Inter_Display-Medium',Helvetica] font-medium text-transparent text-2xl tracking-[0] leading-[normal]">
          <span className="text-[#f0f0f0]">Trusted by </span>
          <span className="text-[#909090]">350+</span>
          <span className="text-[#f0f0f0]"> clients worldwide</span>
        </p>

        <img className="w-20 h-px" alt="Line" src="/line-10.svg" />
      </div>

      {/* Logo grid */}
      <div className="flex items-center justify-center relative self-stretch w-full">
        <div className="flex flex-col items-center gap-[23px]">
          {/* Row 1 - 5 logos */}
          <div className="inline-flex items-start gap-12">
            {row1Logos.map((logo, index) => (
              <div
                key={`row1-${index}`}
                className={`relative ${logo.width} ${logo.height}`}
              >
                {/* Custom purple mark for the 5th logo in row 1 */}
                {logo.customMark === "purple" && (
                  <div className="w-[26.51%] top-[4.17%] left-0 rounded-[15.43px] border-[2.1px] border-solid border-[#6826da] absolute h-[91.67%]">
                    <div className="absolute w-[59.09%] h-full top-0 left-[20.45%] rounded-[9.12px/15.43px] border-[2.1px] border-solid border-[#6826da] rotate-45" />
                    <div className="absolute w-[59.09%] h-full top-0 left-[20.45%] rounded-[9.12px/15.43px] border-[2.1px] border-solid border-[#6826da] -rotate-45" />
                  </div>
                )}
                {/* Standard logomark image */}
                {logo.logomark && (
                  <img
                    className={logo.logomark.className}
                    alt="Logomark"
                    src={logo.logomark.src}
                  />
                )}
                {/* Logotype image */}
                {logo.logotype && (
                  <img
                    className={logo.logotype.className}
                    alt="Logotype"
                    src={logo.logotype.src}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Row 2 - 6 logos (wider row) */}
          <div className="flex w-[1417.9px] items-center justify-center gap-12">
            {row2Logos.map((logo, index) => (
              <div
                key={`row2-${index}`}
                className={`relative ${logo.width} ${logo.height}`}
              >
                {/* Custom blue mark for the 3rd logo in row 2 */}
                {logo.customMark === "blue" && (
                  <div className="w-[22.47%] top-[4.17%] left-0 absolute h-[91.67%]">
                    <div className="relative h-[90.91%] top-[4.55%] rounded-[14.03px] border-[4.21px] border-solid border-[#155dee]" />
                  </div>
                )}
                {/* Standard logomark image */}
                {logo.logomark && (
                  <img
                    className={logo.logomark.className}
                    alt="Logomark"
                    src={logo.logomark.src}
                  />
                )}
                {/* Logotype image */}
                {logo.logotype && (
                  <img
                    className={logo.logotype.className}
                    alt="Logotype"
                    src={logo.logotype.src}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Row 3 - 5 logos */}
          <div className="inline-flex items-center gap-12">
            {row3Logos.map((logo, index) => (
              <div
                key={`row3-${index}`}
                className={`relative ${logo.width} ${logo.height}`}
              >
                {/* Standard logomark image */}
                {logo.logomark && (
                  <img
                    className={logo.logomark.className}
                    alt="Logomark"
                    src={logo.logomark.src}
                  />
                )}
                {/* Logotype image */}
                {logo.logotype && (
                  <img
                    className={logo.logotype.className}
                    alt="Logotype"
                    src={logo.logotype.src}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
