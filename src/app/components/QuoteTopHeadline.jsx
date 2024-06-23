import React from "react";

function QuoteTopHeadline({ heading }) {
  return (
    <div className="flex w-full items-center justify-center">
      <h1 className="text-[24px] sm:text-[32px] font-bold capitalize bg-gradient-to-l from-orange-500 to-red-500 inline-block text-transparent bg-clip-text">
        {heading}
      </h1>
    </div>
  );
}

export default QuoteTopHeadline;
