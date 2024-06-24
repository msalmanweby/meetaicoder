import React from "react";
import PropTypes from "prop-types";

function ProgressBar({ progress }) {
  return (
    <div className="flex py-4">
      <div className="flex w-full p-1 rounded-full border-2 border-gray-900">
        <div
          className="bg-lime-600 h-full rounded-full ease-linear duration-500"
          style={{ width: `${progress}%` }}
        >
          <p className="text-white text-center text-[12px]">{progress}%</p>
        </div>
      </div>
    </div>
  );
}

ProgressBar.propTypes = {
  progress: PropTypes.number.isRequired,
};

export default ProgressBar;
