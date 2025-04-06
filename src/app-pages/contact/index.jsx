import { CurrentPath } from '@/components'
import { ContactUsForm } from './(form)/contact-us-form'
import Image from 'next/image'

export const ContactPage = () => {
	return (
		<div className='container-center'>
			<CurrentPath customLastPath={"Contact"}/>

			<div className='w-full grid grid-cols-1 xl:grid-cols-12 pt-3 items-center justify-center xl:justify-between'>

				<div className="w-full col-span-5">
					<h1 className='text-6xl font-semibold pt-5 lg:pt-7 lg:pb-5 max-xl:flex max-xl:justify-center '>Contact us</h1>
					<div className="hidden xl:flex xl:w-[600px] xl:h-[600px]">
						<Image src={'/webp/contact-us.webp'} alt='Contact us' width={600} height={600}/>
					</div>
				</div>
				<div className='col-span-7 flex justify-center w-full'>
					<ContactUsForm/>

				</div>
			</div>
		</div>
	)
}