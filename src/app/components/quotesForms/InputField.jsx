"use client";
import React, { useEffect } from "react";

function InputField({ label, placeholder, type, value, onChange }) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={label}
        className="text-white text-[14px] font-bold capitalize"
      >
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="bg-gray-900 p-2 rounded-[10px]  border-2 border-gray-800 text-white outline-none items-center text-[14px] font-medium placeholder:text-gray-700"
      />
    </div>
  );
}

export default InputField;
