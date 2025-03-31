import React from 'react'
import SponsorSwiper from '@/components/swipers/sponsor-swiper'

export const Sponsors = () => {
  return (
    <section id='sponsors' aria-labelledby='sponsors'>
        <div className='container-center w-full pt-12 mt-24 mb-36'>
            <SponsorSwiper />
        </div>
    </section>
  )
}
