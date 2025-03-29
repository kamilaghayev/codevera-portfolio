
import { cls } from '@/shared/utils';
import { IoMdMoon as MoonIcon } from "react-icons/io";


export const ChangeThemeSwitch = ({isChecked = false, ...props}) => {
	debugger
	return (
		<label className="inline-flex relative w-[90px] h-[40px] p-2" {...props}>
			<input className="hidden" id="toggle" type="checkbox" value={isChecked}/>
			<div 
				className={cls(
					"rounded-full h-full aspect-square flex bg-red-400 items-center justify-center" , 
					isChecked ? "translate-x-full" : "translate-x-0",
				)}
			>
			<span>
				<MoonIcon/>
			</span>
			</div>
		</label>
	);
}

