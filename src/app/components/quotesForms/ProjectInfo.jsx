"use client";
import React, { useState, useEffect } from "react";
import InputField from "./InputField";
import SelectProjectCategory from "./SelectProjectCategory";
import SelectBudget from "./SelectBudget";
import SelectPreference from "./SelectPreference";
import FormButton from "./FormButton";

function ProjectInfo({ setProgress, setProjectFilled }) {
  const [projectName, setProjectName] = useState("");
  const [projectCategory, setProjectCategory] = useState([]);
  const [link, setLink] = useState("");
  const [budget, setBudget] = useState("");
  const [prefrence, setPreference] = useState("");
  const [formValid, setFormValid] = useState(false);

  const paylod = {
    projectName: projectName,
    projectCategory: projectCategory,
    link: link,
    budget: budget,
    prefrence: prefrence,
  };

  useEffect(() => {
    const fields = [projectName, projectCategory, budget, prefrence];
    const isFieldFilled = (field) => {
      if (Array.isArray(field)) {
        return field.length > 0;
      } else {
        return field.trim() !== "";
      }
    };
    const filledFields = fields.filter(isFieldFilled).length;
    const progress = Math.floor((filledFields / fields.length) * 50);
    setProgress(progress);

    const isFormValid = filledFields === fields.length;
    setFormValid(isFormValid);
  }, [projectName, projectCategory, budget, prefrence, setProgress]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProjectFilled(true);
    const response = await fetch(`${baseUrl}info/postProjectInfo/`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(paylod),
    });

    if (response.status === 200) {
      console.log("Contact Submitted");
    } else {
      console.log("Error submission");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
          placeholder="Any Reference Link"
          type="text"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
        <SelectBudget
          label="Estimated Budget"
          budget={budget}
          setBudget={setBudget}
        />
        <SelectPreference
          label={"Choose Preference"}
          preference={prefrence}
          setPreference={setPreference}
        />
        <FormButton type={"submit"} text={"Submit"} disabled={!formValid} />
      </form>
    </div>
  );
}

export default ProjectInfo;
