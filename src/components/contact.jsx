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
      aosDuration: "700",
    },
    {
      id: 2,
      image: linkedin,
      aosDuration: "1000",
    },
    {
      id: 3,
      image: instagram,
      aosDuration: "1300",
    },
    {
      id: 4,
      image: github,
      aosDuration: "1600",
    },
    {
      id: 5,
      image: dribbble,
      aosDuration: "1900",
    },
    {
      id: 6,
      image: youtube,
      aosDuration: "2100",
    },
  ];
  return (
    <>
      <div id="contact" className="flex flex-col items-center gap-28 pt-60">
        <div className="flex flex-col items-center gap-2">
          <h1
            className="font-man text-3xl font-bold"
            data-aos="fade-right"
            data-aos-duration="1100"
          >
            contact me
          </h1>
          <div
            data-aos="fade-left"
            data-aos-duration="1100"
            className={`w-28 h-2 ${darkMode ? " bg-white" : "bg-black "}`}
          ></div>
        </div>
        <div className="flex gap-24">
          {images.map((props, index) => {
            return (
              <img
                key={props.id}
                src={props.image}
                alt=""
                data-aos="fade-down"
                data-aos-duration={props.aosDuration}
              />
            );
          })}
        </div>
        <div>
          <h2
            className="font-man font-semibold text-lg"
            data-aos="fade-left"
            data-aos-duration="1100"
          >
            order of service
          </h2>
          <div
            data-aos="fade-right"
            data-aos-duration="1100"
            className={`w-10 h-0.5 ${darkMode ? " bg-white" : "bg-black "}`}
          ></div>
        </div>
      </div>
    </>
  );
}
