import tesla from "../../assets/project/tesla.png";
import inter from "../../assets/project/inter.png";
import aiqads from "../../assets/project/aiqads.png";
import traveltro from "../../assets/project/traveltro.png";

const items = [
  {
    id: 1,
    title: "Travel Tro",
    link: "https://classy-gumdrop-968be0.netlify.app/",
    description:
      "Developed a website that provides real-time and static information on local bus routes, timings, and stops in Madurai. Designed an intuitive interface for easy navigation and quick access to bus details. Optimized for performance, cross-device compatibility, and user-friendly experience to assist daily commuters.",
    image: traveltro,
    imageStyledark: "w-64 h-40 border border-black rounded-xl",
    imageStylelight: "w-64 h-40 border rounded-xl",
    li1: "React",
    li2: "Tailwind",
    li3: "JavaScript",
    ulStyle: "flex gap-2  justify-end w-full ml-5 pb-5",
    darkStyle: " rounded-xl px-2 bg-gray-400 relative bg-gray-600 text-white",
    lightStyle: "bg-white rounded-xl px-2 bg-white relative",
    aos: "zoom-in",
  },
  {
    id: 2,
    title: "Eswar International",
    link: "https://eswarinternational.netlify.app/",
    description:
      "Developed a responsive portfolio website for an export company specializing in fruits and garlands, focusing on intuitive design, user experience, and cross-device compatibility. Ensured seamless navigation, modern aesthetics, and optimized performance to enhance user engagement.",
    image: inter,
    imageStyledark: "w-64 border border-black rounded-xl",
    imageStylelight: "w-64 border rounded-xl",
    li1: "React",
    li2: "Tailwind",
    li3: "JavaScript",
    ulStyle: "flex gap-2  justify-end w-full ml-5 ",
    darkStyle: " rounded-xl px-2 bg-gray-400 relative bg-gray-600 text-white",
    lightStyle: "bg-white rounded-xl px-2 bg-white relative",
    aos: "zoom-out",
  },
  {
    id: 3,
    title: "AI-Qads",
    description:
      "Developed an application that extracts insights, summarizes documents, and answers queries based on content. Implemented efficient text processing algorithms to ensure accurate and relevant responses. Optimized the system to support various document formats for broader usability. Focused on performance, scalability, and user-friendly design to enhance user experience.",
    image: aiqads,
    imageStyledark: "w-64 border border-white rounded-xl",
    imageStylelight: "w-64 border rounded-xl",
    li1: "React",
    li2: "Tailwind",
    li3: "JavaScript",
    ulStyle: "flex gap-2  justify-end w-full ml-5",
    darkStyle: " rounded-xl px-2 bg-gray-400 relative bg-gray-600 text-white",
    lightStyle: "bg-white rounded-xl px-2 bg-white relative",
    aos: "zoom-out",
  },

  {
    id: 4,
    title: "Tesla Clone",
    link: "https://classy-gumdrop-968be0.netlify.app/",
    description:
      "Developed a fully responsive clone of the Tesla website, replicating its modern UI/UX. Implemented smooth animations and optimized performance for a seamless user experience. Integrated reusable components, dynamic routing, and state management to enhance scalability and maintainability. Ensured cross-browser compatibility and mobile responsiveness, aligning with industry best practices.",
    image: tesla,
    imageStyledark: "w-64 border border-black rounded-xl",
    imageStylelight: "w-64 border rounded-xl",
    li1: "React",
    li2: "Tailwind",
    li3: "JavaScript",
    ulStyle: "flex gap-2  justify-end w-full ml-5",
    darkStyle: " rounded-xl px-2 bg-gray-400 relative bg-gray-600 text-white",
    lightStyle: "bg-white rounded-xl px-2 bg-white relative",
    aos: "zoom-in",
  },
];

export default items;
