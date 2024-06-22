import React from 'react'
import Image from 'next/image'


const LogoSlide = () => {
    const brands = [
        { src: "/brands/aws.svg", alt: "aws", width: 66.89 },
        { src: "/brands/firebase.svg", alt: "firebase", width: 29.17 },
        { src: "/brands/ibm.svg", alt: "ibm", width: 100 },
        { src: "/brands/llama.svg", alt: "llama", width: 98.31 },
        { src: "/brands/microsoftazure.svg", alt: "microsoft-azure", width: 228.31 },
        { src: "/brands/nextjs.svg", alt: "nextjs", width: 66.27 },
        { src: "/brands/openai.svg", alt: "openai", width: 164.74 },
        { src: "/brands/python.svg", alt: "python", width: 137.74 },
        { src: "/brands/reactnative.svg", alt: "react-native", width: 49.88 },
        { src: "/brands/vitejs.svg", alt: "vite-js", width: 39.84 },

    ]
    return (
        <>
            <div className="logos">
                <div className="logos-slide">
                    {brands.map((item, index) => (
                        <Image className="mx-4" key={index} src={item.src} alt={item.alt} width={item.width} height={40} />
                    ))}
                </div>
                <div className="logos-slide">
                    {brands.map((item, index) => (
                        <Image className="mx-4" key={index} src={item.src} alt={item.alt} width={item.width} height={40} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default LogoSlide
