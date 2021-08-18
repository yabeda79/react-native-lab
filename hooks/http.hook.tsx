import { useState, useCallback } from 'react';

// type Headers = Record<string, string>;

const PATH = 'http://localhost:3000';

export const useHttp = () => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const request = useCallback(async (url, method = 'GET', body = null, headers = null) => {
		try {
			setLoading(true);

			const response = await fetch(`${PATH}${url}`, {
				method,
				...(!!body && { body: JSON.stringify(body) }),
				headers: { ...headers, ...(!!body && { 'Content-type': 'application/json' }) },
			});

			const data = await response.json();

			if (!response.ok) {
				throw new Error(data.message || 'Something went wrong (useHttp)');
			}

			setTimeout(() => {
				setLoading(false);
			}, 10000);
			// for testing loader only

			// setLoading(false);

			return data;
		} catch (e) {
			setTimeout(() => {
				setLoading(false);
			}, 10000);
			// for texting loader only
			// setLoading(false);
			setError(e.message);
			throw e;
		}
	}, []);

	const clearError = () => {
		setError(null);
	};

	return { loading, request, error, clearError };
};
