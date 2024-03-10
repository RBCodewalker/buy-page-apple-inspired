import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import CoordinateInput from "./coordinate-input";

import Alert from "@mui/material/Alert";
import SectionHeader from "./section-header";

const DraggableIcon = ({ imageUrl, iconPosition }) => {
  const imageRef = useRef(null);
  const iconRef = useRef(null);
  const [x, setX] = useState(310); // X coordinate (scaled)
  const [y, setY] = useState(110); // Y coordinate (scaled)

  const MAX_ICON_POS_X =
    imageRef.current && iconRef.current ? imageRef.current.offsetWidth : 0;

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (!imageRef.current || !iconRef.current) return;

      const imageRect = imageRef.current.getBoundingClientRect();
      const imageWidth = imageRect.width;
      const imageHeight = imageRect.height;

      const iconWidth = iconRef.current.offsetWidth;
      const iconHeight = iconRef.current.offsetHeight;

      // unscaled coordinates relative to bottom-left corner

      let newX = event.clientX - imageRect.left - iconWidth / 2;

      let newY = imageHeight - (event.clientY - imageRect.top) - iconHeight / 2;

      // unscaled coordinates within image boundaries
      newX = Math.max(0, Math.min(newX, imageWidth - iconWidth / 2));
      newY = Math.max(0, Math.min(newY, imageHeight - iconHeight / 2));

      // unscaled coordinates to scaled coordinates
      const scaledX = Math.floor(newX); // Ensure whole number for X
      const scaledY = Math.floor(newY); // Ensure whole number for Y
      // console.log(scaledX, scaledY);
      setX(scaledX);
      setY(scaledY);
    };

    const handleMouseUp = () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };

    iconRef.current.addEventListener("mousedown", (event) => {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  const handleInputChange = (event) => {
    const maxValue =
      event.target.name === "x"
        ? imageRef.current.offsetWidth - iconRef.current.offsetWidth / 2
        : imageRef.current.offsetHeight - iconRef.current.offsetHeight / 2;

    const maxNormalisedValue = event.target.name === "x" ? 300 : 150;

    const value = Math.min(
      parseInt(event.target.value, 10),
      maxNormalisedValue
    );

    if (isNaN(value)) return; // in case of invalid input

    
      // normalise values
    const newValue = normalise(value, 0, maxNormalisedValue, 0, maxValue);

    if (event.target.name === "x") {
      setX(newValue);
    } else {
      setY(newValue);
    }
  };

  const normalise = (x, rmin, rmax, tmin, tmax) => {
    return ((x - rmin) / (rmax - rmin)) * (tmax - tmin) + tmin;
  };

  const normaliseIconXPos = (x) => {
    return Math.ceil(
      normalise(
        x,
        0,
        imageRef.current
          ? imageRef.current.offsetWidth - iconRef.current.offsetWidth / 2
          : 600,
        0,
        300
      )
    );
  };

  const normaliseIconYPos = (y) => {
    return Math.ceil(
      normalise(
        y,
        0,
        imageRef.current
          ? imageRef.current.offsetHeight - iconRef.current.offsetHeight / 2
          : 300,
        0,
        150
      )
    );
  };

  const isInvalidPosition = () => {
    return normaliseIconXPos(x) < 10 || normaliseIconYPos(y) < 10;
  };

  return (
    <>
      <div className="flex relative w-full">
        <div className="flex items-center w-1/2 h-1/2 p-5 justify-center relative bg-slate-100 rounded-2xl">
          <Image
            ref={imageRef}
            src={imageUrl}
            width="0"
            height="0"
            sizes="70vw"
            alt="Nature Image"
            className="w-full"
          />

          <div
            className="absolute"
            style={{
              left: `${20}px`,
              bottom: `${20}px`,

              width: `${
                x + (iconRef.current ? 2 + iconRef.current.offsetWidth / 2 : 10)
              }px`,
              height: `${
                y +
                (iconRef.current ? 2 + iconRef.current.offsetHeight / 2 : 10)
              }px`,
            }}
          >
            <div
              className="absolute border-r-2 border-red-600"
              style={{
                bottom: `${0}px`,
                left: `${
                  x + (iconRef.current ? iconRef.current.offsetWidth / 2 : 10)
                }px`,
                height: `${y}px`,
              }}
            >
              {" "}
            </div>
            <span
              ref={iconRef}
              className="absolute cursor-grab bg-opacity-30 bg-black bg-transparent border-2 border-red-600 rounded-full w-5 h-5 fill-none text-center text-white m-0"
              style={{ left: `${x}px`, bottom: `${y}px` }}
            ></span>

            <div
              className="absolute border-t-2 border-red-600"
              style={{
                left: `${0}px`,
                bottom: `${
                  y + (iconRef.current ? iconRef.current.offsetHeight / 2 : 10)
                }px`,
                width: `${x}px`,
              }}
            >
              {" "}
            </div>
          </div>
        </div>
        <div className="w-1/2 h-1/2 px-5 rounded-2xl">
          <Alert
            severity="error"
            className={
              isInvalidPosition()
                ? "visible shadow-lg w-1/3 ml-20 mt-20 ease-linear absolute z-20"
                : "invisible absolute"
            }
          >
            Values must be at least 10cm
          </Alert>

          <SectionHeader
            title={"Wähle Deine Maße"}
            link={{
              href: "https://www.google.com",
              text: "Wie findest Du die richtigen Maße?",
            }}
            index={"1"}
          ></SectionHeader>

          <div className="flex m-5 p-5 justify-center rounded-2xl overflow-hidden shadow-xl w-full box-border relative bg-slate-100">
            <div className="w-2/5 z-10">
              <div className="pr-4">
                <CoordinateInput
                  label="Width"
                  sizeLimit="10 - 300 cm"
                  name="x"
                  value={normaliseIconXPos(x)}
                  onChange={handleInputChange}
                  className=""
                />
              </div>
            </div>

            <div className="w-1/5 flex items-center justify-center z-20">
              <div>X</div>
            </div>

            <div className="w-2/5 z-10">
              <div className="pl-4">
                <CoordinateInput
                  label="Height"
                  sizeLimit="10 - 150 cm"
                  name="y"
                  value={normaliseIconYPos(y)}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DraggableIcon;
