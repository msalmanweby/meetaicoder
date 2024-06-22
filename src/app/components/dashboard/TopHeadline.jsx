import React from 'react'

function TopHeadline({heading}) {
  return (
    <div className="flex px-8 py-4 justify-start items-center">
        <h1 className='text-white font-bold text-[16px]'>
            {heading}
        </h1>
    </div>
  )
}

export default TopHeadline
