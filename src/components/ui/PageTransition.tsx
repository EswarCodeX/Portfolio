"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PageTransition() {
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const handleTransitionStart = () => {
      setIsTransitioning(true);
      
      // Reset cursor to default state
      const dot = document.getElementById("cursor-dot");
      const outline = document.getElementById("cursor-outline");
      const hoverText = document.getElementById("cursor-text");
      
      if (dot) {
        dot.classList.remove("scale-150");
      }
      if (outline) {
        outline.classList.remove("scale-150", "bg-white", "mix-blend-difference");
      }
      if (hoverText) {
        hoverText.classList.add("opacity-0");
        hoverText.classList.remove("opacity-100");
      }

      // Auto-hide after both animations complete (0.5s up + 0.5s out = 1s total)
      setTimeout(() => {
        setIsTransitioning(false);
      }, 1000);
    };

    window.addEventListener("pageTransitionStart", handleTransitionStart);
    
    return () => {
      window.removeEventListener("pageTransitionStart", handleTransitionStart);
    };
  }, []);

  return (
    <AnimatePresence>
      {isTransitioning && (
        <motion.div
          initial={{ y: "100%" }}
          animate={{ 
            y: [
              "100%",  // Start: below screen
              "0%",    // Middle: covers screen (at 0.5s)
              "-100%"  // End: above screen (at 1s)
            ]
          }}
          transition={{
            duration: 1,
            times: [0, 0.5, 1], // First half: slide up to cover, second half: slide up to reveal
            ease: [0.76, 0, 0.24, 1], // Custom cubic-bezier for smooth easing
          }}
          className="fixed inset-0 z-9999 bg-white pointer-events-none"
        />
      )}
    </AnimatePresence>
  );
}
