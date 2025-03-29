'use client'

import Link from 'next/link';
import { motion } from 'framer-motion';
import { slide, scale } from './animation';

export const CurvedMenuItem = ({ data, isActive, setIsOpen }) => {

	const { label, href, index } = data;

	return (
		<motion.div
			className="relative flex items-center"
			custom={index}
			onClick={() => setIsOpen(false)}
			variants={slide}
			initial="initial"
			animate="enter"
			exit="exit"
		>
			<motion.div
				variants={scale}
				animate={isActive ? "open" : "closed"}
				className="w-[10] h-[10] bg-background rounded-[50%] absolute left-[-30px]">
			</motion.div>
			<Link href={href}>{label}</Link>
		</motion.div>
	)
}