
export function queryParamsBuilder(params) {
	const queryString = Object.entries(params)
		.flatMap(([key, value]) => {
			if (value === undefined || value === null) return [];
			if (Array.isArray(value)) {
				return value.map((v) => `${encodeURIComponent(key)}=${encodeURIComponent(String(v))}`);
			}
			return `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`;
		})
		.join('&');

	return queryString ? `?${queryString}` : '';
}
