'use client'
import React, { useState } from 'react'
import baseUrl from './UrlPatterns'
import Notify from './Notify'
import { setNotificationMessage, hideNotification } from '@/redux/features/notification-slice'; // Importing setMessage action creator
import { useDispatch } from 'react-redux';

function ContactForm() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const dispatch = useDispatch();

    const handleName = (e) => {
        setName(e.target.value)
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleMessage = (e) => {
        setMessage(e.target.value)
    }

    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!isValidEmail(email)) {
            dispatch(setNotificationMessage({ message: "Invalid Email", isError: true }));
            return;
        }

        const payload = {
            "name": name,
            "email": email,
            "message": message
        }
        setName('')
        setEmail('')
        setMessage('')
        const response = await fetch(`${baseUrl}info/contactUs/`, {
            method: 'POST', // or 'PUT', 'DELETE', etc.
            headers: {
                'Content-Type': 'application/json'
                // You may need to include other headers like authorization token
            },
            body: JSON.stringify(payload),
        });

        const responseData = await response.json();

        if (response.status === 200) {
            dispatch(setNotificationMessage({ message: "request proceessed", isError: false }));
        }
        else {
            dispatch(setNotificationMessage({ message: "request error", isError: true }));
        }

    }

    return (


        <form onSubmit={handleSubmit} className="flex flex-col text-white gap-4 p-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg min-w-[100%] sm:min-w-[400px]" action="/">
            <input required={true} type="text" id='name' placeholder='Enter Your Name' onChange={handleName} value={name} className='p-2 bg-gray-950 rounded-lg text-white focus:outline-none' />
            <input required={true} type="text" id='email' placeholder='Enter Your Email' onChange={handleEmail} value={email} className='p-2 bg-gray-950 rounded-lg focus:outline-none' />
            <textarea required={true} type="text" id='messaage' placeholder='Enter Your Message...' onChange={handleMessage} value={message} className='p-2 bg-gray-950 rounded-lg h-[240px] focus:outline-none' />
            <button type='submit' className='p-2 font-bold bg-gray-950'>Submit</button>
        </form>

    )
}

export default ContactForm
