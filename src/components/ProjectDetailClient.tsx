"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ProjectItem } from "@/data/items";

export default function ProjectDetailClient({ project }: { project: ProjectItem }) {
  const router = useRouter();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-[#111111] text-white selection:bg-white selection:text-black">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full p-8 z-50 flex justify-between items-center">
        <Link href="/" className="text-xl cursor-none font-bold tracking-tighter hover:opacity-70 transition-opacity">
          Back
        </Link>
        <span className="text-sm tracking-widest uppercase opacity-50">Project Detail</span>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[70vh] w-full overflow-hidden">
        <motion.div 
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0"
        >
          <Image 
            src={project.image} 
            alt={project.title} 
            fill 
            className="object-cover opacity-60"
            priority
          />
        </motion.div>
        
        <div className="absolute inset-x-0 bottom-0 p-10 md:p-20 bg-gradient-to-t from-[#111111] to-transparent">
          <motion.h1 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-7xl md:text-9xl font-bold tracking-tighter uppercase"
          >
            {project.title}
          </motion.h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="px-10 md:px-20 py-20 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
        {/* Left Col: Info */}
        <div className="md:col-span-8 space-y-12">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm uppercase tracking-widest opacity-40 mb-6 font-medium">Description</h2>
            <p className="text-2xl md:text-3xl leading-relaxed font-light opacity-90">
              {project.description}
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap gap-4 pt-8"
          >
            {[project.li1, project.li2, project.li3].map((tech, idx) => (
              <span key={idx} className="px-6 py-2 border border-white/10 rounded-full text-sm font-mono opacity-60">
                {tech}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Right Col: Links */}
        <div className="md:col-span-4 space-y-12">
          <motion.div
            initial={{ x: 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm"
          >
            <h3 className="text-sm uppercase tracking-widest opacity-40 mb-8 font-medium italic">Project Links</h3>
            
            <div className="flex flex-col gap-4">
              {project.preview !== "#" && (
                <a 
                  href={project.preview} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-4 cursor-none bg-white text-black rounded-xl hover:bg-opacity-90 transition-all"
                >
                  <span className="font-bold">Live Preview</span>
                  <span className="group-hover:translate-x-1 transition-transform">↗</span>
                </a>
              )}
              
              {project.link !== "#" && (
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-4 cursor-none border border-white/20 rounded-xl hover:bg-white/10 transition-all font-medium"
                >
                  <span>Source Code</span>
                  <span className="group-hover:translate-x-1 transition-transform opacity-50">↗</span>
                </a>
              )}
            </div>
          </motion.div>

          {/* Credits or more info if needed */}
          <motion.div
             initial={{ x: 40, opacity: 0 }}
             whileInView={{ x: 0, opacity: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8, delay: 0.6 }}
             className="opacity-40 text-sm italic"
          >
            * This project was designed and developed with focus on clean UI and smooth user experience.
          </motion.div>
        </div>
      </section>

      {/* Footer / Next Project Link */}
      <section className="px-10 md:px-20 py-40 border-t cursor-none border-white/10 text-center">
        <Link 
          href="/"
          className="group inline-block cursor-none"
        >
          <span className="text-sm uppercase tracking-[0.4em] opacity-40 mb-4 block">Close Project</span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase transition-opacity group-hover:opacity-60">
            Back to Home ✱
          </h2>
        </Link>
      </section>
    </main>
  );
}
