'use client'

import dynamic from 'next/dynamic';



const Laptop = dynamic(() => import('./laptop'), {ssr: false})

export const Laptop3d = () => {
	return <Laptop/>
}