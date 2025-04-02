import { CurrentPath } from '@/components'
import { ContactUsForm } from './(form)/contact-us-form'
import Image from 'next/image'

export const ContactPage = () => {
	return (
		<div className='container-center'>
			<CurrentPath customLastPath={"Contact"}/>

			<div className='w-full grid lg:grid-cols-2 pt-3'>
				<ContactUsForm/>
				<div className='relative w-full aspect-square'>
					<Image src={'/jpg/contact-us.jpg'} alt='Contact us' fill/>
				</div>
			</div>
		</div>
	)
}