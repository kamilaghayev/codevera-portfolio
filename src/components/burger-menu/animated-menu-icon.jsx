import { cls } from '@/shared/utils'
import { cubicBezier } from './animation'

export const AnimatedMenuIcon = ({isOpen = false, setIsOpen}) => {
	const animationDuration = `duration-[550ms] delay-150 ease-[cubic-bezier(${cubicBezier.join(',')})]`
	return (
			<button 
				onClick={() => setIsOpen(prev => !prev)} 
				className={cls(
					"flex items-center justify-center w-10 h-10 relative rounded-lg cursor-pointer z-[41] overflow-hidden"
				)}
			>
				<span
					className={cls(
						'absolute inset-0 bg-primary-500 transition-all',
						animationDuration,
						isOpen ? 'w-full' : 'w-0'
					)}
				/>
				<span 
					aria-hidden="true" 
					className={cls(
						"block absolute h-0.5 w-5 transform transition ease-in-out",
						animationDuration,
						isOpen ? 'rotate-45 bg-white': '-translate-y-1.5 bg-black'
					)}
					/>
				<span 
					aria-hidden="true" 
					className={cls(
						"block absolute  h-0.5 w-5 transform bg-black transition ease-in-out", 
						animationDuration,
						isOpen && 'opacity-0'
					)}
				/>
				<span 
					aria-hidden="true" 
					className={cls(
						"block absolute  h-0.5 w-5 transform transition ease-in-out" ,
						animationDuration,
						isOpen ? '-rotate-45 bg-white': 'translate-y-1.5 bg-black'
					)}
				/>
			</button>
	)
}