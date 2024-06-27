'use client'

import React, { useState, useEffect, useRef } from 'react'
import { Bot, SendHorizontal } from 'lucide-react';
import Image from 'next/image';
import { CircleX } from 'lucide-react';
import baseUrl from './UrlPatterns';
import Link from 'next/link';

const EmbedChatbot = () => {
    const [isOpen, setOpen] = useState(false)
    const [message, setMessage] = useState('')
    const [chatHistory, setChatHistory] = useState([]);
    const containerRef = useRef(null);
    const [sessionId, setSessionId] = useState(null)


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

    function generateSessionId(length) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let sessionId = '';
        for (let i = 0; i < length; i++) {
            sessionId += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return sessionId;
    }

    useEffect(() => {
        const sessionId = generateSessionId(10)
        setSessionId(sessionId)
    }, [])

    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
    }, [chatHistory]);


    const handleMessage = (e) => {
        setMessage(e.target.value)
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            // Call your function here
            // For example:
            // yourFunction(message);
            submitRequest()
            // You can prevent the default behavior (e.g., form submission) if needed
            event.preventDefault();
        }
    };

    const submitRequest = async () => {
        const inputQuery = message;
        const newChatItem = { query: inputQuery, response: '' };
        setChatHistory([...chatHistory, newChatItem]);
        setMessage('');

        try {
            const response = await fetch(`${baseUrl}info/queryBot/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ user_input: inputQuery, session_id: sessionId }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const reader = response.body.getReader();
            let receivedText = '';

            while (true) {
                const { done, value } = await reader.read();
                // Concatenate the received chunk of text
                receivedText += new TextDecoder().decode(value);
                newChatItem.response = receivedText;
                setChatHistory([...chatHistory, newChatItem]);
                setTimeout(() => {

                }, 5000);

                if (done) {
                    break;
                }

            }

            // Once the stream ends, update chat history with the received text

        } catch (error) {
            console.error('Error fetching data:', error);
            newChatItem.response = "Some error occurred";
            setChatHistory([...chatHistory, newChatItem]); // Update chat history with error response
        }
    };
    return (
        <div>
            <div className={`fixed bottom-20 right-10 p-5 z-[9999] cursor-pointer ${isOpen ? "scale-0" : ""}`}>
                <Image onClick={handleClick} className="absolute" width={50} height={50} src={'/chat.svg'} alt='chat' />

            </div>
            <div className={
                isOpen
                    ? "fixed flex flex-col items-start justify-center gap-8 right-0 bottom-0 w-full h-full bg-white/30 p-4 sm:p-8 ease-out duration-700 bg-opacity-50 backdrop-blur-lg z-[9999]"
                    : "fixed flex flex-col items-start justify-center right-[-100%] w-full h-full bottom-0 p-4 sm:p-8 gap-8 ease-in duration-700 z-[9999]"
            }>
                <div className='flex w-full justify-between items-center'>

                    <Link href={"/"}>
                        <Image src="/logo.svg" width={264} height={36} alt='Meet-Ai Coder' />
                    </Link>



                    <CircleX className='text-white w-8 h-8' onClick={handleClick} />

                </div>
                <div className="flex flex-col h-full w-full p-8 gap-8 overflow-y-auto no-scrollbar scroll-smooth transition-all duration-700 text-[14px] sm:text-[16px] font-medium" ref={containerRef}>
                    {chatHistory.map((chatItem, index) => (
                        <React.Fragment key={index}>
                            <div className="flex items-center justify-end">
                                <div className="flex p-2 justify-center items-center bg-gradient-to-r from-orange-500 to-red-500 rounded-lg shadow-lg shadow-orange-500/50 text-white">
                                    {chatItem.query}
                                </div>
                            </div>
                            {chatItem.response && (
                                <div className="flex items-center justify-start">
                                    <div className="flex p-2 justify-center items-center text-white">
                                        {chatItem.response}
                                    </div>
                                </div>
                            )}
                        </React.Fragment>
                    ))}
                </div>
                <div className="flex border-2 border-gray-500  w-full h-20 rounded-full px-4 sm:px-8 justify-between items-center focus-within:border-white ">
                    <div className="flex flex-grow">
                        <input
                            className="w-full bg-transparent outline-none  placeholder-gray-400 text-white text-[14px] sm:text-[16px] font-medium"
                            type="text"
                            placeholder="Ask MeetAI Coders Agent"
                            onChange={handleMessage}
                            value={message}
                            onKeyDown={handleKeyDown}
                            autoFocus
                        />
                    </div>
                    <div className="flex gap-8">
                        {/* <button onClick={submitRequest}>

                            <Image src={'/microphone.svg'} width={32} height={32} alt='message meetai coders' />
                        </button> */}
                        <button onClick={submitRequest}>

                            <Image className='w-6 h-6 sm:w-8 sm:h-8' src={'/send_icon.svg'} width={32} height={32} alt='message meetai coders' />
                        </button>
                    </div>
                </div>

            </div>
        </div >
    )
}

export default EmbedChatbot
