import { ErrorMessage } from "formik";
import React from "react";
import { twMerge } from "tailwind-merge";

export type ATMTextFieldPropTypes = {
  name: string;
  value: string | string[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  size?: "small" | "medium" | "large";
} & Omit<React.ComponentProps<"input">, "size">;

const ATMTextField = ({
  name,
  value,
  className = "",
  onChange,
  label,
  required,
  size = "small",
  disabled,
  ref,
  ...rest
}: ATMTextFieldPropTypes) => {
  return (
    <div className="relative">
      {label && (
        <label
          className={`text-slate-900 font-medium text-[12px] ${
            disabled && "opacity-40"
          }`}
        >
          {" "}
          {label} {required && <span className="text-[#FED700] font-bold"> * </span>}{" "}
        </label>
      )}
      <input
        name={name}
        value={value}
        onChange={(e) => {
          onChange(e);
        }}
        className={twMerge(
          `w-full px-2 text-slate-700 border border-divider  bg-white rounded  ${
            label && "mt-1"
          }  ${className} ${disabled && "opacity-40"} `
        )}
        ref={ref}
        disabled={disabled}
        {...rest}
      />
      {name && (
        <ErrorMessage name={name}>
          {(errMsg:any) => (
            <p className="font-poppins absolute text-[14px] text-start mt-0 text-red-500">
              {" "}
              {errMsg}{" "}
            </p>
          )}
        </ErrorMessage>
      )}
    </div>
  );
};

export default ATMTextField;