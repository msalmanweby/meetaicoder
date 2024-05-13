'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'



function NavigationMenu() {
    const pathname = usePathname()
    const MenuItems = [
        {
            href: "/about", title: "About", isContct: false
        },
        {
            href: "/services", title: "Services", isContct: false

        },
        {
            href: "/blogs", title: "Blogs", isContct: false

        },
        {
            href: "/contact", title: "Contact", isContact: true

        },
    ]

    return (
        <nav className='flex  py-2 justify-between items-center '>
            <div className='flex flex-row gap-4 '>
                <Link href={"/"}>
                    <Image src="/logo.svg" width={264} height={36} alt='Meet-Ai Coder' />
                </Link>
            </div>
            <Image className='sm:scale-0' src="/menubar.svg" width={40} height={40} alt='Meet-Ai Coder Menu' />
            <div className='hidden sm:flex gap-7'>
                {MenuItems.map((item, index) => (

                    <Link className={`p-2 justify-center items-center text-white text-sm font-semibold ${item.isContact ? " rounded-lg border-transparent bg-gradient-to-r from-orange-500 to-red-500" : "bg-none"} ${pathname === item.href ? "border-b-2 border-orange-500" : ''}`} key={index} href={item.href}>{item.title}</Link>
                ))}
            </div>
        </nav >
    )
}

export default NavigationMenu
