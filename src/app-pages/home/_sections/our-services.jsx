import { ServiceCard } from '@/components/cards'

export const OurServices = () => {

	return (
		<section aria-labelledby='our-services'>
			<div className='container-center grid grid-cols-1 md:grid-cols-2'>
				<div>
					<h2 id='our-services'>Our Services</h2>
				</div>
				<ul>
					<ServiceCard parentTag='li'/>
				</ul>
			</div>
		</section>
	)
}