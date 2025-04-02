import { Button } from 'antd'
import { FaArrowRight } from "react-icons/fa6";

export const SendButton = (props) => {
	return (
		<button variant='solid' style={{ backgroundColor: '#8ac44f', borderColor: '#8ac44f', color: '#fff' }} className='w-full flex justify-center items-center gap-4 flex-1 min-h-10 sm:min-h-11 lg:min-h-12 !rounded-4xl !text-base sm:!text-[17px] lg:!text-lg !font-semibold group'>
			Send message
			<FaArrowRight className='group-hover:translate-x-2 transition-transform' />
		</button>
	)
}
