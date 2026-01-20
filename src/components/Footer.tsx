import React from "react";

export default function Footer() {
  return (
    <>
      <footer
        className="flex justify-between bg-[#111111] font-man pt-28 pb-10 sm:pb-18"
        data-aos="fade-up"
        data-aos-duration="1100"
      >
        <h1 className="font-bold sm:text-4xl text-2xl sm:pl-24 pl-5">mrE.</h1>
        <p className="sm:mr-20 mr-5 sm:text-base text-[10px] font-extralight text-sm">
          design & coding by <span className="font-semibold">me</span>{" "}
        </p>
      </footer>
    </>
  );
}
