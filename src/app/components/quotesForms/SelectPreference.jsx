"use client";
import React from "react";
import { useState } from "react";
import { ChevronDownCircle } from "lucide-react";
import PreferencesDropdown from "./PreferencesDropdown";

function SelectPreference({ label, preference, setPreference }) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const allPreferences = [
    {
      option: "Manage It Myself",
      benifit: "Full Control",
      detail: "Take full control of the service setup and management.",
    },
    {
      option: "Managed by Our Team",
      benifit: "Expert Management",
      detail: "Let our experts handle the setup and management. ",
    },
  ];
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={label}
        className="text-white text-[16px] font-bold capitalize"
      >
        {label}
      </label>
      <div className="flex justify-between bg-gray-900 p-2 rounded-[10px] border-2 border-gray-800 outline-none text-[14px] font-light text-gray-700 text-start">
        {preference !== "" ? (
          <p className="text-white">{preference}</p>
        ) : (
          <p>Choose Your Preference</p>
        )}
        <ChevronDownCircle
          onClick={handleClick}
          className={`flex shrink-0
              ${
                open
                  ? "rotate-180 duration-300 ease-in-out transition-all"
                  : "rotate-0 duration-300 ease-in-out transition-all"
              }`}
        />
      </div>
      <div
        className={`overflow-hidden w-full no-scrollbar transition-max-height duration-500 ease-in-out ${
          open ? "max-h-64 overflow-y-auto" : "max-h-0"
        }`}
      >
        <div>
          {allPreferences.map((item, index) => (
            <PreferencesDropdown
              key={index}
              item={item}
              preference={preference}
              setPreference={setPreference}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SelectPreference;
