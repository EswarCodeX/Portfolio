import React from "react";

export default function header() {
  return (
    <>
      <div className="w-screen h-1.5 bg-black"></div>
      <header
        className="flex justify-between pt-11  font-man"
        data-aos="fade-down"
        data-aos-duration="1100"
      >
        <h1 className="font-bold text-4xl pl-24">mrE.</h1>
        <a
          href="Eswar_Resume.pdf"
          className="mr-20 cursor-pointer p-1  "
          download="Eswar_Resume.pdf"
        >
          Resume.Cv
        </a>
      </header>
    </>
  );
}
