'use client'
import React from "react";

const SubmitButton = ({ 
  children, 
  onClick, 
  className = "", 
  bgcolor,
  ...props 
}) => {
  return (
    <button style={{backgroundColor:bgcolor}}
      type={props.type}
      onClick={onClick}
      className={`w-full rounded-full  py-3 px-4  text-white ${className} `}
     >
      {props.fieldName}
    </button>
  );
};

export default SubmitButton;