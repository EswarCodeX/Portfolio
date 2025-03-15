import React from "react";
import { useTheme } from "../context/ThemeContext";

export default function header() {
  const { darkMode } = useTheme();
  return (
    <>
      <div
        className={` w-screen h-4  ${darkMode ? "bg-white" : "bg-black"}`}
      ></div>
      <header
        className="flex justify-between sm:pt-11 pt-5 font-man"
        data-aos="fade-down"
        data-aos-duration="1100"
      >
        <h1 className="font-bold sm:text-4xl text-2xl pl-5 sm:pl-24">mrE.</h1>
        <a
          href="Eswar_Resume.pdf"
          className="sm:mr-20 mr-5 cursor-pointer p-1 sm:text-base text-xs  "
          download="Eswar_Resume.pdf"
        >
          Resume.Cv
        </a>
      </header>
    </>
  );
}
