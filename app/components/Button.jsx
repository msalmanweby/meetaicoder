'use client'

import React from 'react'

const Button = (props) => {

    const type = props.type
    const value = props.value

    if (type == "action") {
        return (
            <button className='flex item-center justify-center bg-gradient-to-r from-orange-500 to-red-500 text-white p-2 rounded-lg'>
                {value}
            </button>
        )
    } else {
        return (
            <button className='flex item-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500 text-white p-2 rounded-lg'>
                {value}
            </button>
        )
    }
}

export default Button
