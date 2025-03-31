'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

const SponsorSwiper = () => {
  const sponsors = [
    { id: 1, src: '/formula.webp' },
    { id: 2, src: '/formula.webp' },
    { id: 3, src: '/formula.webp' },
    { id: 4, src: '/formula.webp' },
    { id: 5, src: '/formula.webp' },
    { id: 6, src: '/formula.webp' },
    { id: 7, src: '/formula.webp' },
    { id: 8, src: '/formula.webp' },
    { id: 9, src: '/formula.webp' },
    { id: 10, src: '/formula.webp' },
    { id: 11, src: '/formula.webp' },
    { id: 12, src: '/formula.webp' },
    { id: 13, src: '/formula.webp' },
    { id: 14, src: '/formula.webp' },
    { id: 15, src: '/formula.webp' },
    { id: 16, src: '/formula.webp' },
  ]
  return (
    <>
      <Swiper
        spaceBetween={30}
        breakpoints={{
          320: { slidesPerView: 2 },
          480: { slidesPerView: 3 },
          640: { slidesPerView: 4 },
          1024: { slidesPerView: 6 },
          1280: { slidesPerView: 8 },
          1440: { slidesPerView: 6 },
        }}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        speed={1000}
        loop={true}
        modules={[Autoplay]}
        className='w-full h-full'
      >
        {sponsors.map((sponsor) => (
          <SwiperSlide key={sponsor.id} className='w-full aspect-[150/96] p-5 bg-[#F5F5F5] rounded-3xl flex items-center justify-center'>
            <div className='w-full h-full bg-contain bg-no-repeat' style={{backgroundImage: `url(${sponsor.src})`}}></div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default SponsorSwiper;