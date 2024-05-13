'use client'
import React, { useState } from 'react'

function ContactForm() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [error, setError] = useState([])


    const handleName = (e) => {
        setName(e.target.value)
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleMessage = (e) => {
        setMessage(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Name", name)
        console.log("email", email)
        console.log("message", message)
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="flex flex-col text-white gap-4 p-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg" action="/">
                <input type="text" id='name' placeholder='John Doe' onChange={handleName} value={name} className='p-2 bg-gray-950 rounded-lg text-white focus:outline-none' />
                <input type="text" id='email' placeholder='johndoe@example.com' onChange={handleEmail} value={email} className='p-2 bg-gray-950 rounded-lg focus:outline-none' />
                <textarea type="text" id='messaage' placeholder='Hello' onChange={handleMessage} value={message} className='p-2 bg-gray-950 rounded-lg h-[240px] focus:outline-none' />
                <button type='submit' className='p-2 font-bold bg-gray-950'>Submit</button>
            </form>
        </>
    )
}

export default ContactForm
