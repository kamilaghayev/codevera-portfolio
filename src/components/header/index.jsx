'use client'
import { NavLinks } from '@/config/navlinks'
import { Dropdown } from 'antd'
import Image from 'next/image'
import Link from 'next/link'
import BurgerMenu from '../burger-menu'
import { ChangeTheme } from '@/features/change-theme'
import { motion } from "framer-motion";
import { getUrls } from '@/config/url.config'



const DURATION = 0.25;
const STAGGER = 0.025;

const FlipLink = ({ children }) => {
	return (
		<motion.span
			initial="initial"
			whileHover="hovered"
			className="relative block overflow-hidden whitespace-nowrap"
			style={{
				lineHeight: .9,
			}}
		>
			<div>
				{children.split("").map((l, i) => (
					<motion.span
						variants={{
							initial: {
								y: 0,
							},
							hovered: {
								y: "-100%",
							},
						}}
						transition={{
							duration: DURATION,
							ease: "easeInOut",
							delay: STAGGER * i,
						}}
						className="inline-block"
						key={i}
					>
						{l}
					</motion.span>
				))}
			</div>
			<div className="absolute inset-0">
				{children.split("").map((l, i) => (
					<motion.span
						variants={{
							initial: {
								y: "100%",
							},
							hovered: {
								y: 0,
							},
						}}
						transition={{
							duration: DURATION,
							ease: "easeInOut",
							delay: STAGGER * i,
						}}
						className="inline-block"
						key={i}
					>
						{l}
					</motion.span>
				))}
			</div>
		</motion.span>
	);
};
export const Header = () => {
	const navbarLink = (linkItem, index) => (
		<Link href={linkItem?.href} className='h-full'>
			<FlipLink href={linkItem?.href}>
				{linkItem?.label}
			</FlipLink>
		</Link>
	)
	const navbarDropdown = (linkItem) => {
		const items = linkItem.children?.map((link, idx) => {
			const { label, href, ...linkProps } = link
			return {
				key: idx,
				label: navbarLink(link),
				...linkProps
			}
		})
		return (
			<Dropdown menu={{ items }}>
				{linkItem?.isParentLink
					? (
						<Link href={linkItem?.href}>{linkItem?.label}</Link>
					)
					: (
						<a target="_blank" rel="noopener noreferrer" className='cursor-pointer'>
							{linkItem?.label}
						</a>
					)}
			</Dropdown>
		)
	}
	return (
		<header className='w-full min-h-16 flex-center sticky top-0 pt-2 z-[44]'>
			<div className='relative mx-2.5 xs-3:mx-auto flex items-center gap-16 justify-between px-5 h-full w-full xs-3:w-9/12 md:w-fit min-h-[52px] rounded-4xl bg-[#F5F5F5] '>
				
				<Link href={getUrls().home()} className='flex items-center w-[100px] h-[50px] overflow-hidden -translate-y-1 hover:scale-110 transition-all duration-300'>
					<Image src={'/logo.svg'} width={200} height={50} alt='CodeVera' className='scale-125'/>
				</Link>

				<nav className='hidden md:block'>
					<ul className='flex gap-5 items-center'>
						{NavLinks.map((link, index) => (
							<li
								key={`${link?.href}-${index}`}
								className='flex-center transition-all cursor-pointer rounded-full hover:text-[#8ac44f]'
							>
								{link?.children
									? navbarDropdown(link)
									: navbarLink(link, index)}
							</li>
						))}
					</ul>
				</nav>

				{/* <div className='hidden md:block pt-[1px]'>
					<ChangeTheme />
				</div> */}

				<BurgerMenu />
			</div>
		</header>
	)
}
