'use client'

import { ConfigProvider } from 'antd'

const Theme = ({ children }) => {
	return (
		<ConfigProvider
			theme={{
				token: {
					colorPrimary: ''
				}
			}}
		>
			{children}
		</ConfigProvider>
	)
}

export default Theme