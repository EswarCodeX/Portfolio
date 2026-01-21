"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";
// import { Typewriter } from "react-simple-typewriter";
import { useSmoothScroll } from "../context/SmoothScrollContext";

export default function Body() {
  const [, setActiveSection] = useState("home");
  const { darkMode } = useTheme();
  const lenis = useSmoothScroll();

  const scrollToSection = (sectionId: string) => {
    // If lenis is available, use it for smoother scroll
    if (lenis) {
      lenis.scrollTo(`#${sectionId}`);
      setActiveSection(sectionId);
    } else {
      // Fallback
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
        setActiveSection(sectionId);
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "project", "about", "contact"];
      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-[#111111] text-[#f4f4f4] "
    >
      {/* Top-left Name */}
      <div className="absolute hoverable font-light top-8 left-8 md:top-12 md:left-12 text-base md:text-5xl tracking-wide font-man">
        Eswar Karthik
      </div>

      {/* Big Center Text */}
      <h1 className="font-bold text-[40px] sm:text-[80px] md:text-[120px] lg:text-[160px] leading-[0.9] absolute left-6 sm:left-8 md:left-12 top-1/2 -translate-y-1/2 ">
        FULLSTACK
        <br />
        <span className="ml-8 sm:ml-10">DEVELOPER</span>
      </h1>

      {/* Bottom-left scroll indicator */}
      <div
        onClick={() => scrollToSection("project")}
        className="left-8 md:left-12 bottom-8 md:bottom-12  absolute flex h-28 w-28 items-center justify-center "
      >
        {/* 1. SEPARATE: The Text Ring (Spinning) */}
        <div className="absolute inset-0 animate-[spin_8s_linear_infinite]">
          <svg
            className="h-full w-full"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <path
                id="circlePath"
                d="M 50, 50 m -37, 0 a 37,37 0 1,1 74, 0 a 37,37 0 1,1 -74, 0"
              />
            </defs>
            <text
              fill="white"
              fontSize="12"
              fontWeight="bold"
              letterSpacing="0.1em"
            >
              <textPath href="#circlePath" startOffset="0%">
                SCROLL DOWN • SCROLL DOWN •
              </textPath>
            </text>
          </svg>
        </div>

        {/* 2. SEPARATE: The Center Image/Icon (Static) */}
        {/* 'inset-0' and 'flex' joins it perfectly to the center of the relative parent */}
        <div className="absolute inset-0 flex items-center justify-center animate-[spin_8s_linear_reverse_infinite]">
          <span className="text-4xl text-white">*</span>
        </div>
      </div>

      {/* Right-side Honors label */}
      {/* Right-side Honors label (Desktop) / Top-right (Mobile) */}
      <div
        className="absolute bg-white flex items-center justify-center hoverable
                   /* Mobile Styles */
                   top-28 right-[-30px] rounded-b-lg h-10 w-28 gap-2
                   /* Desktop Styles */
                   md:top-1/2 md:right-[-50px] md:h-12 md:w-40 md:gap-8  md:origin-center transform-[translateY(-50%)_rotate(90deg)] "
      >
        <p
          className="text-black font-bold tracking-widest
                     /* Mobile */
                     text-xs
                     /* Desktop */
                     md:text-base md:transform-[rotate(270deg)]"
        >
          mrE.
        </p>
        <p className="tracking-widest text-black font-medium text-[10px] md:text-sm">
          Resume
        </p>
      </div>

      {/* Bottom-right status */}
      <div className="absolute bottom-8 md:bottom-32 right-8 md:right-12 text-right ">
        <div className="flex items-center gap-2 justify-end mb-1">
          <span className="text-sm md:text-4xl">
            OPEN TO WORK
          </span>
          <span className="text-4xl animate-[spin_5s_linear_infinite]">✱</span>
        </div>
        {/* <div className="text-[10px] md:text-xs opacity-80">Based in France</div> */}
      </div>
    </div>
  );
}
