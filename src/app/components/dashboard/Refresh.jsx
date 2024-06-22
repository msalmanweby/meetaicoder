"use client"
import React, { useEffect } from 'react'
import Image from 'next/image'
import { useState } from 'react';

function Refresh({handleRefresh}) {
  const [refresh, setReresh] = useState(false);


  useEffect(() => {

    let rotationTimeout;

    if (refresh) {
      rotationTimeout = setTimeout(()=> {
        setReresh(false)
      }, 5000);
    }
  }, [refresh]);


  const handleClick = () => {
    setReresh(true)
    handleRefresh();

  }

  return (
    <button onClick={handleClick} disabled = {refresh}>
      <Image
        src={"/dashboard/refresh.svg"}
        width={40}
        height={40}
        alt='refresh'
        className={refresh ? `animate-spin duration-1000 ease-in`:""}
      />
    </button>
  )
}

export default Refresh
