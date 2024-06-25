"use client";
import React, { useEffect, useState } from "react";
import InputField from "./InputField";
import SelectCountry from "./SelectCountry";
import FormButton from "./FormButton";
import baseUrl from "../UrlPatterns";

function ContactInfo({ setProgress, setContactFilled }) {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [company, setCompany] = useState("");
  const [allCountries, setAllCountries] = useState([]);
  const [formValid, setFormValid] = useState(false);

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidPhoneNumber = (phoneNumber) => {
    const phoneRegex = /^[0-9\s-()+]+$/;
    return phoneRegex.test(phoneNumber);
  };

  // Function to check if all required fields are filled
  useEffect(() => {
    const fields = [fname, lname, country, email, phoneNumber, company];
    const filledFields = fields.filter((field) => field.trim() !== "").length;
    const progress = Math.floor((filledFields / fields.length) * 50);
    setProgress(progress);

    const isEmailValid = isValidEmail(email);
    const isPhoneNumberValid = isValidPhoneNumber(phoneNumber);

    const isFormValid =
      filledFields === fields.length && isEmailValid && isPhoneNumberValid;
    setFormValid(isFormValid);
  }, [fname, lname, country, email, phoneNumber, company, setProgress]);

  const paylod = {
    fname: fname,
    lname: lname,
    country: country,
    email: email,
    phoneNumber: phoneNumber,
    company: company,
  };

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setContactFilled(true);

    const response = await fetch(`${baseUrl}info/postContactInfo/`, {
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
