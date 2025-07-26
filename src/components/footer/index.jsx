import React from 'react'
import Link from 'next/link'
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedin, FaGithub } from "react-icons/fa6";

export const Footer = () => {
    const sections = [
        { link: '#home', name: 'Home' },
        { link: '#about', name: 'About' },
        { link: '#advantages', name: 'Advantages' },
        { link: '#portfolio', name: 'Portfolio' },
        { link: '#sponsors', name: 'Sponsors' },
        { link: '#contact', name: 'Contact us' },
        { link: '#faq', name: 'FAQ' }
    ];

  return (
    <div className='container-center flex flex-col items-center justify-center h-80 gap-10 rounded-xl border-2 border-[#F5F5F5] text-gray-600 mt-25 sm:mt-36 lg:mt-40'>
      <ul className='flex gap-10 flex-wrap justify-center'>
        {sections.map((section, index) => (
            <Link key={index} href={section.link} className='text-sm sm:text-base lg:text-lg hover:text-[#141414] cursor-pointer'>{section.name}</Link>
        ))}
      </ul>
      {/* <div className='flex gap-10 text-2xl'>
        <FaFacebookF className='hover:text-[#141414] cursor-pointer'/>
        <FaInstagram className='hover:text-[#141414] cursor-pointer'/>
        <FaLinkedin className='hover:text-[#141414] cursor-pointer'/>
        <FaGithub className='hover:text-[#141414] cursor-pointer'/>
        <FaYoutube className='hover:text-[#141414] cursor-pointer'/>
      </div> */}
      <span className='text-sm sm:text-base lg:text-lg'>© 2022 CodeVera, Inc. All rights reserved.</span>
    </div>
  )
}
