'use client'
import { ProjectCard } from '@/components';
import { projects } from '@/config/projects';
import { cls } from '@/shared/utils';
import Image from 'next/image';
import { useState, useEffect } from "react";

// .content {
//     width: 334px;
//     height: 216px;
//     background: #f0f0f0;
//     border-radius: 3px;
//     overflow: hidden;
//     padding: 0;
// }

// .wrapper {
//     padding:0px;
//     width: 668px;
//     height: 432px;
//     transform: scale(0.5);
//     transform-origin: top left;
// }

const images = [
	"https://via.placeholder.com/800x400/FF5733/ffffff?text=Slide+1",
	"https://via.placeholder.com/800x400/33FF57/ffffff?text=Slide+2",
	"https://via.placeholder.com/800x400/3357FF/ffffff?text=Slide+3",
];

export const CarouselProjects = () => {
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
		}, 4000);

		return () => clearInterval(interval);
	}, []);

	return (
		<div className="relative w-full h-full mx-auto overflow-hidden rounded-lg shadow-lg">
			<Image src={'/png/macbook-browser.png'} alt='navbar' className='pt-0' width={800} height={22}/>
			<div className='flex transition-all duration-500' style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
				{projects.map((project, index) => (
					<div key={index} className='w-full min-w-full min-h-full transition-all duration-500'>
						<div className='w-full aspect-video bg-[#F5F5F5]'>
							<div style={{ backgroundImage: `url(${project.src})` }} className='w-full h-full bg-cover'></div>
						</div>
					</div>
				))}
			</div>
			
			{/* <div className='flex items-center justify-center gap-3 pt-3'>
				{projects.map((project, idx) => (
					<button 
						className={cls(
							'w-5 h-5 rounded-full cursor-pointer', 
							currentIndex === idx ? 'bg-primary-500' : 'bg-white border border-[#dddddd] hover:bg-primary-50'
						)}
						onClick={() => setCurrentIndex(idx)}
					/>
				))}
			</div> */}
			<div className='flex justify-center scale-[1.28] -translate-x-6.5 -translate-y-3'>
				<Image src={'/png/macbook-navbar.png'} alt='navbar' width={880} height={200}/>
			</div>

			{/* <div
				className="flex transition-transform duration-700 ease-in-out w-[263px] h-full"
				style={{ transform: `translateX(-${currentIndex * 100}%)` }}
			>
			</div>
			<div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
				{images.map((_, index) => (
					<button
						key={index}
						className={`h-2 w-2 rounded-full transition-all duration-300 ${currentIndex === index ? "bg-white w-4" : "bg-gray-300"
							}`}
						onClick={() => setCurrentIndex(index)}
					></button>
				))}
			</div> */}
		</div>
	);
}
