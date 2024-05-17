import React from 'react'
import Image from 'next/image'

function AvailableComponent() {
    return (

        <div className="flex flex-row gap-2 justify-center items-center p-2 sm:p-4">
            <div className='relative w-3 h-3 items-center justify-center'>
                <Image className='absolute animate-ping' src='/online.svg' width={12} height={12} alt="Meet-AI coder available" />
                <Image className='absolute' src='/online.svg' width={12} height={12} alt="Meet-AI coder available" />
            </div>
            <p className="leading-normal capitalize font-medium text-[14px] text-white">Available for work</p>
        </div>
    )
}

export default AvailableComponent
