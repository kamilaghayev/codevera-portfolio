import React from 'react'
import { Button } from 'antd'
import { FaArrowRight } from "react-icons/fa6";

export const ContactButton = (props) => {
  return (
    <Button variant='solid' style={{ backgroundColor: '#8ac44f', borderColor: '#8ac44f', color: '#fff' }} className='w-full flex items-center gap-4 max-w-[300px] min-h-10 sm:min-h-11 lg:min-h-12 !rounded-4xl !text-base sm:!text-[17px] lg:!text-lg !font-semibold group' {...props}>
      Contact us
      <FaArrowRight className='group-hover:translate-x-2 transition-transform' />
    </Button>
  )
}
