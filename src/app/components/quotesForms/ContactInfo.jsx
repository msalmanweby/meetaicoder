"use client";
import React, { useEffect, useState } from "react";
import InputField from "./InputField";
import SelectCountry from "./SelectCountry";
import FormButton from "./FormButton";

function ContactInfo({ setProgress, setContactFilled }) {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [company, setCompany] = useState("");
  const [allCountries, setAllCountries] = useState([]);
  const [formValid, setFormValid] = useState(false);

  // Function to calculate progress
  const calculateProgress = () => {
    const fields = [fname, lname, country, email, phoneNumber, company];
    const filledFields = fields.filter((field) => field.trim() !== "").length;
    return Math.floor((filledFields / fields.length) * 50);
  };

  // Function to check if all required fields are filled
  useEffect(() => {
    const fields = [fname, lname, country, email, phoneNumber, company];
    const filledFields = fields.filter((field) => field.trim() !== "").length;
    const progress = Math.floor((filledFields / fields.length) * 50);
    setProgress(progress);

    const isFormValid = filledFields === fields.length;
    setFormValid(isFormValid);
  }, [fname, lname, country, email, phoneNumber, company, setProgress]);

  // useEffect to fetch all countries
  useEffect(() => {
    const fetchAllCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const responseData = await response.json();

        if (response.ok) {
          setAllCountries(responseData);
        } else {
          console.error("Failed to fetch countries:", response.status);
        }
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };
    fetchAllCountries();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setContactFilled(true);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <InputField
          label="First Name"
          placeholder="John"
          type="text"
          value={fname}
          onChange={(e) => setFname(e.target.value)}
        />
        <InputField
          label="Last Name"
          placeholder="Doe"
          type="text"
          value={lname}
          onChange={(e) => setLname(e.target.value)}
        />
        <SelectCountry
          label="Country"
          placeholder="Choose Country"
          value={country}
          type="text"
          onChange={(e) => setCountry(e.target.value)}
          allCountries={allCountries}
        />
        <InputField
          label="Email"
          placeholder="someone@example.com"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputField
          label="Phone Number"
          placeholder="Phone Number"
          type="text"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <InputField
          label="Company"
          placeholder="Company"
          type="text"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
        <FormButton type={"submit"} text={"Next"} disabled={!formValid} />
      </form>
    </div>
  );
}

export default ContactInfo;
