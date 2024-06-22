"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation'
import Logout from './dashboard/Logout';

function AdminSideNav() {
    const menuItems = [
        {src: "/dashboard/navigation/demo.svg", href: "/admin/demo-requests", title: "Demo Requests"},
        {src: "/dashboard/navigation/contact.svg", href: "/admin/contact-requests", title: "Contact Requests"},
        {src: "/dashboard/navigation/quotes.svg", href: "/admin/quotes-requests", title: "Quotes Requests"},
    ];
    const pathname = usePathname()

    return (
        <div className='flex flex-col border-r-2 p-4 border-white w-auto h-screen justify-between items-center'>
            <div className="flex flex-col gap-4 items-center">
                {menuItems.map((item, index) => (
                    <Link key={index} href={item.href} className={`flex p-2 rounded-[10px] ${pathname === item.href ? "border-transparent bg-gradient-to-r from-orange-500 to-red-500" : "bg-none"}`}>
                        <Image src={item.src} width={24} height={24} alt={item.title}/>
                    </Link>
                ))}
            </div>
            <Logout/>
        </div>
    )
        
}

export default AdminSideNav;
