import React from 'react'
import { AdvantageCard } from '@/components'
import { BiSolidMessageDetail } from "react-icons/bi";
import { FaMoneyBillWave } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import { FaUsers } from "react-icons/fa";

export const Advantages = () => {

    const advantagesData = [
        {
            title: 'Honest communication',
            description: 'Openness and transparency in communication with customers are our standards.',
            icon: <BiSolidMessageDetail />
        },
        {
            title: 'Transparent prices',
            description: 'We offer honest and transparent pricing for each project.',
            icon: <FaMoneyBillWave />
        },
        {
            title: 'Guaranteed delivery time',
            description: 'We strictly adhere to the agreed delivery date of projects.',
            icon: <MdVerified />
        },
        {
            title: 'Professional experience',
            description: 'Our team is made up of professionals with extensive experience.',
            icon: <FaUsers />
        }
    ]

  return (
    <section id='advantages' aria-labelledby='advantages'>
        <div className='container-center flex flex-col gap-6 sm:gap-10 lg:gap-14'>
            <h2 id='advantages' className='text-3xl sm:text-4xl lg:text-6xl font-semibold'>Advantages</h2>
            <div className='flex gap-5 overflow-x-auto'>
                {advantagesData?.map((item, index) => (
                    <AdvantageCard
                        key={index}
                        name={item.title}
                        description={item.description}
                        icon={item.icon}
                    />
                ))}
            </div>
        </div>
    </section>
  )
}
