'use client'
import React from "react";

const InputField = ({ 
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
     fontSize,
     colors,
  fonts,
fontWeight,
  ...props 
}) => {
  return (
    <div className="mb-8">
      <label htmlFor={id}  style={{
           fontFamily: {fonts},
                fontWeight: {fontWeight},
                fontSize:{fontSize},
                color:{colors}
        }} className="block text-sm font-medium text-gray-500 mb-3">
        {label}
      </label>
      <input
        type="text"
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholders}
        onBlur={onBlur}
        style={{
           fontFamily: {fonts},
                fontWeight: {fontWeight},
                fontSize:{fontSize},
                color:{colors}
        }}
        className={`w-full px-3 py-3 border  ${error ? 'border-red-300' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
        {...props}
      />
      {error && errorMessage && (
        <p className="mt-1 text-xs text-red-500">
          {errorMessage}
        </p>
      )}
      {!error && showValidation && validationMessage && (
        <p className="mt-1 text-xs text-gray-500">
          {validationMessage}
        </p>
      )}
    </div>
  );
};

export default InputField;
