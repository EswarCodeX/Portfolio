"use client";
import React, { useState, useEffect } from "react";
import { motion, useSpring, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import items from "../data/items";

export default function Project() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // 1. Core Position Values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // 2. Side Offset (animates the image from right to left of cursor)
  const sideOffset = useMotionValue(350); 

  // 3. Spring Configurations
  // We use a slightly higher stiffness and lower damping for the follow-effect 
  // to ensure it feels responsive but still liquid.
  const springConfig = { damping: 20, stiffness: 150 };
  const offsetConfig = { damping: 30, stiffness: 60 }; // Slower swing for side-switching

  const imageX = useSpring(mouseX, springConfig);
  const imageY = useSpring(mouseY, springConfig);
  const smoothOffset = useSpring(sideOffset, offsetConfig);

  // 4. Transform: This creates the smooth travel logic
  const finalX = useTransform(
    [imageX, smoothOffset], 
    ([x, offset]) => (x as number) + (offset as number)
  );

  // 5. Velocity Tilt (Optional high-end polish)
  const rotate = useTransform(mouseX, (value) => {
    const previous = mouseX.getPrevious() || value;
    const delta = value - previous;
    return delta * 0.1; 
  });

  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      // Direct set for motion values (avoids React re-render cycle for position)
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      const windowWidth = window.innerWidth;
      const mousePercentage = e.clientX / windowWidth;

      // Threshold for switching sides (60% of screen)
      if (mousePercentage > 0.6) {
        sideOffset.set(-350);
      } else {
        sideOffset.set(350);
      }
    };

    window.addEventListener("mousemove", handleGlobalMouseMove);
    return () => window.removeEventListener("mousemove", handleGlobalMouseMove);
  }, [mouseX, mouseY, sideOffset]);

  return (
    <section id="project" className="bg-[#111111] text-white py-20 min-h-screen overflow-hidden">
      <div className="mx-auto px-5 md:px-20">
        <div className="flex items-center gap-4 mb-14 md:mb-20">
          <span className="text-2xl text-white animate-[spin_8s_linear_infinite]">✱</span>
          <h2 className=" tracking-[0.4em] uppercase opacity-50 font-medium text-sm md:text-base">Selected Works</h2>
        </div>

        <div className="flex flex-col border-t border-white/10">
          {items.map((item, index) => (
            <Link 
              key={index} 
              href={`/projects/${item.id}`}
              className="block"
            >
              <div
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative flex items-center justify-between py-12 md:py-20 border-b border-white/10 cursor-none"
              >
                <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter transition-all duration-500 group-hover:pl-10 uppercase z-10">
                  {item.title}
                </h3>
                <span className="text-lg font-mono opacity-20 uppercase tracking-widest group-hover:opacity-100 transition-opacity">
                  {"0" + (index + 1)}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* FLOATING IMAGE CONTAINER */}
      <motion.div
        style={{
          left: finalX,
          top: imageY,
          x: "-50%",
          y: "-50%",
          rotate: rotate,
        }}
        className="fixed pointer-events-none z-[100]"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ 
          scale: hoveredIndex !== null ? 1 : 0, 
          opacity: hoveredIndex !== null ? 1 : 0 
        }}
        transition={{ 
          type: "spring", 
          stiffness: 200, 
          damping: 25 
        }}
      >
        <div className="relative w-[300px] h-[200px] md:w-[600px] md:h-[400px] overflow-hidden rounded-xl shadow-[0_40px_100px_rgba(0,0,0,0.9)] border border-white/10">
          {items.map((item, index) => (
            <motion.div
              key={index}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <Image 
                src={item.image} 
                alt={item.title} 
                fill 
                className="object-cover scale-100" 
                priority
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}