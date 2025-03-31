'use client';
import React from 'react'
import { Button } from 'antd'
import { FaArrowRight } from "react-icons/fa6";
import { useRouter } from 'next/navigation'

export const MoreButton = ({ path = "/" }) => {

  const router = useRouter()
  const handleClick = () => {
    router.push(path)
  }
  return (
    <Button onClick={handleClick} variant='solid' color='lime' className='w-full flex items-center gap-4 max-w-[300px] min-h-10 sm:min-h-11 lg:min-h-12 !rounded-4xl !text-base sm:!text-[17px] lg:!text-lg !font-semibold group' >
      More
      <FaArrowRight className='group-hover:translate-x-2 transition-transform' />
    </Button>
  )
}
