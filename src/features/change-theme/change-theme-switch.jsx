import { cls } from '@/shared/utils';
import { IoMdMoon as MoonIcon } from "react-icons/io";
import { IoSunny as SunIcon } from "react-icons/io5";

export const ChangeThemeSwitch = ({ isChecked = false, size, variant = 'default', ...props }) => {
	const animation = "transition-all duration-500 ease-in-out";

	return (
		<label
			className={cls(
				"inline-flex relative p-1 border rounded-full cursor-pointer",
				variant === 'revert' ? 'border-primary-900' : 'border-primary-50',
				size === 'lg' ? "w-[90px] h-[40px]" : "w-[65px] h-[30px]"
			)}
			{...props}
		>
			<div
				className={cls(
					"rounded-full h-full aspect-square flex items-center justify-center border p-1 relative",
					animation,
					variant === 'revert' ? 'border-primary-900' : 'border-primary-50',
					isChecked ? size === "lg" ? "translate-x-[50px] rotate-0" : "translate-x-[35px] rotate-0" : "translate-x-0 rotate-180"
				)}
			>
				{/* Sun Icon */}
				<span
					className={cls(
						"absolute transition-all duration-500 ease-in-out",
						isChecked ? "opacity-0" : "opacity-100 "
					)}
				>
					<SunIcon />
				</span>

				{/* Moon Icon */}
				<span
					className={cls(
						"absolute transition-all duration-500 ease-in-out",
						isChecked ? "opacity-100 " : "opacity-0 "
					)}
				>
					<MoonIcon />
				</span>

				<div
					className={cls(
						"absolute transition-all duration-500 ease-in-out",
						isChecked ? "opacity-0" : "opacity-100"
					)}
				/>
			</div>
		</label>
	);
};
