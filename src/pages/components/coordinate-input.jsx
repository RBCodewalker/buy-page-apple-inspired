import React from "react";

const CoordinateInput = ({ label, sizeLimit, name, value, onChange }) => {
  const cmToMM = (value) => value * 10;

  return (
    <div className="grid items-center mr-4">
      <div className="flex justify-between items-center">
        <label htmlFor={name} className="mr-2 text-lg text-center">
          {label}
        </label>
        <small className="grid content-center text-gray-500">{sizeLimit}</small>
      </div>

      <input
        type="number"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="border border-gray-300 rounded px-2 py-1 text-center"
      />

      <div className="justify-self-center text-sm text-gray-500 mt-1">
        {" "}
        {cmToMM(value)} mm{" "}
      </div>
    </div>
  );
};

export default CoordinateInput;
