import React from "react";
import figma from "../assets/contact/figma.png";
import github from "../assets/contact/github.png";
import instagram from "../assets/contact/instagram.png";
import youtube from "../assets/contact/youtube.png";
import linkedin from "../assets/contact/linkedin.png";
import dribbble from "../assets/contact/dribbble.png";
import { useTheme } from "../context/ThemeContext";

export default function contact() {
  const { darkMode } = useTheme();
  const images = [
    {
      id: 1,
      image: figma,
      name: "figma",
      aosDuration: "700",
      link: "https://www.figma.com/design/GukuYot7CHOsHC7dmcyiAt/Untitled?t=TQBhPGXYj2T9BtGM-1",
    },
    {
      id: 2,
      image: linkedin,
      name: "linkedin",

      aosDuration: "1000",
      link: "https://www.linkedin.com/in/eswar-karthik-r-m/",
    },
    {
      id: 3,
      image: instagram,
      name: "instagram",
      aosDuration: "1300",
      link: "https://www.instagram.com/exwar._/",
    },
    {
      id: 4,
      image: github,
      name: "github",
      aosDuration: "1600",
      link: "https://github.com/Exwa-r",
    },
    {
      id: 5,
      image: dribbble,
      name: "dribbble",

      aosDuration: "1900",
      link: "https://dribbble.com/eswar_",
    },
    {
      id: 6,
      image: youtube,
      name: "youtube",
      aosDuration: "2100",
      link: "https://www.youtube.com/@mreswarkarthik143",
    },
  ];
  return (
    <>
      <div
        id="contact"
        className="flex flex-col items-center gap-20 sm:gap-28 pt-32 sm:pt-60"
      >
        <div className="flex flex-col items-center gap-2">
          <h1
            className="font-man sm:text-3xl text-2xl font-bold"
            data-aos="fade-right"
            data-aos-duration="1100"
          >
            contact me
          </h1>
          <div
            data-aos="fade-left"
            data-aos-duration="1100"
            className={`sm:w-28 w-20 sm:h-2 h-1 ${
              darkMode ? " bg-white" : "bg-black "
            }`}
          ></div>
        </div>
        <div className="sm:flex grid grid-cols-3 gap-10 sm:gap-24">
          {images.map((props, index) => {
            return (
              <a href={props.link} key={index} aria-label={props.name}>
                <img
                  key={props.id}
                  src={props.image}
                  alt=""
                  data-aos="fade-down"
                  data-aos-duration={props.aosDuration}
                />
              </a>
            );
          })}
        </div>
        <div>
          <h2
            className="font-man font-semibold text-sm sm:text-lg"
            data-aos="fade-left"
            data-aos-duration="1100"
          >
            order of service
          </h2>
          <div
            data-aos="fade-right"
            data-aos-duration="1100"
            className={`sm:w-10 w-5 h-0.5 ${
              darkMode ? " bg-white" : "bg-black "
            }`}
          ></div>
        </div>
      </div>
    </>
  );
}
