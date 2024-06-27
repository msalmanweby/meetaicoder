'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { CircleX } from 'lucide-react';



function NavigationMenu() {
    const pathname = usePathname()
    const [isOpen, setOpen] = useState(false)
    const MenuItems = [
        {
            href: "/about", title: "About", isContct: false
        },
        {
            href: "/services", title: "Services", isContct: false

        },
        {
            href: "/requestdemo", title: "Request Demo", isContact: false

        },
        {
            href: "/contact", title: "Contact", isContact: true

        },
    ]

    const handleClick = () => {
        setOpen(!isOpen)
    }



    useEffect(() => {
        if (isOpen) {
            // When menu is open, disable scrolling
            document.body.style.overflow = 'hidden';
        } else {
            // When menu is closed, enable scrolling
            document.body.style.overflow = 'auto';
        }

        // Cleanup: reset the overflow property when component unmounts
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

    return (
        <nav className='flex top-0 sticky bg-gray-950 sm:px-8 px-2 py-2 justify-between items-center z-50'>
            <div className='flex flex-row gap-4 '>
                <Link href={"/"}>
                    <Image src="/logo.svg" width={264} height={36} alt='Meet-Ai Coder' />
                </Link>
            </div>
            <button className="menu-button sm:hidden" onClick={handleClick}>

                {isOpen ? (
                    <CircleX className='text-white' style={{ width: '40px', height: '40px' }} />
                ) : (
                    <Image src="/menubar.svg" width={40} height={40} alt='Meet-Ai Coder Menu' />
                )}
            </button>
            <div className={
                isOpen
                    ? "fixed left-0 top-0 min-w-[70%] sm:hidden min-h-screen p-10 bg-gray-950/30 ease-out duration-500 backdrop-blur-md z-[9999]"
                    : "fixed left-[-100%] min-h-screen top-0 p-10 ease-in duration-75"
            }>
                <div className='flex flex-col'>
                    <ul>
                        {MenuItems.map((item, index) => (
                            <li className="py-4" key={index}>
                                <Link onClick={handleClick} className='text-white' href={item.href}>
                                    {item.title}
                                </Link>

                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className='hidden sm:flex sm:gap-7'>
                {MenuItems.map((item, index) => (

                    <Link className={`p-2 justify-center items-center text-white text-sm font-semibold ${item.isContact ? " rounded-lg border-transparent bg-gradient-to-r from-orange-500 to-red-500" : "bg-none"} ${pathname === item.href ? "border-b-2 border-orange-500" : ''}`} key={index} href={item.href}>{item.title}</Link>
                ))}
            </div>

            {/* {
                isOpen && (
                    <aside className={`absolute flex justify-end right-4 top-12 shadow-md z-10`}>
                        <nav className='flex flex-col bg-gradient-to-r from-orange-500 to-red-500  px-8 py-2 rounded-sm'>
                            {MenuItems.map((item, index) => (
                                <Link className='text-white py-1' key={index} href={item.href}>
                                    {item.title}
                                </Link>
                            ))}
                        </nav>
                    </aside>
                )
            } */}
        </nav >

    )
}

export default NavigationMenu
