
import { ProjectCard } from '@/components';
import { useState, useEffect } from "react";

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
		}, 3000);

		return () => clearInterval(interval);
	}, []);

	return (
		<div className="relative w-full mx-auto overflow-hidden rounded-lg shadow-lg">
			<div
				className="flex transition-transform duration-700 ease-in-out"
				style={{ transform: `translateX(-${currentIndex * 100}%)` }}
			>
				{images.map((src, index) => (
					<div key={index} className='h-full w-[150px]'>
						{/* <div className='w-full aspect-video p-2 rounded-3xl bg-[#F5F5F5]'>
							<div style={{backgroundImage: 'url(/project.png)'}} className='w-full h-full rounded-3xl bg-cover'></div>
						</div> */}
						 <ProjectCard/>
					</div>

				))}
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
			</div>
		</div>
	);
}
