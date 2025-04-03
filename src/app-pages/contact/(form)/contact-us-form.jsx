'use client'

import { SendButton } from '@/components';
import { message } from 'antd';
import { useState } from 'react';

// const  BASE_URL = 'https://flow.cavidhuseynov.me'
const BASE_URL = 'https://flowapplication-001-site1.anytempurl.com/api'
export const ContactUsForm = () => {
	const [loading, setloading] = useState(false);


	const [messageApi, contextHolder] = message.useMessage();

	const success = () => {
		messageApi.open({
			type: 'success',
			content: 'successfully sended',
		});
	};
	const sendEmail = async (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		setloading(true)
		const body = {
			'fullName': formData.get('fullName'),
			'email': formData.get('email'),
			'subject': formData.get('subject'),
			'comment': formData.get('comment')
		}
		try {
			const response = await fetch(`${BASE_URL}/Contact/send-email`, {
				method: 'POST',
				body: JSON.stringify(body),
				'Content-type': 'application/json'
			})
			
			if (!response.ok) {
			}
			
			if (response.status === 200) {
				success()
			}
			return  await response.json();
	
	
		} catch (error) {
			
		} finally {
			setloading(false)
		}
	}

	const inputStyle = 'border border-gray-700 focus:border-primary-600 outline-none focus:outline-none p-3 rounded-2xl'
	return (
		<form onSubmit={sendEmail} className="w-[500px]">

			<div className='flex flex-col gap-5 pt-10 w-full'>
				<div className='flex flex-col gap-2'>
					<label htmlFor='fullName'>Full name</label>
					<input type="text" name='fullName' id='fullName' className={inputStyle} required/>
				</div>
				<div className='flex flex-col gap-2'>
					<label htmlFor='email'>Email</label>
					<input type="email" name='email' id='email' className={inputStyle} required/>
				</div>
				<div className='flex flex-col gap-2'>
					<label htmlFor='subject'>Subject</label>
					<input type="text" name='subject' id='subject' className={inputStyle} required/>
				</div>
				<div className='flex flex-col gap-2'>
					<label htmlFor='comment'>Message</label>
					<textarea id='comment' name='comment' className={inputStyle} required/>
				</div>
				<SendButton type="submit" disabled={loading}/>
			</div>
		</form>
	)
}