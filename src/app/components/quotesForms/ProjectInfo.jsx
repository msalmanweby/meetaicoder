"use client";
import React, { useState } from "react";
import InputField from "./InputField";
import SelectProjectCategory from "./SelectProjectCategory";
import SelectBudget from "./SelectBudget";

function ProjectInfo({ setProgress }) {
  const [projectName, setProjectName] = useState("");
  const [projectCategory, setProjectCategory] = useState([]);
  const [link, setLink] = useState("");
  const [budget, setBudget] = useState("");
  const [prefrence, setPreference] = useState("");
  const [requiredService, serRequiredServices] = useState([]);

  return (
    <div>
      <form action="" className="flex flex-col gap-4">
        <InputField
          label="Project Name"
          placeholder="Project Name"
          type="text"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
        />
        <SelectProjectCategory
          label={"Project Category"}
          selected={projectCategory}
          setSelected={setProjectCategory}
        />
        <InputField
          label="Reference Link (If Applicable)"
          placeholder="Any Refrenece Link"
          type="text"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
        <SelectBudget
          label="Estimated Budget"
          budget={budget}
          setBudget={setBudget}
        />
      </form>
    </div>
  );
}

export default ProjectInfo;
