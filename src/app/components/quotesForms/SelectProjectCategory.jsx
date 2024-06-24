"use client";
import React, { useState } from "react";
import Image from "next/image";
import Dropdown from "./DropDown";
import SelectedItem from "./SelectedItem";
import { ChevronDownCircle } from "lucide-react";

function SelectProjectCategory({ label, selected, setSelected }) {
  const [open, setOpen] = useState(false);

  const projectCategories = [
    "Web-Application",
    "Mobile-Application",
    "Desktop-Application",
    "Game-Development",
    "AI/Machine-Learning",
    "Data-Science",
    "Cloud-Computing",
    "Internet-of-Things (IoT)",
    "Blockchain",
    "Augmented-Reality/Virtual-Reality (AR/VR)",
    "Embedded-Systems",
    "Cybersecurity",
    "DevOps",
    "E-commerce",
    "Fintech",
    "Healthcare-Technology",
    "Educational-Technology",
    "Robotics",
    "Big-Data",
    "Social-Networking",
    "Automation",
    "Telecommunications",
    "Digital-Marketing",
    "Multimedia/Entertainment",
    "SaaS (Software as a Service)",
  ];

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={label}
        className="text-white text-[16px] font-bold capitalize"
      >
        {label}
      </label>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between bg-gray-900 p-2 rounded-[10px] border-2 border-gray-800 outline-none text-[14px] font-light text-gray-700 text-start">
          {selected.length > 0 ? (
            <div className="flex flex-wrap gap-2 w-auto">
              {selected.map((item, index) => (
                <SelectedItem
                  key={index}
                  item={item}
                  selected={selected}
                  setSelected={setSelected}
                />
              ))}
            </div>
          ) : (
            <p>Choose Categories</p>
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
            {projectCategories.map((item, index) => (
              <Dropdown
                key={index}
                item={item}
                type={"projectCategories"}
                selected={selected}
                setSelected={setSelected}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelectProjectCategory;
