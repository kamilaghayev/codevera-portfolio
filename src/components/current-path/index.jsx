'use client'
import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export const CurrentPath = () => {
    const pathname = usePathname()
    const path = pathname.split('/').filter(Boolean)
    const lastPath = path[path.length - 1].charAt(0).toUpperCase() + path[path.length - 1].slice(1)
    console.log(pathname);
  return (
    <section aria-labelledby='our-projects' id='portfolio'>
        <div className='container-center flex gap-3 mt-10 text-sm sm:text-base'>
            <Link href='/' className='text-[#141414] opacity-50 hover:text-[#8ac44f]'>Home</Link> <span className='text-[#8ac44f] font-semibold'> / {lastPath}</span>
        </div>
    </section>
  )
}
