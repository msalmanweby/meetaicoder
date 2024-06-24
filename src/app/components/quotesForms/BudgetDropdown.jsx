import { useEffect, useState } from "react";
import React from "react";

function BudgetDropdown({ item, budget, setBudget }) {
  const [customPrice, setCustomPrice] = useState("");
  const [isCustom, setIsCustom] = useState(false);

  const handleBudget = () => {
    if (item === "Choose Custom") {
      setIsCustom(true);
    } else {
      setBudget(item); // Update budget state
    }
  };

  useEffect(() => {
    setBudget("$ " + customPrice);
  }, [customPrice]);

  return (
    <div className="flex items-center gap-2 p-2 w-full">
      <p
        onClick={handleBudget}
        className={`text-white text-[12px] font-medium cursor-pointer pb-2 border-b-2 border-gray-900 w-full ${
          isCustom && "flex justify-between w-full items-center"
        }`}
      >
        {item}
        {isCustom && (
          <input
            type="text"
            value={customPrice}
            onChange={(e) => setCustomPrice(e.target.value)}
            className="flex w-16 bg-transparent outline-none border-2 border-white px-2 py-1 rounded-lg"
          />
        )}
      </p>
    </div>
  );
}

export default BudgetDropdown;
