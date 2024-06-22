'use client'
import React, { useState } from 'react'
import baseUrl from './UrlPatterns'
import { setNotificationMessage } from '@/redux/features/notification-slice';
import { useDispatch } from 'react-redux';
import { services } from './ServiceCard';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

function DemoForm() {
    const [fname, setfName] = useState('')
    const [lname, setlName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [organization, setOrganization] = useState('')
    const [selectedServices, setSelectedServices] = useState([])
    const [open, setOpen] = useState(false)
    const [search, setSearch] = useState('')
    const [checkedItems, setCheckedItems] = useState({})
    const [formCheck, setFormCheck] = useState(false)

    const dispatch = useDispatch();

    const handlefName = (e) => {
        setfName(e.target.value)
    }

    const handlelName = (e) => {
        setlName(e.target.value)
    }

    const handleOrganization = (e) => {
        setOrganization(e.target.value)
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePhone = (e) => {
        setPhone(e.target.value)
    }

    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    const handledropDown = () => {
        setOpen(!open)
    }

    const handleCheck = (index) => {
        setCheckedItems(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    }

    const handleServiceChange = (e, index) => {
        const service = e.target.value;
        if (selectedServices.includes(service)) {
            setSelectedServices(selectedServices.filter((s) => s !== service));
        } else {
            setSelectedServices([...selectedServices, service]);
        }
        handleCheck(index);
    }

    const handleRemoveService = (service) => {
        const index = services.findIndex(item => item.name === service);
        setSelectedServices(selectedServices.filter((s) => s !== service));
        handleCheck(index);
    }

    const handleFormCheck = () => {
        setFormCheck(!formCheck)
    }

    const handleSpacePressed = (event) => {
        if (event.key === ' ') {
            setOpen(!open)
            event.preventDefault();
        }
    };

    const handleSpaceCheckedSingle = (event) => {
        if (event.key === ' ') {
            setFormCheck(!formCheck)
            event.preventDefault();
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!isValidEmail(email)) {
            dispatch(setNotificationMessage({ message: "Invalid Email", isError: true }));
            return;
        }

        if (!formCheck) {
            dispatch(setNotificationMessage({ message: "You must agree to the terms and conditions", isError: true }));
            return;
        }

        if (selectedServices.length === 0) {
            dispatch(setNotificationMessage({ message: "Choose Category", isError: true }));
            return;
        }

        const payload = {
            fname: fname,
            lname: lname,
            email: email,
            company: organization,
            categories: selectedServices,
            phone_number: phone,
        }
        setfName('')
        setlName('')
        setOrganization('')
        setEmail('')
        setPhone('')
        setSelectedServices([])
        setCheckedItems({})
        setFormCheck(!formCheck)
        setOpen(!open)
        const response = await fetch(`${baseUrl}info/requestDemo/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload),
        });

        const responseData = await response.json();

        if (response.status === 200) {
            dispatch(setNotificationMessage({ message: "request processed successfully", isError: false }));
        } else {
            dispatch(setNotificationMessage({ message: "error processing the request", isError: true }));
        }

    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 xl:px-8 xl:gap-8" action="/">
            <div className="flex flex-col xl:flex-row gap-4">
                <div className="flex flex-col p-2 gap-2 w-full items-start self-stretch">
                    <label className='text-white text-[14px] font-bold ' htmlFor="firstName">First Name</label>
                    <input required={true} type="text" id='fname' placeholder='First Name' onChange={handlefName} value={fname} className='flex h-10 p-2 items-center self-stretch border-[1px] border-gray-700 rounded-lg text-white text-[14px] font-normal placeholder:text-gray-700 bg-transparent' />
                </div>
                <div className="flex flex-col p-2 gap-2 items-start self-stretch w-full">
                    <label className='text-white text-[14px] font-bold capitalize' htmlFor="lastName">Last Name</label>
                    <input required={true} type="text" id='lastName' placeholder='Last Name' onChange={handlelName} value={lname} className='flex h-10 p-2 items-center self-stretch border-[1px] border-gray-700 rounded-lg text-white text-[14px] font-normal  placeholder:text-gray-700 bg-transparent' />
                </div>
            </div>
            <div className="flex flex-col p-2 gap-2 w-full items-start self-stretch">
                <label className='text-white text-[14px] font-bold capitalize' htmlFor="organizationName">Organization Name</label>
                <input required={true} type="text" id='organizationName' placeholder='Organization Name' onChange={handleOrganization} value={organization} className='flex h-10 p-2 items-center self-stretch border-[1px] border-gray-700 rounded-lg text-white text-[14px] font-normal  placeholder:text-gray-700 bg-transparent' />
            </div>
            <div className="flex flex-col p-2 gap-2 w-full items-start self-stretch">
                <label className='text-white text-[14px] font-bold capitalize' htmlFor="email">Email</label>
                <input required={true} type="text" id='email' placeholder='Email' onChange={handleEmail} value={email} className='flex h-10 p-2 items-center self-stretch border-[1px] border-gray-700 rounded-lg text-white text-[14px] font-normal  placeholder:text-gray-700 bg-transparent' />
            </div>
            <div className="flex flex-col p-2 gap-2 w-full items-start self-stretch">
                <label className='text-white text-[14px] font-bold capitalize' htmlFor="phoneNumber">Phone Number</label>
                <input required={true} type="text" id='phoneNumber' placeholder='Phone Number' onChange={handlePhone} value={phone} className='flex h-10 p-2 items-center self-stretch border-[1px] border-gray-700 rounded-lg text-white text-[14px] font-normal  placeholder:text-gray-700 bg-transparent' />
            </div>
            <div className="flex flex-col p-2 gap-2 w-full items-start self-stretch">
                <label className='text-white text-[14px] font-bold capitalize' htmlFor="categories">Categories</label>
                <div className="flex justify-between p-2 items-center self-stretch border-[1px] border-gray-700 rounded-lg text-white text-[14px] font-normal capitalize placeholder:text-gray-700 bg-transparent ">
                    {selectedServices.length > 0 ? (
                        <div className="flex flex-wrap gap-2 ">
                            {selectedServices.map((service, index) => (
                                <div key={index} className="flex gap-2 bg-gray-800 px-2 py-1 rounded-lg text-[12px]">
                                    {service}
                                    <Image onClick={() => handleRemoveService(service)} src={"/requestdemo/close.svg"} width={16} height={16} alt='close' />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className='text-gray-700'>Select Categories</p>
                    )}
                    <button onKeyDown={handleSpacePressed} type="button" className="flex">
                        <ChevronDown className={`${open ? "rotate-180 ease-in-out duration-500 cursor-pointer" : "ease-in-out duration-500 cursor-pointer"}`} size={24} onClick={handledropDown} />
                    </button>
                </div>
                <div className={`overflow-hidden transition-max-height duration-500 ease-in-out no-scrollbar ${open ? 'max-h-64 overflow-y-auto' : 'max-h-0'}`}>
                    <ul className="flex flex-col">
                        {services.filter(service => service.name.toLowerCase().includes(search.toLowerCase())).map((item, index) => (
                            <li key={index} className='flex gap-8 px-4 py-2'>
                                <div onClick={() => handleServiceChange({ target: { value: item.name } }, index)} className="flex shrink-0 cursor-pointer">
                                    {checkedItems[index] ?

                                        <Image src={"/requestdemo/checkboxFill.svg"} width={24} height={24} alt='checkbox-fill' /> : <Image src={"/requestdemo/checkbox.svg"} width={24} height={24} alt='uncheck-checkbox' />}

                                </div>
                                <p className='text-white text-[14px] font-normal capitalize'>{item.name}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="flex gap-2 tex-[14px] items-start">
                <button onKeyDown={handleSpaceCheckedSingle} type="button" className='flex shrink-0 cursor-pointer' onClick={handleFormCheck}>
                    {formCheck ? <Image src={"/requestdemo/checkboxFill.svg"} width={24} height={24} alt='checkbox-fill' /> : <Image src={"/requestdemo/checkbox.svg"} width={24} height={24} alt='uncheck-checkbox' />}
                </button>
                <div className="flex gap-1 text-white">
                    <span>I have read and agree to meetaicoders.com <Link className="bg-gradient-to-l from-orange-500 to-red-500 inline-block text-transparent bg-clip-text" href={'/legal-terms'}>Legal Terms</Link> and <Link className="bg-gradient-to-l from-orange-500 to-red-500 inline-block text-transparent bg-clip-text" href={'/privacy-policy'}>Privacy Policy.</Link>
                    </span>
                </div>
            </div>
            <button type='submit' className='text-white p-2 font-bold bg-gradient-to-l from-orange-500 to-red-500'>Submit</button>
        </form>
    )
}

export default DemoForm
