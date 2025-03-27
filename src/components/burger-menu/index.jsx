import React, { useState } from 'react'
import { AnimatePresence } from "motion/react"
import { AnimatedMenuIcon } from './animated-menu-icon'
import { CurvedMenu } from './curved-menu'
const BurgerMenu = () => {
	const [isOpen, setIsOpen] = useState(false)
	return (
		<>
			<AnimatedMenuIcon isOpen={isOpen} setIsOpen={setIsOpen} />
			<AnimatePresence mode="wait">
				{isOpen && <CurvedMenu />}
			</AnimatePresence>
		</>
	)
}

export default BurgerMenu