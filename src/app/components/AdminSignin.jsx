'use client'
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setProfile } from '@/redux/features/user-profile';
import { setNotificationMessage, hideNotification } from '@/redux/features/notification-slice'; // Importing setMessage action creator
import Notify from './Notify';
import { useRouter } from 'next/navigation';
import baseUrl from './UrlPatterns';


function AdminSignin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    

    const router = useRouter();
    const dispatch = useDispatch();
    

    const handleUsername = (e) => {
        setUsername(e.target.value);
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

    


    const fetchData = async (e) => {
        e.preventDefault();

        const payload = {
            username: username,
            password: password
        };

        setUsername('')
        setPassword('')
        try {
            const response = await fetch(`${baseUrl}authentication/adminSignIn/`, {
            method: "POST",
                headers : {
                    'Accept' : 'application/json',
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify(payload)
            });

            const responseData = await response.json()

            if (response.status === 200) {
                localStorage.setItem("Bearer", responseData.token)
                router.push("/admin/demo-requests")
            }
            
            else {
            
                dispatch(setNotificationMessage({ message: "Invalid Credentials", isError: true })); 

            }
        } catch (error) {
            dispatch(setNotificationMessage({ message: "Request Error", isError: true })); 
        }
    };

    return (
        <div>
            <Notify />
            <form onSubmit={fetchData} className="flex flex-col gap-2">
                <label htmlFor="username" className="text-white text-[16px] font-medium capitalize">Username</label>
                <input type="text" placeholder="Username" value={username} onChange={handleUsername} required={true} className="flex h-10 p-2 items-center self-stretch border-[1px] border-gray-700 rounded-lg text-white text-[14px] font-normal  placeholder:text-gray-700 bg-transparent"/>
                <label htmlFor="password" className="text-white text-[16px] font-medium capitalize">Password</label>
                <input type="password" placeholder="Password" value={password} onChange={handlePassword} required={true} className="flex h-10 p-2 items-center self-stretch border-[1px] border-gray-700 rounded-lg text-white text-[14px] font-normal  placeholder:text-gray-700 bg-transparent "/>
                <button type='submit' className='text-white p-2 font-bold bg-gradient-to-l from-orange-500 to-red-500'>Submit</button>
            </form>
        </div>
    );
}

export default AdminSignin;
