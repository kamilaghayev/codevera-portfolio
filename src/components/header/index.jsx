import { NavLinks } from '@/config/navlinks'
import { Dropdown, Space } from 'antd'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { HeaderDrawer } from './header-drawer'

export const Header = () => {
	const navbarDropdown = (linkItem) => {
		const items = linkItem.children?.map((link, idx) => {
			const {label, href, ...linkProps} = link
			return {
				key: idx,
				label: (
					<Link href={href}>{label}</Link>
				),
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
		<header className='w-full min-h-16 flex-center sticky'>
			<div className='container-center flex items-center justify-between'>
				<Image src={'/logo.webp'} width={66} height={46} alt='CodeVera'/>
				<nav className='hidden md:block'>
					<ul className='flex gap-2'>
						{NavLinks.map((link, index) => (
							<li className='flex-center transition-all cursor-pointer px-5 py-2 rounded-full hover:bg-neutral-50 hover:text-primary-500 focus-within:bg-neutral-50' key={`${link?.href}-${index}`}>
								{link?.children 
									? navbarDropdown(link)
									: <Link href={link?.href}>{link?.label}</Link>}
							</li>
						))}
					</ul>
				</nav>
				<HeaderDrawer/>
			</div>
		</header>
	)
}
