import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, } from "@/components/ui/navigation-menu";
// Navigation links data
const navLinks = [
    { label: "About us" },
    { label: "Services" },
    { label: "Industries" },
    { label: "Blogs" },
    { label: "Career" },
];
export const HeroShowcaseSection = () => {
    return (<div className="relative w-full min-h-[935px] bg-black overflow-hidden">
      {/* Red shade background image - right side */}
      <div className="absolute top-[calc(50%_-_346px)] right-[-200px] w-[1415px] h-[796px] flex pointer-events-none">
        <img className="flex-1 object-cover" alt="Final loop red shade" src="/final-loop---red-shade.png"/>
      </div>

      {/* Bottom left glow effect */}
      <div className="absolute top-[809px] left-0 w-[855px] h-[383px] bg-[#470511b2] blur-[200px] pointer-events-none"/>

      {/* Mask overlay */}
      <img className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none" alt="Mask group" src="/mask-group.png"/>

      {/* Header / Navigation */}
      <header className="flex w-full items-center justify-between px-40 py-5 relative z-10 bg-transparent backdrop-blur-[10px] backdrop-brightness-100">
        {/* Logo */}
        <div className="flex w-[420px] items-center gap-2.5">
          <img className="w-[168.96px] h-[50px]" alt="Logo" src="/logo.svg"/>
        </div>

        {/* Nav links */}
        <NavigationMenu>
          <NavigationMenuList className="flex items-center gap-[27px]">
            {navLinks.map((link) => (<NavigationMenuItem key={link.label}>
                <NavigationMenuLink className="flex items-center [font-family:'Inter_Display-Medium',Helvetica] font-medium text-[#ffffff] text-xl tracking-[-0.40px] leading-[26px] whitespace-nowrap cursor-pointer bg-transparent hover:bg-transparent focus:bg-transparent">
                  {link.label}
                </NavigationMenuLink>
              </NavigationMenuItem>))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Right side: Case Studies + View Our Work button */}
        <div className="flex w-[420px] items-center justify-between">
          {/* Case Studies link */}
          <div className="inline-flex items-start gap-1">
            <span className="[font-family:'Inter_Display-Medium',Helvetica] font-medium text-[#ffffff] text-xl tracking-[-0.40px] leading-[26px] whitespace-nowrap cursor-pointer">
              Case Studies
            </span>
            <span className="opacity-50 [font-family:'Inter_Display-Medium',Helvetica] font-medium text-[#ffffff] text-xl tracking-[-0.40px] leading-[26px] whitespace-nowrap">
              (11)
            </span>
          </div>

          {/* View Our Work button */}
          <div className="relative w-[244px] h-[74px] bg-[#00000033] rounded-[63.78px] overflow-hidden cursor-pointer">
            <div className="inline-flex flex-col h-[26px] items-center gap-2.5 absolute top-6 left-7 overflow-hidden">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Inter_Display-Medium',Helvetica] font-medium text-[#ffffff] text-xl tracking-[-0.20px] leading-[26px] whitespace-nowrap">
                View Our Work
              </div>
              <div className="relative w-fit [font-family:'Inter_Display-Medium',Helvetica] font-medium text-[#dc3434] text-xl tracking-[-0.20px] leading-[26px] whitespace-nowrap">
                View Our Work
              </div>
            </div>
            <div className="absolute top-[calc(50%_-_1px)] left-[calc(50%_+_58px)] w-0.5 h-0.5 rounded-[0.86px] bg-[linear-gradient(180deg,rgba(210,48,48,1)_0%,rgba(98,0,0,1)_100%)]"/>
            <img className="absolute top-3 left-[183px] w-[50px] h-[50px]" alt="Frame" src="/frame-1321325373.svg"/>
          </div>
        </div>
      </header>

      {/* Hero content */}
      <div className="flex flex-col w-[762px] items-start gap-[60px] absolute top-[236px] left-[150px] z-10">
        <div className="flex flex-col items-start gap-4 self-stretch w-full">
          {/* Top Leading Agency badge */}
          <div className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-[6000px] overflow-hidden border-none bg-[linear-gradient(180deg,rgba(72,72,72,0.2)_0%,rgba(255,0,0,0.2)_100%)] relative before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[6000px] before:[background:linear-gradient(6deg,rgba(255,140,140,0)_0%,rgba(153,84,84,0.2)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
            <img className="w-3 h-3" alt="Vector" src="/vector.svg"/>
            <span className="font-eye-borrow font-[number:var(--eye-borrow-font-weight)] text-[#ffffff] text-[length:var(--eye-borrow-font-size)] tracking-[var(--eye-borrow-letter-spacing)] leading-[var(--eye-borrow-line-height)] [font-style:var(--eye-borrow-font-style)]">
              Top Leading Agency
            </span>
          </div>

          <div className="flex flex-col items-start gap-8 self-stretch w-full">
            {/* Main headline */}
            <h1 className="self-stretch mt-[-1.00px] bg-[linear-gradient(227deg,rgba(255,0,0,1)_0%,rgba(255,255,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-h1 font-[number:var(--h1-font-weight)] text-transparent text-[length:var(--h1-font-size)] tracking-[var(--h1-letter-spacing)] leading-[var(--h1-line-height)] [font-style:var(--h1-font-style)]">
              Building Scalable Software, Intelligent AI &amp; High-Impact
              Digital Products
            </h1>

            {/* Subtitle */}
            <p className="self-stretch font-paragraph-large font-[number:var(--paragraph-large-font-weight)] text-[#c6c6c6] text-[length:var(--paragraph-large-font-size)] tracking-[var(--paragraph-large-letter-spacing)] leading-[var(--paragraph-large-line-height)] [font-style:var(--paragraph-large-font-style)]">
              We help startups, enterprises, and growing brands design, build,
              and scale mobile apps, SaaS platforms, AI agents, and custom
              software that drive real business results.
            </p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="inline-flex items-center gap-3">
          {/* Request a Quote button */}
          <div className="relative w-[279px] h-[74px] bg-[#a1a1a142] rounded-[63.78px] overflow-hidden cursor-pointer">
            <div className="top-[calc(50%_-_1px)] left-[calc(50%_+_45px)] w-0.5 h-0.5 rounded-[0.86px] absolute bg-[linear-gradient(180deg,rgba(210,48,48,1)_0%,rgba(98,0,0,1)_100%)]"/>
            <div className="inline-flex flex-col h-[26px] items-center gap-2.5 absolute top-6 left-[39px] overflow-hidden">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Inter_Display-Medium',Helvetica] font-medium text-[#ffffff] text-xl tracking-[-0.20px] leading-[26px] whitespace-nowrap">
                Request a Quote
              </div>
              <div className="relative w-fit [font-family:'Inter_Display-Medium',Helvetica] font-medium text-[#ffffff] text-xl tracking-[-0.20px] leading-[26px] whitespace-nowrap">
                Request a Quote
              </div>
            </div>
            <img className="absolute top-3 left-[213px] w-[50px] h-[50px]" alt="Frame" src="/frame-1321325373.svg"/>
          </div>

          {/* See Our Work button */}
          <Button variant="ghost" className="h-auto inline-flex items-center justify-center gap-2 px-3 py-[18px] rounded-[60px] [font-family:'Inter_Display-Medium',Helvetica] font-medium text-[#ffffff] text-lg tracking-[-0.18px] leading-normal hover:bg-transparent hover:text-[#ffffff]">
            See Our Work
          </Button>
        </div>
      </div>
    </div>);
};
