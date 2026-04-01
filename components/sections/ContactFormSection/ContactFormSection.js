"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const ContactFormSection = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        projectDetails: "",
        budget: "",
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log("Form submitted:", formData);
    };
    return (<section className="flex items-center justify-between px-[150px] py-[100px] relative bg-neutral-950 overflow-hidden">
      {/* Decorative background image */}
      <img className="absolute top-[284px] left-[78px] w-[530px] h-[785px] object-cover pointer-events-none" alt="Mask group" src="/mask-group-2.png"/>

      {/* Left Column: Heading, Subheading, and Features */}
      <div className="flex flex-col w-[714px] items-start gap-11 relative z-10">
        <div className="flex flex-col items-start gap-3 self-stretch w-full relative">
          {/* Badge */}
          <div className="inline-flex items-center justify-center gap-2 px-4 py-2.5 relative rounded-[6000px] overflow-hidden bg-[linear-gradient(180deg,rgba(10,10,10,0.2)_0%,rgba(255,0,0,0.2)_100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[6000px] before:[background:linear-gradient(6deg,rgba(255,140,140,0)_0%,rgba(153,84,84,0.2)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
            <img className="relative w-3 h-3" alt="Vector" src="/vector.svg"/>
            <span className="relative w-fit mt-[-1.00px] font-eye-borrow font-[number:var(--eye-borrow-font-weight)] text-[#ffffff] text-[length:var(--eye-borrow-font-size)] tracking-[var(--eye-borrow-letter-spacing)] leading-[var(--eye-borrow-line-height)] [font-style:var(--eye-borrow-font-style)]">
              Contact us
            </span>
          </div>

          <div className="flex flex-col items-start gap-6 self-stretch w-full relative">
            <h2 className="relative self-stretch mt-[-1.00px] font-h2 font-[number:var(--h2-font-weight)] text-[#ffffff] text-[length:var(--h2-font-size)] tracking-[var(--h2-letter-spacing)] leading-[var(--h2-line-height)] [font-style:var(--h2-font-style)]">
              Let’s build something extraordinary together
            </h2>
            <p className="relative self-stretch font-paragraph-large font-[number:var(--paragraph-large-font-weight)] text-[#c6c6c6] text-[length:var(--paragraph-large-font-size)] tracking-[var(--paragraph-large-letter-spacing)] leading-[var(--paragraph-large-line-height)] [font-style:var(--paragraph-large-font-style)]">
              Ready to scale your business? Fill out the form, and our experts
              will get back to you with a tailored strategy and roadmap.
            </p>
          </div>
        </div>

        {/* Features List */}
        <div className="flex flex-col items-start gap-5 self-stretch w-full relative">
          {/* Feature 1 */}
          <div className="flex items-center gap-5 relative self-stretch w-full">
            <img className="relative w-[34px] h-[34px]" alt="Frame" src="/frame-1321325373-3.svg"/>
            <p className="relative flex-1 mt-[-1.00px] font-h5 font-[number:var(--h5-font-weight)] text-[#ffffff] text-[length:var(--h5-font-size)] tracking-[var(--h5-letter-spacing)] leading-[var(--h5-line-height)] [font-style:var(--h5-font-style)]">
              100% Confidential &amp; NDA Protected
            </p>
          </div>
          {/* Feature 2 */}
          <div className="flex items-center gap-5 relative self-stretch w-full">
            <img className="relative w-[34px] h-[34px]" alt="Frame" src="/frame-1321325373-3.svg"/>
            <p className="relative flex-1 mt-[-1.00px] font-h5 font-[number:var(--h5-font-weight)] text-[#ffffff] text-[length:var(--h5-font-size)] tracking-[var(--h5-letter-spacing)] leading-[var(--h5-line-height)] [font-style:var(--h5-font-style)]">
              Free Technical Consultation
            </p>
          </div>
          {/* Feature 3 */}
          <div className="flex items-center gap-5 relative self-stretch w-full">
            <img className="relative w-[34px] h-[34px]" alt="Frame" src="/frame-1321325373-3.svg"/>
            <p className="relative flex-1 mt-[-1.00px] font-h5 font-[number:var(--h5-font-weight)] text-[#ffffff] text-[length:var(--h5-font-size)] tracking-[var(--h5-letter-spacing)] leading-[var(--h5-line-height)] [font-style:var(--h5-font-style)]">
              Custom Proposals Within 24 Hours
            </p>
          </div>
        </div>
      </div>

      {/* Right Column: Contact Form */}
      <form onSubmit={handleSubmit} className="flex flex-col w-[762px] items-center gap-8 pl-14 pr-16 py-10 relative z-10 bg-[#161616] rounded-[20px] overflow-hidden before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[20px] before:[background:linear-gradient(287deg,rgba(45,45,45,1)_0%,rgba(147,147,147,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
        <h4 className="relative self-stretch mt-[-1.00px] text-center font-h4 font-[number:var(--h4-font-weight)] text-[#ffffff] text-[length:var(--h4-font-size)] tracking-[var(--h4-letter-spacing)] leading-[var(--h4-line-height)] [font-style:var(--h4-font-style)]">
          Fill the details below
        </h4>

        <div className="flex flex-col items-center gap-6 relative self-stretch w-full">
          {/* Name & Email Row */}
          <div className="flex items-center gap-6 relative self-stretch w-full">
            <div className="flex flex-col items-start gap-4 relative flex-1 grow">
              <label className="relative self-stretch mt-[-1.00px] font-paragraph-medium font-[number:var(--paragraph-medium-font-weight)] text-[#ffffff] text-[length:var(--paragraph-medium-font-size)] tracking-[var(--paragraph-medium-letter-spacing)] leading-[var(--paragraph-medium-line-height)] [font-style:var(--paragraph-medium-font-style)]">
                Name
              </label>
              <Input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Eg: John doe" className="h-[60px] text-white border-[#383838] bg-transparent focus-visible:ring-1 focus-visible:ring-[#525252] placeholder:text-[#525252]"/>
            </div>
            <div className="flex flex-col items-start gap-4 relative flex-1 grow">
              <label className="relative self-stretch mt-[-1.00px] font-paragraph-medium font-[number:var(--paragraph-medium-font-weight)] text-[#ffffff] text-[length:var(--paragraph-medium-font-size)] tracking-[var(--paragraph-medium-letter-spacing)] leading-[var(--paragraph-medium-line-height)] [font-style:var(--paragraph-medium-font-style)]">
                Email
              </label>
              <Input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Eg: johndoe@gmail.com" className="h-[60px] text-white border-[#383838] bg-transparent focus-visible:ring-1 focus-visible:ring-[#525252] placeholder:text-[#525252]"/>
            </div>
          </div>

          {/* Phone Number Field */}
          <div className="flex flex-col items-start gap-4 relative self-stretch w-full">
            <label className="relative self-stretch mt-[-1.00px] font-paragraph-medium font-[number:var(--paragraph-medium-font-weight)] text-[#ffffff] text-[length:var(--paragraph-medium-font-size)] tracking-[var(--paragraph-medium-letter-spacing)] leading-[var(--paragraph-medium-line-height)] [font-style:var(--paragraph-medium-font-style)]">
              Phone Number
            </label>
            {/* Using a relative container for the phone input with custom styling to mimic the design */}
            <div className="flex items-center gap-2 px-1 relative self-stretch w-full h-[60px] rounded-md border border-solid border-[#383838] bg-transparent overflow-hidden">
              <div className="inline-flex items-center gap-2 px-3 py-0 relative flex-[0_0_auto]">
                <img className="relative w-7 h-[19px]" alt="United states" src="/united-states.png"/>
                <div className="relative w-fit [font-family:'Inter_Display-Regular',Helvetica] font-normal text-[#d8d8d8] text-base tracking-[0] leading-[26px] whitespace-nowrap">
                  +1
                </div>
                <img className="relative w-4 h-4 ml-1" alt="Down" src="/down.svg"/>
              </div>
              <img className="relative w-px h-6 opacity-30" alt="Line" src="/line-1.svg"/>
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="XXX XXX XXXX" className="flex-1 bg-transparent border-none outline-none text-white pl-3 text-base [font-family:'Inter_Display-Regular',Helvetica] placeholder:text-[#525252]"/>
            </div>
          </div>

          {/* Project Details Field */}
          <div className="flex flex-col items-start gap-4 relative self-stretch w-full">
            <label className="relative self-stretch mt-[-1.00px] font-paragraph-medium font-[number:var(--paragraph-medium-font-weight)] text-[#ffffff] text-[length:var(--paragraph-medium-font-size)] tracking-[var(--paragraph-medium-letter-spacing)] leading-[var(--paragraph-medium-line-height)] [font-style:var(--paragraph-medium-font-style)]">
              Project Details
            </label>
            <Textarea name="projectDetails" value={formData.projectDetails} onChange={handleChange} placeholder="Tell us about your project requirements..." className="h-[148px] resize-none text-white border-[#383838] bg-transparent focus-visible:ring-1 focus-visible:ring-[#525252] placeholder:text-[#525252] pt-4"/>
          </div>

          {/* Budget Dropdown Field (simulated with standard select for now or a custom UI) */}
          <div className="flex flex-col items-start gap-4 relative self-stretch w-full">
            <label className="relative self-stretch mt-[-1.00px] font-paragraph-medium font-[number:var(--paragraph-medium-font-weight)] text-[#ffffff] text-[length:var(--paragraph-medium-font-size)] tracking-[var(--paragraph-medium-letter-spacing)] leading-[var(--paragraph-medium-line-height)] [font-style:var(--paragraph-medium-font-style)]">
              Budget
            </label>
            <div className="flex items-center justify-between px-4 py-3 relative self-stretch w-full h-[60px] rounded-md border border-solid border-[#383838] cursor-pointer">
              <span className={`[font-family:'Inter_Display-Regular',Helvetica] font-normal text-base tracking-[0] leading-[26px] ${formData.budget ? "text-[#d8d8d8]" : "text-[#525252]"}`}>
                {formData.budget || "Select Budget in USD..."}
              </span>
              <img className="relative w-6 h-6" alt="Down" src="/down-1.svg"/>
            </div>
          </div>

          {/* Submit Button */}
          <Button type="submit" className="w-full h-14 bg-white text-black hover:bg-neutral-200 mt-2 rounded-[50px] [font-family:'Inter_Display-Medium',Helvetica] font-medium text-[lg]">
            Send my details
          </Button>
        </div>
      </form>
    </section>);
};
