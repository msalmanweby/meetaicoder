"use client";
import React, { useState } from "react";
import QuoteTopHeadline from "../../components/QuoteTopHeadline";
import ContactInfo from "../../components/quotesForms/ContactInfo";
import ProgressBar from "../../components/quotesForms/ProgressBar";
import ProjectInfo from "../../components/quotesForms/ProjectInfo";
import ThankYou from "../../components/quotesForms/ThankYou";

function Page() {
  const [progress, setProgress] = useState(0);
  const [contactFilled, setContactFilled] = useState(false);
  const [projectFilled, setProjectFilled] = useState(false);
  const [formId, setFormID] = useState("");

  const handleSetContactProgress = (contactProgress) => {
    const totalProgress = contactProgress + (contactFilled ? 50 : 0);
    setProgress(totalProgress);
  };

  const handleSetProjectProgress = (projectProgress) => {
    const totalProgress = projectProgress + 50;
    setProgress(totalProgress);
  };

  return (
    <div className="flex flex-col w-full items-center justify-center">
    <div className="flex flex-col w-full sm:w-[50%] py-8 px-4">
      {projectFilled ? (
        <ThankYou/>
      ) : (
        <React.Fragment>
          <ProgressBar progress={progress} />
          {contactFilled ? (
            <QuoteTopHeadline heading={"Project Information"} />
          ) : (
            <QuoteTopHeadline heading={"Contact Information"} />
          )}

          {contactFilled ? (
            <ProjectInfo
              setProgress={handleSetProjectProgress}
              setProjectFilled={setProjectFilled}
              formId={formId}
            />
          ) : (
            <ContactInfo
              setProgress={handleSetContactProgress}
              setContactFilled={setContactFilled}
              setFormID={setFormID}
            />
          )}
        </React.Fragment>
      )}
    </div>
    </div>
  );
}

export default Page;
