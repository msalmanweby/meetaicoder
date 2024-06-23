import React from "react";
import QuoteTopHeadline from "../../components/QuoteTopHeadline";
import ContactInfo from "../../components/quotesForms/ContactInfo";

function page() {
  return (
    <div className="flex flex-col w-full py-8 px-4">
      <QuoteTopHeadline heading={"Contact Information"} />
      <ContactInfo />
    </div>
  );
}

export default page;
