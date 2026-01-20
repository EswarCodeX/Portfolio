"use client";
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Experience = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll for a smooth transition as the section passes the center
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Wiping the text from 45% of the scroll to 55%
  const xWipe = useTransform(scrollYProgress, [0.45, 0.55], ["inset(0 100% 0 0)", "inset(0 0% 0 0)"]);
  
  // Ball and line movement - specifically timed to the content presence
  const ballMove = useTransform(scrollYProgress, [0.4, 0.6], ["0%", "100%"]);
  const lineScale = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);

  return (
    <section 
      ref={containerRef} 
      className="relative h-[80vh] w-full bg-[#111111] flex items-center overflow-hidden"
    >
      {/* 1. THE MASSIVE BACKGROUND TITLE */}
      <div className="absolute left-[-5%] md:left-[5%] flex items-center pointer-events-none">
        <div className="relative">
          {/* Base Gray Text (Deep dark gray to blend with bg) */}
          <h2 className="text-[7vw] font-bold text-[#383838] uppercase tracking-tighter leading-none">
            EXPERIENCE
          </h2>
          {/* Animated White Reveal Layer */}
          <motion.h2 
            style={{ clipPath: xWipe }}
            className="absolute inset-0 text-[7vw] font-bold text-white uppercase tracking-tighter leading-none"
          >
            EXPERIENCE
          </motion.h2>
        </div>
      </div>

      {/* 2. THE CONTENT LAYER (Shifted right) */}
      <div className="relative z-10 w-full flex justify-end px-[5%] md:px-[10%]">
        <div className="flex gap-12 md:gap-24 items-start max-w-4xl">
          
          {/* Vertical Timeline - Minimalist */}
          <div className="relative h-[300px] w-[1px] bg-white/10 mt-4">
            <motion.div 
              style={{ scaleY: lineScale }}
              className="absolute top-0 left-0 w-full bg-white origin-top shadow-[0_0_15px_rgba(59,130,246,0.5)]"
            />
            <motion.div 
              style={{ top: ballMove }}
              className="absolute -left-[5px] w-[11px] h-[11px] rounded-full bg-white shadow-[0_0_20px_#3b82f6]"
            />
          </div>

          {/* Text Content */}
          <div className="flex flex-col space-y-6">
            <header className="space-y-2">
              <span className="text-blue-500 font-mono text-sm tracking-[0.3em] uppercase opacity-80">
                Jun 2025 — Oct 2025
              </span>
              <h3 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
                Xplocode Infotech
              </h3>
            </header>

            <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-xl font-light">
              Developed full-stack features using the MERN stack, delivering 
              scalable UI and backend components. Specialized in optimizing 
              data flow and high-fidelity React interfaces.
            </p>

            {/* Tags with the specific border/bg style from your image */}
            <div className="flex flex-wrap gap-3 pt-4">
              {['REACT', 'NEXT.JS', 'NODE.JS', 'MONGODB'].map((tech) => (
                <span 
                  key={tech} 
                  className="px-4 py-1.5 rounded-sm bg-[#0a0a0a] border border-white/10 text-[10px] text-gray-500 tracking-widest font-bold hover:border-blue-500/50 transition-colors cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>


    </section>
  );
};

export default Experience;