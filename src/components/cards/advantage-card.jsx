import React from 'react'
import { BiSolidMessageDetail } from "react-icons/bi";

export const AdvantageCard = ({ name = "Advantage name", description = "Description of advantage", icon = <BiSolidMessageDetail/> }) => {
  return (
    <div className='w-full min-w-[300px] min-h-[210px] max-w-[380px] bg-[#F5F5F5] rounded-3xl p-6 flex flex-col gap-5'>
        <div className='w-8 h-8 lg:w-10 lg:h-10 rounded-[100%] border-2 border-[#141414] text-[#141414] text-lg lg:text-xl flex items-center justify-center'>
            {icon}
        </div>
        <div className='text-[#141414] flex flex-col gap-2'>
            <h3 className='text:kg sm:text-xl lg:text-2xl font-semibold'>{name}</h3>
            <p className='text-sm sm:text-base lg:text-lg'>{description}</p>
        </div>
    </div>
  )
}
