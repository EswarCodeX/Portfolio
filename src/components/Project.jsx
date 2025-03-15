import React from "react";
import { useTheme } from "../context/ThemeContext";
import items from "../components/data/data.js";
import arrow from "../assets/project/preview.png";

export default function Project() {
  const { darkMode } = useTheme();

  return (
    <>
      <div
        id="project"
        className="flex flex-col w-full  items-end gap-1 pb-18 pt-0 sm:pt-20 sm:pr-14 pr-7  overflow-hidden"
      >
        <h1
          className="text-3xl  font-bold font-man "
          data-aos="fade-up"
          data-aos-duration="1100"
        >
          personal projects
        </h1>
        <div
          className={`${
            darkMode ? "bg-white w-28  sm:h-2 h-1" : "bg-black w-28  h-2"
          }`}
          data-aos="fade-left"
          data-aos-duration="1100"
        ></div>
      </div>
      <div className="w-screen h-[30%] grid grid-cols-1 sm:grid-cols-2 grid-rows-4 sm:grid-rows-2 gap-10 sm:pl-32 sm:pr-20 p-10 overflow-hidden ">
        {items.map((props, index) => {
          return (
            <div
              key={index}
              className="flex sm:flex-row flex-col font-man gap-6"
              data-aos={props.aos}
              data-aos-duration="1100"
            >
              <div className={props.divStyle}>
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
                <h2 className="font-bold sm:text-3xl text-2xl">
                  {props.title}
                </h2>
                <p className="text-[#808080] sm:text-sm text-xs">
                  {props.description}
                </p>
                <div className="flex justify-between">
                  <a href={props.link}>
                    <p className="flex font-semibold sm:text-lg text-sm cursor-pointer">
                      view code
                    </p>
                    <div
                      className={`h-0.5 w-7 ${
                        darkMode ? " bg-white" : " bg-black"
                      }`}
                    ></div>
                  </a>
                  <a href={props.preview}>
                    <img src={arrow} className="sm:size-10 size-7" alt="" />
                    {/* <p className="text-xs">preview</p> */}
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
