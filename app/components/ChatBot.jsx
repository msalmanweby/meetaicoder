'use client'
import { useState, useEffect } from "react"
import React from 'react'
import Image from "next/image"

function ChatBot() {
    const [query, setQuery] = useState("")
    const [data, setData] = useState("")

    const handleQuery = (event) => {
        const new_query = event.target.value
        setQuery(new_query)
    }

    const submitQuery = async () => {
        const response = await fetch("http://192.168.159.48:8000/info/api/GetInfo/", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ query: query }),
        });
        const responseData = await response.json();
        setData(responseData.response)

    }
    useEffect(() => {
        if (data) {
            setQuery(""); // Reset query back to null when data changes
        }
    }, [data]);

    return (
        <div className="text-gray-500">
            <div className="flex flex-col justify-between w-[400px] rounded-xl border-2 border-gray-900 p-4">
                <div className="h-[320px]">{data}</div>
                <div className="flex gap-2 items-center justify-center">
                    <textarea id="prompt_area" rows="1" placeholder="Ask a question" onChange={handleQuery} value={query} className=" w-full border-2 border-gray-900 focus:outline-none rounded-full bg-gray-950 p-2 text-gray-500 resize-none"></textarea>
                    <button onClick={submitQuery}>
                        <Image src="send_icon.svg" width={24} height={24} alt="query" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ChatBot
