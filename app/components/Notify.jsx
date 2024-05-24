'use client'
import React, { useEffect, useState } from 'react';
import { CircleX } from 'lucide-react';
import { useSelector, useDispatch } from 'react-redux';
import { hideNotification } from '@/redux/features/notification-slice';

function Notify() {
    const dispatch = useDispatch();
    const notification = useSelector((state) => state.notification.value);
    const message = notification.message;
    const isError = notification.isError;
    const isVisible = notification.isVisible;
    const duration = 3000;

    useEffect(() => {
        if (isVisible) {
            const timer = setTimeout(() => {
                dispatch(hideNotification());
            }, duration);

            return () => clearTimeout(timer);
        }
    }, [isVisible, dispatch, duration]);

    return (
        <div className={`fixed ${isVisible ? 'top-[10%]' : '-top-[10%]'} left-0 right-0 mx-auto w-[50%] sm:w-[15%] flex justify-center p-2 items-center rounded-full z-20 ${isError ? 'bg-red-500' : 'bg-green-500'} bg-opacity-50 ease-out duration-500 backdrop-blur-lg`}>
            <p className="text-white text-14px font-medium capitalize text-center">{message}</p>
        </div>
    );
}

export default Notify;
