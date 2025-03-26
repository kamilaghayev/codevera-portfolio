import Image from 'next/image'
import React from 'react'

export const Header = () => {
	return (
		<header className='w-full min-h-16 flex-center'>
			<div className='container-center'>
				<Image src={'./next.svg'} width={80} height={50} alt='vercel'/>
			</div>
		</header>
	)
}
