import Image from "next/image";
import React from "react";

function SelectedItem({ item, selected, setSelected }) {
  const handleClick = () => {
    setSelected(selected.filter((i) => i !== item));
  };

  return (
    <div className="flex items-center px-2 py-1 bg-white/10 backdrop-blur-sm gap-1 rounded-full">
      <p className="text-white text-[12px] font-medium">{item}</p>
      <button type="button" onClick={handleClick}>
        <Image
          src={"/requestdemo/close.svg"}
          width={16}
          height={16}
          alt="close"
        />
      </button>
    </div>
  );
}

export default SelectedItem;
