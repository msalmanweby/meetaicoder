import Link from 'next/link'
import React from 'react'

function Footer() {
  const MenuItems = [
    {
      href: "/about", title: "About"
    },
    {
      href: "/services", title: "Services"

    },
    {
      href: "/blogs", title: "Blogs"

    },
    {
      href: "/contact", title: "Contact"

    },
  ]

  const SocialItems = [
    {
      href: "/about", title: "Instgram"
    },
    {
      href: "/services", title: "Twitter"

    },
    {
      href: "/blogs", title: "Github"

    },
    {
      href: "/contact", title: "Facebook"

    },
  ]

  const Legal = [
    {
      href: "/about", title: "Privacy Policy"
    },
    {
      href: "/services", title: "Legal Terms"

    }
  ]

  return (
    <div className='flex items-start p-4 text-white justify-between'>
      <div className='flex flex-col gap-2 p-2'>
        <h1>Overview</h1>
        {MenuItems.map((item, index) => (
          <Link key={index} href={item.href}>{item.title}</Link>
        ))}
      </div>
      <div className='flex flex-col gap-2 p-2'>
        <h1>Social</h1>
        {SocialItems.map((item, index) => (
          <Link key={index} href={item.href}>{item.title}</Link>
        ))}
      </div>
      <div className='flex flex-col gap-2 p-2'>
        <h1>Legal</h1>
        {Legal.map((item, index) => (
          <Link key={index} href={item.href}>{item.title}</Link>
        ))}
      </div>

    </div>
  )
}

export default Footer
