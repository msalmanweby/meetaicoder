import Link from "next/link";
import React from "react";
import Image from "next/image";

function Footer() {
  const MenuItems = [
    {
      href: "/about",
      title: "About",
    },
    {
      href: "/services",
      title: "Services",
    },
    {
      href: "/requestdemo",
      title: "Demo",
    },
    {
      href: "/contact",
      title: "Contact",
    },
  ];

  const SocialItems = [
    {
      href: "https://www.facebook.com/profile.php?id=61561040297684",
      title: "Facebook",
    },
    {
      href: "https://www.linkedin.com/company/meet-ai-coders",
      title: "LinkedIn",
    },
  ];

  const Legal = [
    {
      href: "/privacy-policy",
      title: "Privacy Policy",
    },
    {
      href: "/legal-terms",
      title: "Legal Terms",
    },
  ];

  return (
    <div>
      <div className="flex items-start p-4 text-white justify-between border-t-[1px] border-gray-900">
        <div className="hidden sm:flex">
          <Image src="/logo.svg" width={264} height={36} alt="Meet-Ai Coder" />
        </div>
        <div className="flex flex-col gap-2 p-2">
          <h1 className="sm:text-xl text-gray-300">Overview</h1>
          {MenuItems.map((item, index) => (
            <Link
              className="text-sm font-normal text-gray-500 hover:text-gray-300"
              key={index}
              href={item.href}
            >
              {item.title}
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-2 p-2">
          <h1 className="sm:text-xl text-gray-300">Social</h1>
          {SocialItems.map((item, index) => (
            <Link
              className="text-sm font-normal text-gray-500 hover:text-gray-300"
              key={index}
              href={item.href}
            >
              {item.title}
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-2 p-2">
          <h1 className="sm:text-xl text-gray-300">Legal</h1>
          {Legal.map((item, index) => (
            <Link
              className="text-sm font-normal text-gray-500 hover:text-gray-300"
              key={index}
              href={item.href}
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center text-white text-sm font-semibold">
        <p>© 2024 Meet-AI Coders. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
