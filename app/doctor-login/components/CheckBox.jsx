"use client"
import React from "react";

const Checkbox = ({
  id,
  label,
  checked,
  onChange,
  className = "",
   fontSize,
  colors,
  fonts,
  fontWeight,
  ...props
}) => {

  const inputStyle = {
    fontFamily: {fonts},
    fontWeight: {fontWeight},
    fontSize: {fontSize},
    color: {colors},
  };
  return (
    <div className="flex items-center ">
      <input
        type="checkbox"
        id={id}
        style={inputStyle}
        checked={checked}
        onChange={onChange}
        className={`w-4 h-4 text-[#DADFE9] bg-[#DADFE9] border-gray-300 rounded focus:ring-[#DADFE9] ${className}`}
        {...props}
      />
      <label htmlFor={id} className="ml-2 text-sm text-gray-600">
        {label}
      </label>
    </div>
  );
};

export default Checkbox;