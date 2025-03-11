import React, { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";

export default function Body() {
  const [activeSection, setActiveSection] = useState("home");
  const { darkMode, toggleDarkMode } = useTheme();

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  // Add scroll event listener to update active section based on scroll position
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
    // Apply dark mode classes to the container
    <>
      <div
        id="home"
        className={`flex sm:flex-row flex-col sm:justify-between justify-evenly sm:-ml-24 -mt-24 items-center min-h-screen ${
          darkMode ? "dark:bg-black dark:text-white" : ""
        }`}
      >
        <nav>
          <ul className="sm:flex hidden -rotate-90 gap-10 font-man ">
            <li
              className={`cursor-pointer transition-all ${
                activeSection === "contact"
                  ? `border-b-2 ${darkMode ? "border-white" : "border-black"}`
                  : ""
              }`}
              onClick={() => scrollToSection("contact")}
              data-aos="fade-down"
              data-aos-duration="1100"
            >
              contact
            </li>
            <li
              className={`cursor-pointer transition-all ${
                activeSection === "about"
                  ? `border-b-2 ${darkMode ? "border-white" : "border-black"}`
                  : ""
              }`}
              onClick={() => scrollToSection("about")}
              data-aos="fade-down"
              data-aos-duration="900"
            >
              about me
            </li>
            <li
              className={`cursor-pointer transition-all ${
                activeSection === "project"
                  ? `border-b-2 ${darkMode ? "border-white" : "border-black"}`
                  : ""
              }`}
              onClick={() => scrollToSection("project")}
              data-aos="fade-down"
              data-aos-duration="700"
            >
              project
            </li>
            <li
              className={`cursor-pointer transition-all ${
                activeSection === "home"
                  ? `border-b-2 ${darkMode ? "border-white" : "border-black"}`
                  : ""
              }`}
              onClick={() => scrollToSection("home")}
              data-aos="fade-down"
              data-aos-duration="500"
            >
              home
            </li>
          </ul>
        </nav>

        <h1
          className="font-dot  flex sm:flex-row flex-col sm:text-6xl text-4xl text-center sm:mr-24 mr-0 mb-10"
          data-aos="fade-up"
          data-aos-duration="1100"
        >
          front-end.<span>web(developer)_</span>
        </h1>
        <h4
          className="sm:-rotate-90 font-bold mb-32 sm:mt-[30%] font-man text-end sm:w-auto  w-full pr-7 sm:pl-0 sm:text-base text-sm cursor-pointer"
          data-aos="fade-up"
          data-aos-duration="1100"
          onClick={toggleDarkMode}
        >
          {darkMode ? "light mode." : "dark mode."}
        </h4>
      </div>
    </>
  );
}
