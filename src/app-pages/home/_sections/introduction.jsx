import { Laptop3d } from '@/features/laptop-3d'

export const Introduction = () => {
	return (
		<section id='home' aria-labelledby='introduction'>
			<div className='container-center'>
				<div className='grid grid-cols-1 md:grid-cols-2 h-full gap-5 pt-14 md:pt-8'>
					<div className='w-full lg:max-w-2xl flex items-center text-4xl sm:text-5xl lg:text-7xl font-semibold'>
						<h1 
							id='introduction' 
						>
							Creating 
							{' '}<span className='text-primary-500'>any type of website</span>{' '}
							for your business
						</h1>

					</div>
					{/* 3d section */}
					<div className='flex items-center justify-end pt-10 md:pt-0'>
						<div className='w-full md:max-w-[550px] min-w-[400px] min-h-[400px] md:min-h-[550px] md:h-[550px] overflow-hidden aspect-square'>
							<Laptop3d/>
						</div>
					</div>

				</div>
			</div>
		</section>
	)
}