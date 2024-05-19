'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

const Button = ({ type, value, link }) => {

    const router = useRouter()


    const handleClick = () => {
        router.push(link)
    }

    if (type == "action") {
        return (
            <button className='flex item-center justify-center bg-gradient-to-r from-orange-500 to-red-500 text-white p-2 rounded-lg text-sm font-semibold' onClick={handleClick}>
                {value}
            </button>
        )
    } else {
        return (
            <button className='flex item-center justify-center bg-transparent border-2 border-orange-500 text-orange-500 p-2 rounded-lg text-sm font-semibold' onClick={handleClick}>
                {value}
            </button>
        )
    }
}

export default Button
