import { createStore } from "zustand";
import { devtools } from 'zustand/middleware'
const THEME_TOKEN = "theme-layout"

export const getThemeOnStorage = () => {
	const theme = localStorage.getItem(THEME_TOKEN);
	if (!theme) {
		return typeof window !== "undefined" ? window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light" : "light";
	}
	
	return theme;
}
const changeThemeOnStorage = (theme) => {
	localStorage.setItem(THEME_TOKEN, theme);
}
export const createThemeStore = () => {
	return createStore()(devtools((set) => ({
		theme: "light",

		setTheme: (theme) => {
			changeThemeOnStorage(theme)
			set(() => ({ theme }));
		},
	})));
};


