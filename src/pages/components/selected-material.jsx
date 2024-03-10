import React, { useState } from "react";
import Image from "next/image";
import AppleCheckmarkIcon from "../../../public/apple-checkmark";
import TickMarkCircleIcon from "../../../public/tick-green";

const SelectedMaterial = ({
  product,
  isExpanded,
  currentIndex,
  setExpandedIndex,
}) => {
  // const [isExpanded, setIsExpanded] = useState(product.expanded);
  console.log(isExpanded);
  console.log(currentIndex);

  return (
    <>
      <div className="grid grid-cols-5 gap-4">
        <div className="col-span-5 relative p-2 mr-20">
          <div
            className={
              isExpanded ? "visible absolute right-0 top-0" : "invisible"
            }
          >
            <TickMarkCircleIcon />
          </div>
          <div
            className={`flex border-2 ${
              isExpanded ? "border-green-600" : "border-none"
            } rounded-2xl overflow-hidden shadow-xl w-full box-border relative bg-slate-100 ${
              !isExpanded && "items-center"
            }`}
            onClick={() => {
              console.log("clock", currentIndex);
              setExpandedIndex(currentIndex);
            }}
          >
            <div className={`${isExpanded ? "w-2/5" : "w-1/5"} m-3`}>
              <Image
                src={product.image}
                width="0"
                height="0"
                alt={product.name}
                sizes={isExpanded ? "40vw" : "5vw"}
                className={`rounded-md w-auto m-auto ${
                  !isExpanded ? "w-[15vw] h-[5vw]" : "h-auto"
                }`}
              />
            </div>

            <div className={`${isExpanded ? "w-3/5" : "w-4/5"} m-3`}>
              <div className="product-details box-border relative w-200 right-0">
                <h2>{product.name}</h2>
                {isExpanded && <div> </div>}
                <div
                  className={
                    isExpanded
                      ? "block transition-all"
                      : "hidden transition-all"
                  }
                >
                  <p>
                    <AppleCheckmarkIcon /> <span>{product.benefit1}</span>
                  </p>
                  <p>
                    <AppleCheckmarkIcon /> <span>{product.benefit2}</span>
                  </p>
                  <p>
                    <AppleCheckmarkIcon /> <span>{product.benefit3}</span>
                  </p>
                  {product.benefit4 && (
                    <p>
                      <AppleCheckmarkIcon /> <span>{product.benefit4}</span>
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SelectedMaterial;
