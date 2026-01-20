import tesla from "@/assets/project/tesla.png";
import inter from "@/assets/project/inter.png";
import aiqads from "@/assets/project/aiqads.png";
import traveltro from "@/assets/project/traveltro.png";
import xplocode from "@/assets/project/xplocode.png";
import inoutdesigns from "@/assets/project/inoutdesign.png";
import aravindvk from "@/assets/project/aravindvk.png";
import { StaticImageData } from "next/image";

export interface ProjectItem {
  id: number;
  title: string;
  link: string;
  preview: string;
  description: string;
  image: StaticImageData;
  divStyle: string;
  imageStyledark: string;
  imageStylelight: string;
  li1: string;
  li2: string;
  li3: string;
  ulStyle: string;
  darkStyle: string;
  lightStyle: string;
  aos: string;
}

const items: ProjectItem[] = [

    {
    id: 7,
    title: "Xplocode Official Website",
    link: "#", 
    preview: "https://xplocode.com/", // Official company link
    description:
      "Built and contributed frontend features for the company's official website during my internship[cite: 26, 27]. Enhanced website performance and improved UI/UX consistency across various modules to ensure a professional digital presence[cite: 27].",
    image: xplocode, // Replace with appropriate local asset
    divStyle: "bg-[#f5f5f5] px-8 pt-10 gap-10 mb-10 rounded-lg flex flex-col pb-2 sm:pb-0",
    imageStyledark: "sm:w-64 w-52 border border-black rounded-xl",
    imageStylelight: "sm:w-64 w-52 border rounded-xl",
    li1: "React", 
    li2: "Next.js",
    li3: "Tailwind",
    ulStyle: "flex gap-2 justify-end w-full ml-5",
    darkStyle: "rounded-xl px-2 relative bg-gray-600 text-white sm:text-base text-xs",
    lightStyle: "bg-white rounded-xl px-2 relative sm:text-base text-xs",
    aos: "zoom-in",
  },
    {
    id: 8,
    title: "Inout Designs",
    link: "#",
    preview: "https://inoutdesigns.vercel.app/", 
    description:
      "Developed a modern web platform for an interior design firm, focusing on high-quality visual galleries and immersive user interfaces[cite: 31]. Implemented responsive layouts to showcase architectural portfolios with high performance and seamless navigation[cite: 31].",
    image: inoutdesigns, // Replace with appropriate local asset
    divStyle: "bg-[#f5f5f5] px-8 pt-10 gap-10 mb-10 rounded-lg flex flex-col pb-2 sm:pb-0",
    imageStyledark: "sm:w-64 w-52 border border-black rounded-xl",
    imageStylelight: "sm:w-64 w-52 border rounded-xl",
    li1: "MERN Stack",
    li2: "TypeScript",
    li3: "UI/UX",
    ulStyle: "flex gap-2 justify-end w-full ml-5",
    darkStyle: "rounded-xl px-2 relative bg-gray-600 text-white sm:text-base text-xs",
    lightStyle: "bg-white rounded-xl px-2 relative sm:text-base text-xs",
    aos: "zoom-out",
  },
    {
    id: 6,
    title: "AravindVK - Magician Portfolio",
    link: "#",
    preview: "https://aravindvk.vercel.app/", // Example preview link
    description:
      "Built a personalized, responsive portfolio website for a professional magician. The project showcases the client's profile using clean UI, smooth animations, and optimized performance to create a polished and magical digital experience. [cite: 28, 29]",
    image: aravindvk, // Replace with appropriate local asset
    divStyle: "bg-[#f5f5f5] px-8 pt-10 gap-10 mb-10 rounded-lg flex flex-col pb-2 sm:pb-0",
    imageStyledark: "sm:w-64 w-52 border border-black rounded-xl",
    imageStylelight: "sm:w-64 w-52 border rounded-xl",
    li1: "Next.js",
    li2: "Tailwind",
    li3: "Framer Motion",
    ulStyle: "flex gap-2 justify-end w-full ml-5",
    darkStyle: "rounded-xl px-2 relative bg-gray-600 text-white sm:text-base text-xs",
    lightStyle: "bg-white rounded-xl px-2 relative sm:text-base text-xs",
    aos: "zoom-out",
  },
    {
    id: 5,
    title: "Maithanam - Turf Booking App",
    link: "https://github.com/EswarCodeX", // Assuming your standard GitHub handle [cite: 6]
    preview: "#",
    description:
      "Developed a comprehensive Android turf booking application featuring real-time slot availability and smooth navigation. Built a secure booking flow and a clean, optimized UI to ensure a reliable and high-quality user experience for sports enthusiasts. [cite: 23, 24, 25]",
    image: traveltro, // Replace with appropriate local asset
    divStyle: "bg-[#f5f5f5] px-8 pt-10 gap-10 mb-10 rounded-lg flex flex-col pb-2 sm:pb-0",
    imageStyledark: "sm:w-64 w-52 border border-black rounded-xl",
    imageStylelight: "sm:w-64 w-52 border rounded-xl",
    li1: "React Native", 
    li2: "Node.js",
    li3: "MongoDB",
    ulStyle: "flex gap-2 justify-end w-full ml-5",
    darkStyle: "rounded-xl px-2 relative bg-gray-600 text-white sm:text-base text-xs",
    lightStyle: "bg-white rounded-xl px-2 relative sm:text-base text-xs",
    aos: "zoom-in",
  },
  {
    id: 1,
    title: "Travel Tro",
    link: "https://github.com/EswarCodeX/Travel_Tro",
    preview: "https://travel-tro.vercel.app/",
    description:
      "Designed a real-time and static bus route information system for Madurai commuters. Created a user-friendly interface for quick access to routes, timings, and stops. Optimized for smooth performance across all devices, enhancing daily travel convenience.",
    image: traveltro,
    divStyle: "bg-[#f5f5f5] px-8  pt-10 gap-10 mb-10 rounded-lg flex flex-col",
    imageStyledark: "sm:w-64 w-52 sm:h-40 h-32 border border-black rounded-xl",
    imageStylelight: "sm:w-64 w-52 sm:h-40 h-32 border rounded-xl",
    li1: "React",
    li2: "Tailwind",
    li3: "JavaScript",
    ulStyle: "flex gap-2  justify-end w-full ml-5 pb-5 -mb-3 sm:-mb-0",
    darkStyle:
      " rounded-xl px-2  relative bg-gray-600 text-white sm:text-base text-xs",
    lightStyle:
      "bg-white rounded-xl px-2 bg-white relative sm:text-base text-xs",
    aos: "zoom-in",
  },
  {
    id: 2,
    title: "Eswar International",
    link: "https://github.com/EswarCodeX/Eswar_International",
    preview: "https://eswarinternational.netlify.app/",
    description:
      "Developed a responsive portfolio website for a fruit and garland export company, emphasizing an intuitive and engaging user experience. Focused on modern aesthetics and seamless navigation. Ensured performance optimization and cross-device compatibility for wider reach.",
    image: inter,
    divStyle:
      "bg-[#f5f5f5] px-8  pt-10 gap-10 mb-10 rounded-lg flex flex-col pb-2 sm:pb-0",
    imageStyledark: "sm:w-64 w-52 border border-black rounded-xl",
    imageStylelight: "sm:w-64 w-52  border rounded-xl",
    li1: "React",
    li2: "Tailwind",
    li3: "JavaScript",
    ulStyle: "flex gap-2  justify-end w-full ml-5 ",
    darkStyle:
      " rounded-xl px-2  relative bg-gray-600 text-white sm:text-base text-xs",
    lightStyle:
      "bg-white rounded-xl px-2 bg-white relative sm:text-base text-xs",
    aos: "zoom-out",
  },
  {
    id: 3,
    title: "AI-Qads",
    link: "#",
    preview: "#",
    description:
      "Built an intelligent system that extracts key insights, summarizes documents, and answers queries with precision. Leveraged efficient text processing algorithms for accuracy and speed. Optimized for multiple document formats, ensuring versatility and usability.",
    image: aiqads,
    divStyle:
      "bg-[#f5f5f5] px-8  pt-10 gap-10 mb-10 rounded-lg flex flex-col pb-2 sm:pb-0",
    imageStyledark: "sm:w-64 w-52  border border-white rounded-xl",
    imageStylelight: "sm:w-64 w-52  border rounded-xl",
    li1: "React",
    li2: "Tailwind",
    li3: "JavaScript",
    ulStyle: "flex gap-2  justify-end w-full ml-5",
    darkStyle:
      " rounded-xl px-2  relative bg-gray-600 text-white sm:text-base text-xs",
    lightStyle:
      "bg-white rounded-xl px-2 bg-white relative sm:text-base text-xs",
    aos: "zoom-out",
  },
  {
    id: 4,
    title: "Tesla Clone",
    link: "https://github.com/EswarCodeX/Tesla",
    preview: "https://classy-gumdrop-968be0.netlify.app/",
    description:
      "Recreated the Tesla website with a sleek, modern UI/UX, ensuring fluid animations and top-tier performance. Integrated reusable components, dynamic routing, and state management for scalability. Designed with cross-browser compatibility and full mobile responsiveness in mind.",
    image: tesla,
    divStyle:
      "bg-[#f5f5f5] px-8  pt-10 gap-10 mb-10 rounded-lg flex flex-col pb-2 sm:pb-0",
    imageStyledark: "sm:w-64 w-52  border border-black rounded-xl",
    imageStylelight: "sm:w-64 w-52  border rounded-xl",
    li1: "React",
    li2: "Tailwind",
    li3: "JavaScript",
    ulStyle: "flex gap-2  justify-end w-full ml-5",
    darkStyle:
      " rounded-xl px-2  relative bg-gray-600 text-white sm:text-base text-xs",
    lightStyle:
      "bg-white rounded-xl px-2 bg-white relative sm:text-base text-xs",
    aos: "zoom-in",
  },
];

export default items;
