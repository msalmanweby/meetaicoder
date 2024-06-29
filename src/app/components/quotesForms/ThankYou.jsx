import React from "react";
import Link from "next/link";

function ThankYou() {
  return (
    <div className="flex flex-col w-full min-h-[640px] items-center justify-center gap-4">
      <h1 className="text-white text-[24px] text-center capitalize font-semibold">
        Thank you for submitting your request!
      </h1>
      <p className="text-white text-[18px] text-center">
        We appreciate your interest. Our team will reach out to you shortly.
      </p>
      <Link
        className="text-white p-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg hover:from-orange-600 hover:to-red-600 transition duration-300"
        href="/"
      >
        Go to Home
      </Link>
    </div>
  );
}

export default ThankYou;
