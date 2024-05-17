import React from 'react'

function Testimonials({ score, title }) {
    return (
        <div className='flex flex-col justify-center items-center gap-2 hover:animate-pulse'>
            <div className="capitalize sm:text-[20px] text-[12px] text-white font-bold leading-none text-center"><p>{score}</p></div>
            <div className="capitalize sm:text-[14px] text-[8px] text-white font-normal leading-none text-center"><p>{title}</p></div>
        </div>
    )
}

export default Testimonials
