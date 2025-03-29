'use client';

import {  createContext, useContext, useEffect, useRef } from 'react';

import { useStore } from 'zustand';
import { createThemeStore, getThemeOnStorage } from './change-theme.store';




export const ThemeStoreContext = createContext(undefined);

export const ThemeStoreProvider = ({ children }) => {
    const storeRef = useRef(null);

    if (!storeRef.current) {
        storeRef.current = createThemeStore();
    }

    return (
		<ThemeStoreContext.Provider value={storeRef.current}>
			<GetThemeOnUser>
				{children}

			</GetThemeOnUser>
		</ThemeStoreContext.Provider>
	);
};

export const useThemeStore = (selector ) => {
    const themeStoreContext = useContext(ThemeStoreContext);

    if (!themeStoreContext) {
        throw new Error(`useThemeStore must be used within ThemeStoreProvider`);
    }

    return useStore(themeStoreContext, selector);
};

const GetThemeOnUser = ({children}) => {
	const {setTheme, theme} = useThemeStore((state) => state);
	useEffect(() => {
		const themeOnStorage = getThemeOnStorage();
		setTheme(themeOnStorage);
	}, []);
	useEffect(() => {
		document.documentElement.setAttribute('data-theme', theme);
	}, [theme]);
	return (
		<>{children}</>
	)
}