import React from "react";
import { useTheme } from "../context/ThemeContext";
import items from "../components/data/data.js";

export default function Project() {
  const { darkMode } = useTheme();

  return (
    <>
      <div
        id="project"
        className="flex flex-col w-[1450px] items-end gap-1 pb-18 pt-20"
        data-aos="fade-left"
        data-aos-duration="1100"
      >
        <h2 className="text-3xl font-bold font-man ">personal projects</h2>
        <div
          className={`${
            darkMode ? "bg-white w-28  h-2" : "bg-black w-28  h-2"
          }`}
        ></div>
      </div>
      <div className="w-screen h-[30%] grid grid-cols-2 grid-rows-2 gap-10 p-10 ">
        {items.map((props, index) => {
          return (
            <div
              key={props.id}
              className="flex font-man gap-6"
              data-aos={props.aos}
              data-aos-duration="1100"
            >
              <div className="bg-[#f5f5f5] px-8  pt-10 gap-10 mb-10 rounded-lg flex flex-col ">
                <img
                  className={`${
                    darkMode ? props.imageStyledark : props.imageStylelight
                  }`}
                  src={props.image}
                  alt={props.title}
                />
                <ul className={props.ulStyle}>
                  <li
                    className={`${
                      darkMode ? props.darkStyle : props.lightStyle
                    }`}
                  >
                    {props.li1}
                  </li>
                  <li
                    className={`${
                      darkMode ? props.darkStyle : props.lightStyle
                    }`}
                  >
                    {props.li2}
                  </li>
                  <li
                    className={`${
                      darkMode ? props.darkStyle : props.lightStyle
                    }`}
                  >
                    {props.li3}
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-5">
                <h4 className="font-bold text-3xl">{props.title}</h4>
                <p className="text-[#808080] text-sm">{props.description}</p>
                <a href={props.link}>
                  <p className="flex font-semibold text-lg cursor-pointer">
                    see project
                  </p>
                  <div className="h-0.5 w-7 bg-black"></div>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
