'use client'

import { getUrls } from '@/config/url.config';
import { Button } from 'antd'
import { useRouter } from 'next/navigation';
import { FaArrowRight } from "react-icons/fa6";

const urls = getUrls();

export const ContactButton = ({ path = urls.contactUs()  , props }) => {
  debugger
  const router = useRouter();
  const handleClick = () => router.push(path)
  return (
    <Button 
      variant='solid' 
      style={{ backgroundColor: '#8ac44f', borderColor: '#8ac44f', color: '#fff' }} 
      className='w-full flex items-center gap-4 max-w-[300px] min-h-10 sm:min-h-11 lg:min-h-12 !rounded-4xl !text-base sm:!text-[17px] lg:!text-lg !font-semibold group' 
      {...props} 
      onClick={handleClick}
    >
      Contact us
      <FaArrowRight className='group-hover:translate-x-2 transition-transform' />
    </Button>
  )
}
