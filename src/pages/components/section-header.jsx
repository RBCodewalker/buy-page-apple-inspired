import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import ArrowIcon from "../../../public/arrow";

const SectionHeader = ({ title, link, index }) => {
  return (
    <>
      <div className="section-header">
        <h3 className="text-2xl font-semibold text-zinc-700 mb-2 flex gap-2 items-center">
          <div className="bg-green-700 rounded-lg text-white text-xl font-bold px-3 py-1">
            {" "}
            {index}{" "}
          </div>
          <div>{title} </div>
        </h3>
        <a
          href={link.href}
          className="cursor-pointer text-blue-600 font-medium hover:underline flex"
          target="_blank"
        >
          <ArrowIcon /> {link.text}
        </a>
      </div>
    </>
  );
};

export default SectionHeader;
