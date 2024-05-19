'use client'
import React from 'react'

function WorkingStyle({ number, heading, detail }) {
    return (
        <div className="flex flex-col gap-2 items-center justify-center w-full">
            <div className="flex w-[100px] h-[100px] rounded-full bg-gradient-to-r from-orange-500 to-red-500 items-center justify-center">
                <p className='text-white font-bold text-[20px] '>
                    {number}
                </p>
            </div>
            <div className="flex">
                <h1 className='text-white font-bold text-[20px] '>
                    {heading}
                </h1>
            </div>
            <div className="flex">
                <p className='text-white font-normal text-[14px] w-60 capitalize'>
                    {detail}
                </p>
            </div>
        </div>
    )
}

export default WorkingStyle
