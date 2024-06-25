import { useEffect, useState } from "react";
import React from "react";

// Function to validate if the price is a number with no spaces
const isValidPrice = (price) => {
  const priceRegex = /^\d+(\.\d{1,2})?$/;
  return priceRegex.test(price);
};

function BudgetDropdown({ item, budget, setBudget }) {
  const [customPrice, setCustomPrice] = useState("");
  const [isCustom, setIsCustom] = useState(false);
  const [isPriceValid, setIsPriceValid] = useState(true);

  useEffect(() => {
    if (customPrice === "" || isValidPrice(customPrice)) {
      setBudget("$ " + customPrice);
    }
  }, [customPrice, setBudget]);

  const handleCustomPriceChange = (e) => {
    const value = e.target.value;
    setCustomPrice(value);
    setIsPriceValid(isValidPrice(value));
  };

  const handleBudgetClick = () => {
    if (item === "Choose Custom") {
      setIsCustom(true);
      setCustomPrice(""); // Clear custom price when switching to custom
    } else {
      setIsCustom(false);
      setBudget(item); // Update budget state with non-custom value
    }
  };

  return (
    <div className="flex items-center gap-2 p-2 w-full">
      <p
        onClick={handleBudgetClick}
        className={`text-white text-[12px] font-medium cursor-pointer pb-2 border-b-2 border-gray-900 w-full transition-colors duration-300 ${
          isCustom
            ? "flex justify-between w-full items-center"
            : "hover:border-gray-700"
        }`}
      >
        {item}
        {isCustom && (
          <input
            type="text"
            value={customPrice}
            onChange={handleCustomPriceChange}
            className={`ml-2 w-1/4 bg-gray-800 text-white outline-none border-2 px-2 py-1 rounded-lg transition-all duration-300 ${
              isPriceValid
                ? "border-gray-700 focus:border-lime-500"
                : "border-red-500 focus:border-red-500"
            }`}
            placeholder="Enter price"
          />
        )}
      </p>
    </div>
  );
}

export default BudgetDropdown;
