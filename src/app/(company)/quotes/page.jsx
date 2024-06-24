"use client";
import React, { useState } from "react";
import QuoteTopHeadline from "../../components/QuoteTopHeadline";
import ContactInfo from "../../components/quotesForms/ContactInfo";
import ProgressBar from "../../components/quotesForms/ProgressBar";
import ProjectInfo from "../../components/quotesForms/ProjectInfo";

function page() {
  const [progress, setProgress] = useState(0);
  const [contactFilled, setContactFilled] = useState(false);

  return (
    <div className="flex flex-col w-full py-8 px-4">
      <ProgressBar progress={progress} />
      {contactFilled ? (
        <QuoteTopHeadline heading={"Project Information"} />
      ) : (
        <QuoteTopHeadline heading={"Contact Information"} />
      )}

      {contactFilled ? (
        <ProjectInfo setProgress={setProgress} />
      ) : (
        <ContactInfo
          setProgress={setProgress}
          setContactFilled={setContactFilled}
        />
      )}
    </div>
  );
}

export default page;
