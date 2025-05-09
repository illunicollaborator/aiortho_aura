import React, { FC } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { UseFormRegisterReturn } from "react-hook-form";

type OrthoInputProps = {
  label?: string;
  placeholder?: string;
  error?: string;
  apiError?: string;
  registration?: UseFormRegisterReturn;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  type?: string;
  required?: boolean;
  rightIcon?: React.ReactNode;
  onRightIconClick?: () => void;
  width?: string;
  maxLength?: number;
  minLength?: number;
  className?: string;
};

const OrthoInput: FC<OrthoInputProps> = ({
  label,
  placeholder,
  error,
  registration,
  onChange,
  value,
  type = "text",
  required = false,
  rightIcon,
  onRightIconClick,
  width = "w-full",
  apiError,
  maxLength,
  minLength,
}) => {
  return (
    <div className={`space-y-2 ${width}`}>
      {label && (
        <Label className="text-sm font-medium text-[color:var(--aiortho-gray-500)]">
          {label}
          {required && (
            <span className="text-[color:var(--aiortho-danger)]">*</span>
          )}
        </Label>
      )}
      <div className="relative">
        <Input
          type={type}
          placeholder={placeholder}
          className={`w-full placeholder:text-[color:var(--aiortho-gray-400)] h-10 ${
            error
              ? "border-[1px] border-[color:var(--aiortho-danger)]"
              : ""
          }`}
          {...registration}
          onChange={(e) => {
            registration?.onChange && registration.onChange(e);
            onChange && onChange(e);
          }}
          value={value}
          maxLength={maxLength}
          minLength={minLength}
        />
        {rightIcon && (
          <div
            className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
            onClick={onRightIconClick}
          >
            {rightIcon}
          </div>
        )}
      </div>
      {error && (
        <p className="font-normal text-[color:var(--aiortho-danger)] text-xs mt-1">
          {error}
        </p>
      )}
      {apiError && (
        <p className="font-normal text-[color:var(--aiortho-danger)] text-xs mt-1">
          {apiError}
        </p>
      )}
    </div>
  );
};

export default OrthoInput;
