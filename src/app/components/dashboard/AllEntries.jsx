import React, { useState } from 'react'
import Image from 'next/image'

function AllEntries({item}) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open)
  };
    
  return (
    <>
      <div className='flex justify-between py-4 items-center w-full'>
          <h1 className='text-white font-bold text-[16px]'>{item.company}</h1>
          <button
            onClick={handleOpen}
            className='flex p-2 gap-2 justify-center items-center bg-lime-600 rounded-[10px]'>
              <h1 className='text-white font-medium text-[14px]'>View</h1>
              <Image 
                src='/dashboard/dropdown.svg' 
                height={16} 
                width={16} 
                alt='dropdown'
                className={open ? "rotate-180 duration-300 ease-in-out" : "duration-300 ease-linear"}
              />
          </button>
      </div>
      <div className={`overflow-hidden w-full transition-max-height duration-500 ease-linear no-scrollbar ${open ? 'max-h-64 overflow-y-auto' : 'max-h-0'}`}>
        <div className='flex flex-col p-4 items-start bg-gray-950 border-[0.5px] border-gray-900 rounded-[10px] text-white text-[16px] font-medium'>
          <p className='capitalize'>
            Full Name: {item.fname + " " + item.lname}
          </p>
          <p>
            Email: {item.email}
          </p>
          <p>
            Phone Number: {item.phone_number}
          </p>
          <p className='capitalize'>
            Country: {item.country}
          </p>
          <p className='capitalize'>
            Categories: {item.categories.join(', ')}
          </p>
        </div>
      </div>
    </>
  )
};

export default AllEntries;
