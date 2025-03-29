
'use client'

import { useState } from 'react';
import { ChangeThemeSwitch } from './change-theme-switch'

export const ChangeTheme = () => {
	const [theme, setTheme] = useState('light');
	const changeTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');
	
	return (
		<ChangeThemeSwitch isChecked={theme === 'dark'} onClick={changeTheme}/>
	)
}