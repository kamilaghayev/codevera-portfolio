'use client'

import { useEffect, useState } from 'react';
import { ChangeThemeSwitch } from './change-theme-switch'
import { useThemeStore } from './change-theme.provider';

export const ChangeTheme = ({size, variant}) => {
	const { theme, setTheme} = useThemeStore((state) => state);
	const changeTheme = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark');
	}
	console.log(theme);
	
	return (
		<ChangeThemeSwitch isChecked={theme === 'dark'} onClick={changeTheme} size={size} variant={variant}/>
	);
} 
