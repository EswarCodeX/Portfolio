"use client";
import React, { useState, useRef } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function Contact() {
  const contactLinks = [
    {
      id: "linkedin",
      name: "LinkedIn",
      handle: "eswar-karthik-r-m",
      link: "https://www.linkedin.com/in/eswar-karthik-r-m/",
      gridClass: "md:col-span-2 md:row-span-1",
    },
    {
      id: "github",
      name: "Github",
      handle: "@EswarCodeX",
      link: "https://github.com/EswarCodeX",
      gridClass: "md:col-span-2 md:row-span-1",
    },
    {
      id: "email",
      name: "Email",
      handle: "rmeswarkarthik.csbs@gmail.com",
      link: "mailto:rmeswarkarthik.csbs@gmail.com",
      gridClass: "md:col-span-3 md:row-span-1",
    },
  ];

  return (
    <section id="contact" className="py-32 px-10 bg-[#111111] min-h-screen">
      <div className="max-w-[75vw] mx-20 ">
        <div className="flex flex-col gap-2 mb-16">
          <h1 className="text-white text-sm tracking-[0.3em] uppercase opacity-50">
            Contact Me
          </h1>
          <div className="w-10 h-[1px] bg-white opacity-20"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[500px]">
          {contactLinks.map((contact) => (
            <ContactCard key={contact.id} contact={contact} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactCard({ contact }: { contact: any }) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLAnchorElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 400, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 400, damping: 30 });

  const handleMouseEnter = (e: React.MouseEvent) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    }
    setIsHovered(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <a
      ref={cardRef}
      href={contact.link}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`${contact.gridClass} contact-hover group relative bg-[#181717] rounded-3xl overflow-hidden border border-white/5 cursor-none flex flex-col justify-between p-8 z-10`}
    >
      {/* Label Layer */}
      <div className="flex justify-between items-start z-10 pointer-events-none">
        <span className="text-white/50 text-xs uppercase tracking-widest font-medium">{contact.name}</span>

      </div>

      {/* ARROW CURSOR - Only shows local position indicator */}
      <motion.div
        style={{ left: springX, top: springY, x: "-50%", y: "-50%" }}
        className="absolute z-50 w-2 h-2 bg-white/30 rounded-full pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: isHovered ? 0.5 : 0,
        }}
        transition={{ 
          duration: 0.2
        }}
      />

      {/* MARQUEE ANIMATION */}
      <div className="absolute inset-0 flex items-end pointer-events-none overflow-hidden z-0">
        <motion.div
          initial={{ y: 150, opacity: 0 }}
          animate={isHovered ? { y: 0, opacity: 1 } : { y: 150, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="w-full"
        >
          <motion.div
            animate={isHovered ? { x: [0, -800] } : { x: 0 }}
            transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
            className="whitespace-nowrap flex gap-10 text-white/50 text-[250px] font-bold uppercase"
          >
            <span>{contact.name} {contact.name} {contact.name}</span>
            <span>{contact.name} {contact.name} {contact.name}</span>
          </motion.div>
        </motion.div>
      </div>

      <div className="z-10 pointer-events-none flex justify-between items-start">
        <p className="text-white/90 text-sm font-light">{contact.handle}</p>
        <span className="text-white/50 text-xs font-mono uppercase">{contact.id.substring(0, 2)}</span>
      </div>
    </a>
  );
}