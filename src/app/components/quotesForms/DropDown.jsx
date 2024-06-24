"use client";
import React, { useState } from "react";
import Image from "next/image";

function DropDown({ item, selected, setSelected, type }) {
  const handleCategories = () => {
    if (selected.includes(item)) {
      setSelected(selected.filter((i) => i !== item));
    } else {
      setSelected([...selected, item]);
    }
  };

  const isChecked = selected.includes(item);

  return (
    <div>
      <button
        type="button"
        onClick={handleCategories}
        className="flex items-center gap-2 p-2 w-full "
      >
        {isChecked ? (
          <Image
            src={"/requestdemo/checkboxFill.svg"}
            width={24}
            height={24}
            alt="checkbox-fill"
            className="w-4 h-4"
          />
        ) : (
          <Image
            src={"/requestdemo/checkbox.svg"}
            width={24}
            height={24}
            alt="checkbox"
            className="w-4 h-4"
          />
        )}

        <p className="text-white text-[12px] font-medium">{item}</p>
      </button>
    </div>
  );
}

export default DropDown;
