'use client'

import { useState } from 'react'
import { motion } from 'framer-motion';
import { usePathname, useRouter } from 'next/navigation';
import { fadeInOut, menuSlide } from './animation';
import { CurvedMenuItem } from './curved-menu-item';
import { Curve } from './curve';
import { NavLinks } from '@/config/navlinks';
import { ChangeTheme } from '@/features/change-theme';


export const CurvedMenu = ({ setIsOpen }) => {

	const pathname = useRouter();
	const [selectedIndicator, setSelectedIndicator] = useState(pathname);
	return (
		<>
			<motion.div
				variants={fadeInOut}
				initial="initial"
				animate="enter"
				exit="exit"
				className='fixed w-full h-screen top-0 left-0 bg-gray-800/20'
				onClick={() => setIsOpen(false)}
			/>
			<motion.div
				variants={menuSlide}
				initial="initial"
				animate="enter"
				exit="exit"
				className="h-screen bg-foreground fixed right-0 top-0 text-background z-40 max-xs-3:w-screen"
			>
				<div className="box-border h-screen max-xs-3:px-8 px-[100px]  flex flex-col items-center justify-between">
					<div className='w-full'>
						<div className='w-full flex justify-start mt-4 h-10 items-center'>
							<ChangeTheme variant={'revert'}/>
						</div>
						<div
							className="w-full flex flex-col text-[56px] gap-3 pt-10"
							onMouseLeave={() => setSelectedIndicator(pathname)}
						>
							<div className={"border-b border-gray-400 uppercase text-sm mb-[40px]"}>
								<p>Navigation</p>
							</div>
							{NavLinks?.map((data, index) => (
								<CurvedMenuItem
									key={`${data.href}-${data.label}`}
									data={{ ...data, index }}
									isActive={selectedIndicator == data.href}
									setIsOpen={setIsOpen}
								/>
							))}
						</div>
					</div>
					<div className="flex xs-3:w-full justify-between text-sm gap-10 pb-10">
						<a>Instagram</a>
						<a>LinkedIn</a>
						<a>Twitter</a>
					</div>
				</div>
				<Curve />
			</motion.div>
		</>
	)
}