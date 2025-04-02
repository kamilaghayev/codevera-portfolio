import { queryParamsBuilder } from '@/shared/utils'

const URL_CREATOR = (url = '', urlParams = {}) => {
	const params = queryParamsBuilder(urlParams)
	return `${url}${params || ''}`
}

export const APP_URLS = {
	ROOT: (url = '', queryParams = {}) => URL_CREATOR(`/${url}`, queryParams),

	home: (url = '', queryParams = {}) => APP_URLS.ROOT(`#home${url}`, queryParams),
	about: (url = '', queryParams = {}) => APP_URLS.ROOT(`#about${url}`, queryParams),
	portfolio: (url ='', queryParams = {}) => APP_URLS.ROOT(`#portfolio${url}`, queryParams),
	contact: (url = '', queryParams = {}) => APP_URLS.ROOT(`#contact${url}`, queryParams),
	contactUs: (url = '', queryParams = {}) => APP_URLS.ROOT(`contact${url}`, queryParams),
}

export const getUrls = () => APP_URLS;