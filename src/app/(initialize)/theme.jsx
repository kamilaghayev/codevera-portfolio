'use client'

import { ConfigProvider } from 'antd'

const Theme = ({ children }) => {
	return (
		<ConfigProvider
			theme={{
				token: {
					colorPrimary: "hsl(var(--primary-500))",
					colorBgBase: "hsl(var(--background))",
					colorTextBase: "hsl(var(--foreground))",
					fontFamily: 'var(--font-nunito)'
				}
			}}
		>
			{children}
		</ConfigProvider>
	)
}

export default Theme