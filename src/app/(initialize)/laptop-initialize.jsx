
'use client'
export const LAPTOP_ID = 'laptop';

export const getLaptop = () => document.getElementById(LAPTOP_ID);

export const LaptopContainer = () => {
	return (
		<section className='absolute top-0 left-0 p-0 m-0 w-screen max-w-screen h-screen max-h-screen overflow-hidden pointer-events-none'>
			<div id={LAPTOP_ID} className='relative w-screen max-w-screen h-screen max-h-screen overflow-hidden pointer-events-none'/>
		</section>
	)
}