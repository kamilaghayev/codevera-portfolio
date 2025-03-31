import { Introduction, AboutUs, Advantages, ContactUs, OurProjects, Sponsors, Faq } from './_sections'

export const HomePage = () => {
	return (
		<div className='flex flex-col gap-27 sm:gap-34 lg:gap-40'>
			<Introduction/>
			<AboutUs/>
			<Advantages />
			<OurProjects />
			<ContactUs />
			<Sponsors />
			<Faq />
		</div>
	)
} 