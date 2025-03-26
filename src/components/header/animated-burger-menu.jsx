import { cls } from '@/shared/utils'

export const AnimatedBurgerMenu = ({isOpen = false}) => {
	return (
		<div className={cls(
			"flex items-center justify-center bg-primary-500"
		)}>
			<span 
				aria-hidden="true" 
				className={cls(
					"block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out",
					isOpen ? 'rotate-45': '-translate-y-1.5'
				)}
				/>
			<span 
				aria-hidden="true" 
				className={cls(
					"block absolute  h-0.5 w-5 bg-current transform transition duration-500 ease-in-out", 
					isOpen && 'opacity-0'
				)}
			/>
			<span 
				aria-hidden="true" 
				className={cls(
					"block absolute  h-0.5 w-5 bg-current transform transition duration-500 ease-in-out" ,
					isOpen ? '-rotate-45': 'translate-y-1.5'
				)}
			/>
		</div>
	)
}