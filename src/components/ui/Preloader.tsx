"use client";
import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Preloader = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const percentRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format: HH:MM:SS AM/PM
      const timeString = now.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });
      setTime(timeString);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useGSAP(
    () => {
      const tl = gsap.timeline();

      // Counter and Bar Animation
      const duration = 2.5; // Total loading time

      // Animate the line width from 0% to 100%
      tl.to(
        barRef.current,
        {
          scaleX: 1,
          duration: duration,
          ease: "power2.inOut",
        },
        0
      );

      // Animate the percentage counter
      // We use a proxy object to animate the value
      const counter = { val: 0 };
      tl.to(
        counter,
        {
          val: 100,
          duration: duration,
          ease: "power2.inOut",
          onUpdate: () => {
            if (percentRef.current) {
              percentRef.current.innerText = `${Math.floor(counter.val)}%`;
            }
          },
        },
        0
      );

      // Exit Animation
      tl.to(containerRef.current, {
        y: "-100%",
        duration: 1,
        ease: "power4.inOut",
        delay: 0.2, // Short pause at 100%
      });
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9990] flex flex-col items-center justify-between bg-[#111111] px-4 py-6 md:px-12 md:py-10 text-[#f4f4f4] overflow-hidden"
    >
      {/* Top Bar */}
      <div className="flex w-full justify-between items-start text-[10px] md:text-sm font-semibold tracking-wider uppercase opacity-80">
        <span>Full Stack Developer</span>
        <div className="text-right">
          <div>India</div>
          <div>{time}</div>
        </div>
      </div>

      {/* Center/Main Content */}
      <div className="flex-1 flex flex-col md:flex-row items-center w-full justify-between">
        <div className="w-full md:w-1/2 flex items-center pr-10">
          <div
            ref={barRef}
            className="w-full h-[2px] bg-[#333333] origin-left scale-x-0"
          ></div>
        </div>
        
        <div className="w-full md:w-1/2 flex justify-end items-center">
             <div
            ref={percentRef}
            className="text-[15vw] md:text-[12vw] leading-none font-medium tabular-nums"
          >
            0%
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
