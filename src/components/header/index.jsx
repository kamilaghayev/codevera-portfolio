import { NavLinks } from '@/config/navlinks'
import { Dropdown } from 'antd'
import Image from 'next/image'
import Link from 'next/link'
import BurgerMenu from '../burger-menu'
import { ChangeTheme } from '@/features/change-theme'

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
		<header className='w-full min-h-16 flex-center sticky pt-2 z-[44]'>
			<div className='w-fit mx-auto flex items-center gap-16 justify-between border px-4 py-2 min-h-[52px] rounded-lg border-gray-300 bg-gray-100'>
				<Image src={'/logo.webp'} width={56} height={46} alt='CodeVera'/>

				<nav className='hidden md:block'>
					<ul className='flex gap-5'>
						{NavLinks.map((link, index) => (
							<li 
								key={`${link?.href}-${index}`}
								className='flex-center transition-all cursor-pointer py-2 rounded-full hover:text-primary-500'
							>
								{link?.children 
									? navbarDropdown(link)
									: <Link href={link?.href}>{link?.label}</Link>}
							</li>
						))}
						<li>
							<ChangeTheme/>
						</li>
					</ul>
				</nav>

				<BurgerMenu/>
			</div>
		</header>
	)
}
