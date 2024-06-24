import { useEffect, useState } from "react";
import React from "react";

function BudgetDropdown({ item, budget, setBudget }) {
  const [isCustom, setIsCustom] = useState(false);

  const handleBudget = () => {
    if (item === "Choose Custom") {
      setIsCustom(true);
    } else {
      setBudget(item); // Update budget state
    }
  };

  return (
    <div className="flex items-center gap-2 p-2 w-full">
      <p
        onClick={handleBudget}
        className={`text-white text-[12px] font-medium cursor-pointer ${
          isCustom && "justify-between"
        }`}
      >
        {item}
        {isCustom && <input type="text" />}
      </p>
    </div>
  );
}

export default BudgetDropdown;
