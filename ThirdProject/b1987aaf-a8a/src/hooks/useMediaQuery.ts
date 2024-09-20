import { useState, useEffect } from 'react';

const useMediaQuery = (query: string) => {
	const [matches, setMatches] = useState(false);

	useEffect(() => {
		setMatches(window.matchMedia(query).matches);

		const handler = (e: MediaQueryListEvent) => setMatches(e.matches);

		window.matchMedia(query).addEventListener('change', handler);
	}, []);

	return matches;
};

export default useMediaQuery;
