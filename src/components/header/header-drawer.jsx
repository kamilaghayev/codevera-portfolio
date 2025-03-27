'use client'

import { Button, Drawer } from 'antd'
import { Fragment, useState } from 'react';
import { AnimatedBurgerMenu } from './animated-burger-menu';
import { NavLinks } from '@/app/(initialize)/constants';
import Link from 'next/link';

export const HeaderDrawer = () => {
	const [open, setOpen] = useState(false);

	const showDrawer = () => {
		setOpen(true);
	};

	const onClose = () => {
		setOpen(false);
	};
	const navListItem = (link, index) => (
		<li 
			className='transition-all cursor-pointer px-5 py-2 rounded-full text-foreground' 
			key={`${link?.href}-${index}`}
		>
			<Link href={link?.href} color='text-foreground' onClick={onClose}>{link?.label}</Link>
		</li>
	)
	const drawerDropdown = (link) => {
		return (
			<Fragment key={`${link.label}-${link.href}`}>
				{link?.isParentLink && navListItem(link, link.label)}
				{link?.children && link.children?.map((subLink, idx) => navListItem(subLink, idx))}
			</Fragment>
		)
	}
	return (
		<div className='md:hidden'>
			<Button type="text" onClick={showDrawer}>
				<AnimatedBurgerMenu/>
			</Button>
			<Drawer title="CodeVera" onClose={onClose} open={open}>
				<ul className='w-full flex flex-col'>
					{NavLinks.map((link, index)=> 
						link?.children 
							? drawerDropdown(link)
							: navListItem(link, index)
					)}
				</ul>
			</Drawer>
		</div>
	)
}