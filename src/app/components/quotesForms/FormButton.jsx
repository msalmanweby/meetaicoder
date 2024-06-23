import React from "react";

function FormButton({ text, type, disabled }) {
  return (
    <button
      type={type}
      className={`flex bg-gradient-to-r from-orange-500 to-red-500 text-white text-[16px] font-bold px-8 py-2 items-center justify-center ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
      disabled={disabled}
    >
      {text}
    </button>
  );
}

export default FormButton;
