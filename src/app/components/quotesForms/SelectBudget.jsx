"use client";
import React, { useState } from "react";
import { ChevronDownCircle } from "lucide-react";
import BudgetDropdown from "./BudgetDropdown";

function SelectBudget({ label, budget, setBudget }) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const allBudgetValues = [
    "Below $1000",
    "$1000-$5000",
    "$5000-$10000",
    "$10000-$50000",
    "Above $50000",
    "Undetermined",
    "Choose Custom",
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
        {budget !== null && budget !== undefined ? (
          <p className="text-white">{budget}</p>
        ) : (
          <p>Select Your Budget</p>
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
          {allBudgetValues.map((item, index) => (
            <BudgetDropdown
              key={index}
              item={item}
              budget={budget}
              setBudget={setBudget}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SelectBudget;
