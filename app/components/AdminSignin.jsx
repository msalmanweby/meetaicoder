'use client'
import React from "react"
import { useState } from "react"
import baseUrl from "@/app/components/UrlPatterns"

function AdminSignin() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleUsername = () => {
        setUsername(username)
    }

    const handlePassword = () => {
        setPassword(password)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const payload = {
            username: username,
            password: password
        }
        const response = await fetch(`${baseUrl}authentication/SignIn/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload),
        });

        if (response.ok) {
            console.log(response.json())
        }

    }
  return (
    <form onSubmit={handleSubmit} action="" className="flex flex-col gap-2">
        <label htmlFor="username" className="text-white text-[16px] font-medium capitalize">Username</label>
        <input type="text" placeholder="Username" value={username} onChange={handleUsername} className="flex h-10 p-2 items-center self-stretch border-[1px] border-gray-700 rounded-lg text-white text-[14px] font-normal  placeholder:text-gray-700 bg-transparent"/>
        <label htmlFor="password" className="text-white text-[16px] font-medium capitalize">Password</label>
        <input type="password" placeholder="Password" value={password} onChange={handlePassword} className="flex h-10 p-2 items-center self-stretch border-[1px] border-gray-700 rounded-lg text-white text-[14px] font-normal  placeholder:text-gray-700 bg-transparent "/>

        <button type='submit' className='text-white p-2 font-bold bg-gradient-to-l from-orange-500 to-red-500'>Submit</button>
    </form>
      
    
  )
}

export default AdminSignin
