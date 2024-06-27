import React from 'react'
import Image from 'next/image'

function AvailableComponent() {
    return (

        <div className="flex flex-row gap-2 justify-center items-center p-2 sm:p-4 w-full">
            <div className='relative w-4 h-4 items-center justify-center'>
                <Image className='absolute animate-ping' src='/online.svg' width={16} height={16} alt="Meet-AI coder available" />
                <Image className='absolute' src='/online.svg' width={20} height={20} alt="Meet-AI coder available" />
            </div>
            <p className="leading-normal capitalize font-medium text-[14px] text-white">Available for work</p>
        </div>
    )
}

export default AvailableComponent
