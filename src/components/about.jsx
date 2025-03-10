import React from "react";
import profile from "../assets/about/profile.png";
import design from "../assets/about/design.svg";
import html from "../assets/about/html.svg";
import react from "../assets/about/react.svg";
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
      image: react,
      title: "Interface & Design",
      description: "Create your e-commerce or blog with PHP.",
      aosDuration: "1600",
    },
  ];
  return (
    <>
      <div
        id="about"
        className="font-man pl-20 pt-40"
        data-aos="fade-right"
        data-aos-duration="1100"
      >
        <h1 className="font-bold text-3xl">about me</h1>
        <div
          className={`w-20 h-2${darkMode ? " bg-white" : "bg-black "}`}
        ></div>
      </div>
      <div className="font-man flex gap-20 p-36">
        <img className="size-52" src={profile} alt="" data-aos="flip-right" />
        <div className="flex flex-col gap-5">
          <h3
            className="text-4xl "
            data-aos="fade-right"
            data-aos-duration="1100"
          >
            Eswar Karthik
          </h3>
          <p
            className=" font-extralight"
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
            className="flex gap-3"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <li>LINKEDIN</li>
            <li>GITHUB</li>
            <li>EMAIL</li>
          </ul>
        </div>
      </div>
      <div className="font-man flex px-24 gap-14">
        {items.map((props, index) => {
          return (
            <div
              key={props.key}
              className="flex gap-5"
              data-aos="fade-down"
              data-aos-duration={props.aosDuration}
            >
              <img className="size-10" src={props.image} alt="" />
              <div
                className={`w-0.5 h-10${darkMode ? " bg-white" : "bg-black "}`}
              ></div>
              <div>
                <h6 className="text-xl font-semibold">{props.title}</h6>
                <p className="text-xs font-extralight">{props.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
