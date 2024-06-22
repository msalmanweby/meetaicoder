import React from 'react'

function ResultsCount({count}) {
  return (
    <div className='text-white text-[14px] font-medium'>
        {count!= 0 || 1 ?  <p>{count} result found</p> : <p>{count} results found</p>}
    </div>
  )
}

export default ResultsCount
