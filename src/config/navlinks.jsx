import { useTranslation } from './language';
import { getUrls } from './url.config'

const urls = getUrls();
const dictionary = useTranslation('Pages');
export const NavLinks = [
	{
		href: urls.home(),
		label: dictionary.home,
	},
	{
		href: urls.portfolio(),
		label: dictionary.portfolio,
	},
	{
		href: urls.contact(),
		label: dictionary.contactUs,
	},
	{
		href: urls.services(),
		label: dictionary.services,
		children: [
			{
				href: urls.eCommerceService(),
				label: dictionary.eCommerce,
			},
			{
				href: urls.erpSystemsService(),
				label: dictionary.erpSystems,
			}
		]
	}
]