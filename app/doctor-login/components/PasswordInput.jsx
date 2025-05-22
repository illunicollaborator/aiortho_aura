'use client';
import React, { useState } from "react";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { GoEyeClosed } from "react-icons/go";

const PasswordField = ({
  id,
  label,
  value,
  onChange,
  onBlur,
  error,
  errorMessage,
  validationMessage,
  showValidation = true,
  placeholders,
  
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const inputStyle ={
           fontFamily: props.fonts,
                fontWeight: props.fontWeight,
                fontSize:props.fontSize,
                color:props.colors
        }

  return (
    <div className="mb-8">
      <label
        htmlFor={id}
        style={inputStyle}
        className="block text-sm font-medium text-gray-500 mb-2"
      >
        {label}
      </label>
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          id={id}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        placeholder={placeholders}
          style={inputStyle}
          className={`w-full px-3 py-3 border ${
            error ? "border-red-300" : "border-gray-300"
          } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
          {...props}
        />
        <button
          type="button"
          className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-600"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <MdOutlineRemoveRedEye /> : <GoEyeClosed />}
        </button>
      </div>
      {error ? (
        <p className="mt-1 text-xs text-red-500">{errorMessage}</p>
      ) : (
        showValidation &&
        validationMessage && (
          <p className="mt-1 text-xs text-gray-500">{validationMessage}</p>
        )
      )}
    </div>
  );
};

export default PasswordField;
