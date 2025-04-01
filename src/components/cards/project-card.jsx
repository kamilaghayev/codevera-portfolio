import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export const ProjectCard = ({ name = "CodeVera", src = "/project.png", link = "https://codevera.com", types = [ "Ecommerce", "Corporative" ] }) => {
  return (
    <div className='w-full flex flex-col gap-4 sm:gap-6'>
        <Link href={link} className='w-full aspect-video p-4 sm:p-5 lg:p-5 rounded-3xl bg-[#F5F5F5]'>
            <Image src={src} alt={`${name} Screenshot`} width={300} height={300} className='w-full h-full object-contain rounded-3xl'/>
        </Link>
        <div className='flex flex-col gap-2 sm:gap-4'>
            <h3 className='text-xl sm:text-3xl lg:text-4xl font-semibold'>{name}</h3>
            <div className="w-full flex gap-4 flex-nowrap overflow-x-scroll pb-3">
                {types.map((type, index) => (
                    <div key={index} className="min-w-fit px-4 py-2 bg-[#E6E6E6] text-[#141414] rounded-full text-xs sm:text-sm lg:text-base font-medium">
                        {type}
				    </div>
                ))}
            </div>
        </div>
    </div>
  )
}
