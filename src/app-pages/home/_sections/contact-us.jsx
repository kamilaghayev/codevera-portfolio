import React from 'react'
import Image from 'next/image'
import { ContactButton } from '@/components'

export const ContactUs = () => {
  return (
    <section id='contact' aria-labelledby='contact-us'>
        <div className='container-center flex flex-col gap-6 sm:gap-10 lg:gap-14 mt-36 mb-36'>
            <h2 id='advantages' className='text-3xl sm:text-4xl lg:text-6xl font-semibold'>Contact us</h2>
            <div className='p-6 lg:p-10 bg-[#F5F5F5] rounded-3xl flex flex-col items-center sm:flex-row sm:items-stretch gap-5'>
                <Image src='/envelop.webp' alt='envelop image' width={400} height={250} />
                <div className='flex flex-col justify-between gap-6'>
                    <div className='text-[#141414] flex flex-col gap-2'>
                        <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold'>(+994) 77 777 77 77</h3>
                        <p className='text-sm sm:text-base lg:text-lg'>If you have any ideas or projects in mind, call us. We will make them happen as soon as possible.</p>
                    </div>
                    <ContactButton />
                </div>
            </div>
        </div>
    </section>
  )
}
