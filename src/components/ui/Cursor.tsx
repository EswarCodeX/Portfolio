"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Cursor() {
  const [isContactHover, setIsContactHover] = useState(false);

  useEffect(() => {
    const dot = document.getElementById("cursor-dot");
    const outline = document.getElementById("cursor-outline");
    const hoverText = document.getElementById("cursor-text");

    if (!dot || !outline || !hoverText) return;

    let outlineX = 0;
    let outlineY = 0;
    let rafId: number | null = null;
    let isHovering = false;

    const speed = 0.15;

    const moveCursor = (e: MouseEvent) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      dot.style.left = mouseX + "px";
      dot.style.top = mouseY + "px";

      const animate = () => {
        outlineX += (mouseX - outlineX) * speed;
        outlineY += (mouseY - outlineY) * speed;

        outline.style.left = outlineX + "px";
        outline.style.top = outlineY + "px";
        hoverText.style.left = outlineX + "px";
        hoverText.style.top = outlineY + "px";

        if (
          Math.abs(mouseX - outlineX) > 0.5 ||
          Math.abs(mouseY - outlineY) > 0.5
        ) {
          rafId = requestAnimationFrame(animate);
        }
      };

      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(animate);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Check for contact-hover class
      const isContactCard = 
        target.classList.contains("contact-hover") ||
        target.closest(".contact-hover");
      
      if (isContactCard) {
        setIsContactHover(true);
        return;
      }
      
      const isInteractive =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.classList.contains("hoverable") ||
        target.closest(".hoverable");

      if (isInteractive && !isHovering) {
        isHovering = true;
        dot.classList.add("scale-150");
        outline.classList.add("scale-150", "bg-white", "mix-blend-difference");
        hoverText.classList.remove("opacity-0");
        hoverText.classList.add("opacity-100");
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Check for contact-hover class
      const isContactCard = 
        target.classList.contains("contact-hover") ||
        target.closest(".contact-hover");
      
      if (isContactCard) {
        setIsContactHover(false);
        return;
      }
      
      const isInteractive =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.classList.contains("hoverable") ||
        target.closest(".hoverable");

      if (isInteractive && isHovering) {
        isHovering = false;
        dot.classList.remove("scale-150");
        outline.classList.remove("scale-150", "bg-white", "mix-blend-difference");
        hoverText.classList.add("opacity-0");
        hoverText.classList.remove("opacity-100");
      }
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      {/* Regular cursor dot */}
      <motion.div
        id="cursor-dot"
        className="fixed w-2 h-2 bg-[#181717] border rounded-full pointer-events-none z-[9999]"
        style={{ transform: "translate(-50%, -50%)" }}
        animate={{
          width: isContactHover ? 128 : 8,
          height: isContactHover ? 128 : 8,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 25,
        }}
      >
        {/* Arrow icon appears when hovering contact cards */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center text-white"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: isContactHover ? 1 : 0,
            scale: isContactHover ? 1 : 0.5,
          }}
          transition={{
            duration: 0.3,
            delay: isContactHover ? 0.1 : 0,
          }}
        >
          <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>
        </motion.div>
      </motion.div>

      {/* Cursor outline */}
      <motion.div
        id="cursor-outline"
        className="fixed w-12 h-12 border-2 border-white rounded-full pointer-events-none z-[9998] transition-all duration-300 ease-out"
        style={{ transform: "translate(-50%, -50%)" }}
        animate={{
          opacity: isContactHover ? 0 : 1,
        }}
        transition={{
          duration: 0.3,
        }}
      />

      {/* Cursor text */}
      <div
        id="cursor-text"
        className="fixed opacity-0 text-[10px] font-bold text-white pointer-events-none z-[10000] transition-opacity duration-300"
        style={{ transform: "translate(-50%, -50%)" }}
      ></div>
    </>
  );
}