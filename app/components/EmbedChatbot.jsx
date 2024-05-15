'use client'

import React, { useState, useEffect } from 'react'
import { Bot, SendHorizontal } from 'lucide-react';
import Image from 'next/image';
import { CircleX } from 'lucide-react';

const EmbedChatbot = () => {
    const [isOpen, setOpen] = useState(false)
    const [message, setMessage] = useState('')
    const [response, setResponse] = useState('')

    const handleClick = () => {
        setOpen(!isOpen)
    }
    useEffect(() => {
        if (isOpen) {
            // When menu is open, disable scrolling
            document.body.style.overflow = 'hidden';
        } else {
            // When menu is closed, enable scrolling
            document.body.style.overflow = 'auto';
        }

        // Cleanup: reset the overflow property when component unmounts
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

    const handleMessage = (e) => {
        setMessage(e.target.value)
    }

    const submitRequest = async () => {
        const response = await fetch('http://13.60.87.36:8000/info/api/QueryBot/', {
            method: 'POST', // or 'PUT', 'DELETE', etc.
            headers: {
                'Content-Type': 'application/json'
                // You may need to include other headers like authorization token
            },
            body: JSON.stringify({ question: message }),

        });
        const responseData = await response.json();

        if (response.status === 200) {
            // setData(responseData.response)
            setResponse(responseData)
        }
        else {
            setResponse("Some error occured")
        }
    }
    return (
        <div>
            <div className={`fixed bottom-20 right-10 p-5 z-[9999] cursor-pointer ${isOpen ? "scale-0" : ""}`}>
                <Image onClick={handleClick} className="absolute" width={50} height={50} src={'/chat.svg'} alt='chat' />

            </div>
            <div className={
                isOpen
                    ? "fixed flex flex-col items-end gap-4 right-0 bottom-0 w-full sm:hidden h-full bg-gray-500 p-10 ease-out duration-500 bg-opacity-50 backdrop-blur-lg"
                    : "fixed flex flex-col items-end right-[-100%] w-full h-full bottom-0 p-10 ease-in duration-500"
            }>
                {/* <div className='flex flex-col'> */}
                <CircleX className='text-white' onClick={handleClick} />
                <div className='flex flex-col justify-between gap-2 w-full h-full'>
                    <div className="flex flex-col gap-2 h-full w-full p-4 bg-transparent text-white text-sm rounded-xl border-2 border-white">
                        <div>
                            <p>{message}</p>
                        </div>
                        <div>
                            <p>{response}</p>
                        </div>
                    </div>
                    <div className='flex justify-between gap-2 p-2 rounded-xl border-2 border-white'>
                        <input type="text" id='message' placeholder='Enter Your Message Here' onChange={handleMessage} value={message} className={`flex w-full p-2  text-sm text-white bg-transparent h-auto focus:outline-none ${!isOpen ? "scale-0" : ""}`} />
                        <button className=" p-2 rounded-full bg-gray-950" onClick={submitRequest}>
                            <SendHorizontal className='text-white' />
                        </button>
                    </div>

                </div>
            </div>
        </div >
    )
}

export default EmbedChatbot
