import React from 'react'
import { Button } from 'antd'
import { FaArrowRight } from "react-icons/fa6";

export const MoreButton = () => {
  return (
    <Button variant='solid' color='lime' className='w-full flex items-center gap-4 max-w-[300px] min-h-12 !rounded-4xl !text-lg !font-semibold group' >
      More
      <FaArrowRight className='group-hover:translate-x-2 transition-transform' />
    </Button>
  )
}
