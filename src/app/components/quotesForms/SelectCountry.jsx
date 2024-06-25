"use client";
import React, { useState } from "react";
import Image from "next/image";

function SelectCountry({
  label,
  placeholder,
  value,
  type,
  onChange,
  allCountries,
}) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  // Sort countries alphabetically by common name
  const sortedCountries = [...allCountries].sort((a, b) =>
    a.name.common.localeCompare(b.name.common)
  );

  const handleInputChange = (e) => {
    setSearch(e.target.value);
    onChange(e); // Keep this if you need to handle changes in the parent component
  };

  const handleCountryClick = (country) => {
    setSearch(country.name.common);
    setOpen(false);
    onChange({ target: { value: country.name.common } }); // Manually trigger the onChange event
  };

  const filteredCountries = sortedCountries.filter((country) =>
    country.name.common.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex flex-col relative">
      <div className="flex flex-col gap-2">
        <label
          htmlFor={label}
          className="text-white text-[16px] font-bold capitalize"
        >
          {label}
        </label>
        <input
          type={type}
          placeholder={placeholder}
          value={search}
          onClick={() => setOpen(!open)}
          onChange={handleInputChange}
          className="bg-gray-900 p-2 rounded-[10px] border-2 border-gray-800 text-white outline-none items-center text-[14px] font-medium placeholder:text-gray-700"
        />
      </div>
      {open && (
        <div className="flex flex-col absolute w-full bg-white/30 backdrop-blur-sm top-20 rounded-[10px] overflow-y-auto shadow-lg z-10 max-h-60 border border-gray-300">
          {filteredCountries.length > 0 ? (
            filteredCountries.map((country) => (
              <div
                key={country.cca3}
                className="flex items-center gap-2 p-2 hover:bg-gray-200 cursor-pointer"
                onClick={() => handleCountryClick(country)}
              >
                <Image
                  src={country.flags.svg}
                  width={24}
                  height={16}
                  alt={country.name.common}
                  className="w-6 h-4"
                />
                <span className="text-white">{country.name.common}</span>
              </div>
            ))
          ) : (
            <div className="p-2 text-gray-500">No countries found</div>
          )}
        </div>
      )}
    </div>
  );
}

export default SelectCountry;
