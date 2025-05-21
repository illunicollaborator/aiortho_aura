'use client'
import React from "react";

const SubmitButton = ({ 
  children, 
  onClick, 
  className = "", 
  ...props 
}) => {
  return (
    <button
      type="submit"
      onClick={onClick}
      className={`w-full rounded-full py-3 px-4 bg-blue-600  text-white ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default SubmitButton;