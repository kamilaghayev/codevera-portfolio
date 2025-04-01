import React from 'react'
import { AdvantageCard } from '@/components'
import { GoGoal } from "react-icons/go";
import { FaGlasses, FaLightbulb, FaHandshake } from "react-icons/fa6";

export const Ourselves = () => {

    const aboutUs = [
        {
            icon: <GoGoal />,
            name: "Our mission",
            description: "CodeVera aims to empower businesses and individuals with cutting-edge web technologies, delivering fast, secure, and user-friendly web solutions. Our mission is not just to build websites but to create high-performance digital experiences that enhance engagement and drive growth.",
        },
        {
            icon: <FaGlasses />,
            name: "Our vision",
            description: "At CodeVera, we envision a digital world where every business, regardless of size, has access to high-quality, scalable, and interactive web solutions. By leveraging modern technologies, we help our clients establish a strong online presence that stands out in today's competitive market.",
        },
        {
            icon: <FaLightbulb />,
            name: "Our Expertise",
            description: "With years of experience in web development, we specialize in crafting visually stunning and functionally powerful web applications. Whether it's a corporate website, an eCommerce platform, or a dynamic dashboard, we bring expertise in responsive design, API integration, and seamless user experiences.",
        },
        {
            icon: <FaHandshake />,
            name: "Why Work With Us?",
            description: "We believe in collaboration and transparency. Every project we take on is treated with precision, creativity, and a results-driven approach. We ensure that our clients receive personalized solutions tailored to their needs, with clear communication and ongoing support.",
        }
    ];

  return (
    <section aria-labelledby='ourselves' id='ourselves'>
        <div className='container-center flex flex-col gap-6 sm:gap-10 lg:gap-14 mt-16 mb-36'>
            <h2 id='advantages' className='text-3xl sm:text-4xl lg:text-6xl font-semibold'>Let us tell you a little about ourselves</h2>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                {
                    aboutUs.map((item, index) => (
                        <AdvantageCard key={index} icon={item.icon} name={item.name} description={item.description} />
                    ))
                }
            </div>
        </div>
    </section>
  )
}
