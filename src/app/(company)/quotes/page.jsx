"use client";
import React, { useState } from "react";
import QuoteTopHeadline from "../../components/QuoteTopHeadline";
import ContactInfo from "../../components/quotesForms/ContactInfo";
import ProgressBar from "../../components/quotesForms/ProgressBar";
import ProjectInfo from "../../components/quotesForms/ProjectInfo";

function Page() {
  const [progress, setProgress] = useState(0);
  const [contactFilled, setContactFilled] = useState(false);
  const [projectFilled, setProjectFilled] = useState(false);

  const handleSetContactProgress = (contactProgress) => {
    const totalProgress = contactProgress + (contactFilled ? 50 : 0);
    setProgress(totalProgress);
  };

  const handleSetProjectProgress = (projectProgress) => {
    const totalProgress = projectProgress + 50;
    setProgress(totalProgress);
  };

  return (
    <div className="flex flex-col w-full py-8 px-4">
      {projectFilled ? (
        <div className="h-80">
          <p className="text-white capitalize text-center">
            Thankyou for submitting request, Our agents will contact your
            shortly
          </p>
        </div>
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
            />
          ) : (
            <ContactInfo
              setProgress={handleSetContactProgress}
              setContactFilled={setContactFilled}
            />
          )}
        </React.Fragment>
      )}
    </div>
  );
}

export default Page;
