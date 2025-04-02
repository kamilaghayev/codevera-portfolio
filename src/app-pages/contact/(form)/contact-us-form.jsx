'use client'

import { SendButton } from '@/components';

const  BASE_URL = 'https://flow.cavidhuseynov.me/'
const sendEmail = async (form) => {
	const formData = new FormData(form);
	const body = {
		'fullName': formData.get('fullName'),
		'email': formData.get('email'),
		'subject': formData.get('subject'),
		'comment': formData.get('comment')
	}
	try {
		const response = await fetch(`${BASE_URL}/Contact/send-email`, {
			method: 'POST',
			body: JSON.stringify(body)
		})
		
		if (!response.ok) {
			
		}

		const data = await response.json();


	} catch (error) {
		
	}
}
export const ContactUsForm = () => {
	const inputStyle = 'border border-gray-700 focus:border-primary-600 outline-none focus:outline-none p-2 rounded-3xl'
	return (
		<form className="" onSubmit={sendEmail}>
			<h1 className='text-6xl font-semibold lg:pt-7 lg:pb-5'>Contact us</h1>

			<div className='flex flex-col gap-5 max-w-[500px] pt-3'>
				<div className='flex flex-col gap-2'>
					<label htmlFor='fullName'>Full name</label>
					<input type="text" id='fullName' className={inputStyle} required/>
				</div>
				<div className='flex flex-col gap-2'>
					<label htmlFor='email'>Email</label>
					<input type="email" id='email' className={inputStyle} required/>
				</div>
				<div className='flex flex-col gap-2'>
					<label htmlFor='subject'>Subject</label>
					<input type="text" id='subject' className={inputStyle} required/>
				</div>
				<div className='flex flex-col gap-2'>
					<label htmlFor='comment'>Message</label>
					<textarea id='comment' className={inputStyle} required/>
				</div>
				<SendButton type="submit"/>
			</div>
		</form>
	)
}