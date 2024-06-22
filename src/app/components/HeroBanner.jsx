import React from 'react'

function HeroBanner({ first, mid, last, pargragraph, url }) {
    return (
        <div className={`flex flex-col items-center justify-center h-[286px] lg:h-[768px] w-full`}
            style={{
                backgroundImage: `url(${url})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}>
            <div className='flex flex-row gap-2 drop-shadow-[0_4px_4px_rgba(0,0,0,50)]'>

                <h1 className='text-[24px] sm:text-[32px] font-bold capitalize bg-gradient-to-l from-orange-500 to-red-500 inline-block text-transparent bg-clip-text'>{first}</h1>
                <h1 className='text-[24px] sm:text-[32px] text-white font-normal capitalize '>{mid}</h1>
                <h1 className='text-[24px] sm:text-[32px] font-bold capitalize bg-gradient-to-l from-orange-500 to-red-500 inline-block text-transparent bg-clip-text'>{last}</h1>
            </div>
            <div className="flex flex-row text-[20px] font-normal text-center text-white drop-shadow-[0_4px_4px_rgba(0,0,0,50)]">
                <p>{pargragraph}</p>
            </div>
        </div>
    )
}

export default HeroBanner
