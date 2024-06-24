import React from "react";

function PreferencesDropdown({ item, preference, setPreference }) {
  const handleClick = () => {
    setPreference(item.option);
  };

  return (
    <div className="flex items-center p-2 w-full">
      <div
        onClick={handleClick}
        className="flex flex-col gap-2 w-full border-gray-900 border-b-2 pb-2"
      >
        <div className="flex items-center justify-between text-white ">
          <p className="text-[12px] font-bold">{item.option}</p>
          <div className="flex shrink-0 bg-gray-50/40 backdrop-blur-sm p-1 rounded-lg">
            <p className="text-[12px] font-medium">{item.benifit}</p>
          </div>
        </div>
        <div className="flex">
          <p className="text-white text-[12px] font-normal">{item.detail}</p>
        </div>
      </div>
    </div>
  );
}

export default PreferencesDropdown;
