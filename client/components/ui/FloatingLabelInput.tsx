import React from "react";
import { cn } from "@/lib/utils";

interface FloatingLabelInputProps {
  label: string;
  type?: "text" | "email" | "password" | "number" | "tel";
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  containerClassName?: string;
  labelClassName?: string;
  required?: boolean;
  disabled?: boolean;
  placeholder?: string;
}

const FloatingLabelInput: React.FC<FloatingLabelInputProps> = ({
  label,
  type = "text",
  value,
  onChange,
  className,
  containerClassName,
  labelClassName,
  required = false,
  disabled = false,
  placeholder = " ",
}) => {
  return (
    <div className={cn("relative", containerClassName)}>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className={cn(
          "w-full px-4 py-4 bg-slate-50 border-0 border-b border-slate-800 rounded-t-md text-sm font-open-sans focus:outline-none focus:ring-0 focus:border-slate-800 peer",
          disabled && "bg-slate-100 cursor-not-allowed",
          className,
        )}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
      />
      <label
        className={cn(
          "absolute left-4 top-4 text-sm text-slate-800 font-open-sans pointer-events-none transition-all duration-200 peer-focus:-translate-y-2 peer-focus:scale-75 peer-focus:text-blue-900 peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:scale-75",
          disabled && "text-slate-500",
          labelClassName,
        )}
      >
        {label}
      </label>
    </div>
  );
};

export default FloatingLabelInput;
