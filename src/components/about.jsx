import React from "react";
import profile from "../assets/about/profile.png";
import design from "../assets/about/design.svg";
import html from "../assets/about/html.svg";
import react from "../assets/about/react.svg";
import adobe from "../assets/about/adobe.svg";
import { useTheme } from "../context/ThemeContext";

export default function about() {
  const { darkMode } = useTheme();
  const items = [
    {
      id: 1,
      image: design,
      title: "Interface & Design",
      description: "Briefing, wireframe, UX, UI and branding.",
      aosDuration: "700",
    },
    {
      id: 2,
      image: html,
      title: "HTML & CSS",
      description: "Responsive websites with fast loading.",
      aosDuration: "1000",
    },
    {
      id: 3,
      image: react,
      title: "React.js",
      description: "Build your system with node.js.",
      aosDuration: "1300",
    },
    {
      id: 4,
      image: adobe,
      title: "Adobe Expert",
      description:
        "Proficient in Creative Cloud, eager to learn AEM, Analytics.",
      aosDuration: "1600",
    },
  ];
  return (
    <>
      <div
        id="about"
        className="font-man sm:pl-20 pl-7 pt-40"
        data-aos="fade-right"
        data-aos-duration="1100"
      >
        <h1 className="font-bold text-2xl sm:text-3xl">about me</h1>
        <div
          className={` w-20 h-1 sm:h-2 ${
            darkMode ? " bg-white" : "bg-black "
          } `}
        ></div>
      </div>
      <div className="font-man flex sm:flex-row flex-col gap-20 sm:p-36 p-3 items-center  pt-16">
        <img className="size-52" src={profile} alt="" data-aos="flip-right" />
        <div className="flex flex-col gap-5">
          <h3
            className="text-4xl"
            data-aos="fade-right"
            data-aos-duration="1100"
          >
            Eswar Karthik
          </h3>
          <p
            className=" sm:text-base text-sm font-extralight"
            data-aos="fade-right"
            data-aos-duration="1300"
          >
            I'm deeply passionate about Front-End development and interface
            design, with a strong eye for alignment, spacing, colors, and visual
            consistency. My experience has made me highly detail-oriented when
            it comes to crafting seamless user experiences. I work on projects
            globally, coding from my home office in the peaceful interior
          </p>
          <ul
            className="flex gap-3 sm:text-base text-sm"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <li>
              {" "}
              <a href="https://www.linkedin.com/in/eswar-karthik-r-m/">
                LINKEDIN
              </a>{" "}
            </li>
            <li>
              {" "}
              <a href="https://github.com/Exwa-r">GITHUB</a>{" "}
            </li>
            <li>
              {" "}
              <a href="">EMAIL</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="font-man flex sm:flex-row flex-col sm:px-24 px-10 pt-12 gap-14">
        {items.map((props, index) => {
          return (
            <div
              key={props.key}
              className="flex gap-3 sm:gap-5"
              data-aos="fade-down"
              data-aos-duration={props.aosDuration}
            >
              <img className="sm:size-10 size-7" src={props.image} alt="" />
              <div
                className={`w-0.5  sm:h-10 h-4 ${
                  darkMode ? " bg-white" : "bg-black "
                }`}
              ></div>
              <div>
                <h6 className="sm:text-xl text-sm font-semibold">
                  {props.title}
                </h6>
                <p className="sm:text-[11px] text-[10px] font-extralight">
                  {props.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
