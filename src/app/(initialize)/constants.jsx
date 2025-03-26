
export const NavLinks = [
	{
		href: '/',
		label: 'Home',
	},
	{
		href: '#portfolio',
		label: 'About',
	},
	{
		href: '#contact',
		label: 'Contact',
	},
	{
		href: '/services',
		label: 'Services',
		children: [
			{
				href: '/e-commerce',
				label: 'E-commerce',
			},
			{
				href: '/erp-systems',
				label: 'Erp systems',
			}
		]
	}
]