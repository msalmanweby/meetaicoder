import React from 'react'
import Image from 'next/image'

function ContactCard({ image, heading, content, alttext }) {
    return (
        <div className="flex flex-col gap-2 p-2 rounded-[10px] bg-gray-700">
            <div className="flex gap-4 items-center justify-start">
                <Image src={image} width={32} height={32} alt={alttext} />
                <h1 className="text-white font-medium text-[14px] capitalize">{heading}</h1>
            </div>
            <div className="flex">
                <p className="text-white font-medium text-[12px] capitalize">{content}</p>
            </div>
        </div>
    )
}

export default ContactCard
