'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';

const SponsorSwiper = () => {
  const sponsors = [
    { company: "Baku City Circuit", src: 'sponsor1.webp' },
    { company: "Global Auto", src: 'sponsor2.webp' },
    { company: "Ultranet", src: 'sponsor3.webp' },
    { company: "Sponsor", src: 'sponsor4.webp' },
    { company: "Pro Logistic", src: 'sponsor5.webp' },
    { company: "Kaspian Education Center", src: 'sponsor6.webp' },
    { company: "Grand Agro", src: 'sponsor7.webp' },
    { company: "Azlift", src: 'sponsor8.webp' },
    { company: "Smart Vision", src: 'sponsor9.webp' },
    { company: "175 Logistic", src: 'sponsor10.webp' },
  ]
  return (
    <>
      <Swiper
        spaceBetween={30}
        breakpoints={{
          320: { slidesPerView: 2 },
          480: { slidesPerView: 3 },
          640: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
          1280: { slidesPerView: 6 },
          1440: { slidesPerView: 7 },
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
        {sponsors?.map((sponsor, index) => (
          <SwiperSlide key={index} className='w-full aspect-[150/96] p-5 bg-[#F5F5F5] rounded-3xl flex items-center justify-center'>
            <div className='w-full h-full'>
              <Image
                src={`/webp/${sponsor.src}`}
                alt={`${sponsor.id} - Logo`}
                width={150}
                height={96}
                className='w-full h-full object-contain'
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default SponsorSwiper;