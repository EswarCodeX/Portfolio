"use client";
import React from "react";

const Experience = () => {
  return (
    <section className="w-full bg-[#111111] text-[#f4f4f4] py-20 md:py-32 px-4 md:px-12 font-man">
      <div className="mx-0 sm:mx-5 md:mx-20 grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 lg:gap-24">
        
        {/* Left Column: Headline */}
        <div className="flex flex-col justify-start max-w-xl">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-[1.1] tracking-tight text-[#f4f4f4]/80 hoverable">
            I craft websites <br />
            with a <span className="font-serif italic font-medium text-[#f4f4f4]">great attention</span> to details.
          </h2>
        </div>

        {/* Right Column: Bio & Experience */}
        <div className="flex flex-col justify-between pt-8 lg:pt-2">
          
          {/* Bio & Tech */}
          <div className="mb-12 md:mb-16 lg:mb-24 space-y-6 md:space-y-8 max-w-xl">
            <p className="text-base sm:text-lg md:text-xl leading-relaxed opacity-90">
              I have experience in full-stack development, specializing in the MERN stack.
              I love working on scalable UI components, smooth animations, and optimizing data flow.
            </p>
            
            <p className="text-base sm:text-lg md:text-xl leading-relaxed opacity-90">
              Technologies I commonly use: React, Next.js, TypeScript, Node.js, MongoDB, Figma, TailwindCSS.
            </p>
          </div>

          {/* Experience List */}
          <div className="w-full">
            {/* List Item 1 */}
            <div className="border-t border-[#333333] hover:border-black cursor-none transition-colors py-6 flex justify-between items-center text-base md:text-lg font-medium group hoverable">
              <span className="w-1/3 group-hover:pl-2 transition-all duration-300">Xplocode Infotech</span>
              <span className="opacity-60">Full Stack Intern</span>
              <span className="w-1/3 text-right">2025</span>
            </div>
            
            {/* Divider */}
            <div className="border-t border-[#333333]" />

            {/* Placeholder for more (using Freelance/Projects based on typical portfolio structure if user only has 1 job) */}
            {/* <div className="border-b border-[#333333] transition-colors py-6 flex justify-between items-center text-base md:text-lg font-medium group cursor-none hoverable hover:bg-black/5">
                <span className="w-1/3 group-hover:pl-2 transition-all duration-300">Freelance</span>
                <span className="opacity-60">Web Developer</span>
                <span className="w-1/3 text-right">Today</span>
            </div> */}

          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;