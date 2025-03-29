
'use client'

import { useEffect, useState } from 'react'
import { AnimatedMenuIcon } from './animated-menu-icon'
import { CurvedMenu } from './curved-menu'
import { AnimatePresence } from 'framer-motion';
const BurgerMenu = () => {
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		if (isOpen) {
			document.body.classList.add("overflow-hidden");
		} else {
			document.body.classList.remove("overflow-hidden");
		}

		return () => {
			document.body.classList.remove("overflow-hidden");
		};
	}, [isOpen]);
	return (
		<div className='md:hidden'>
			<AnimatedMenuIcon isOpen={isOpen} setIsOpen={setIsOpen} />
			<AnimatePresence mode="wait">
				{isOpen && <CurvedMenu key="curved-menu" setIsOpen={setIsOpen} />}
			</AnimatePresence>
		</div>
	)
}

export default BurgerMenu