import React from 'react'
import Image from 'next/image'
import logo from '../../public/logoWithOutBg.png'
const loading = () => {
  return (
<div className="flex items-center justify-center h-screen ">
    {/* الحاوية الرئيسية */}
    <div className="relative w-[250px] h-[250px] flex items-center justify-center">
        
        {/* الدائرة الخارجية */}
        <div className="absolute w-full h-full border-8 border-transparent border-t-blue-500 border-l-blue-500 rounded-full animate-spin-slow"></div>

        {/* الدائرة الداخلية */}
        <div className="absolute w-[200px] h-[200px] border-8 border-transparent border-b-blue-500 border-r-blue-500 rounded-full animate-spin-reverse"></div>

        {/* الصورة في المنتصف */}
   
        <Image
              src={logo}
              alt="logo"
              width={100}
              height={100}
             
            />
    </div>

    {/* تعريف الحركات */}
    <style>
        {`
        @keyframes spin-slow {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        @keyframes spin-reverse {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(-360deg); }
        }
        .animate-spin-slow {
            animation: spin-slow 1s linear infinite;
        }
        .animate-spin-reverse {
            animation: spin-reverse 1s linear infinite;
        }
        `}
    </style>
</div>
  )
}

export default loading