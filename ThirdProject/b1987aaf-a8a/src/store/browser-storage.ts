const AUTH_KEY = 'auth-GyCp6seciH7PGVyFIq8Q';
export const USER_KEY = 'name';
export const THEMES_KEY = 'themes';

export const loadState = (
	key: string,
	type: 'string' | 'object' = 'object',
) => {
	if (!localStorage.getItem(AUTH_KEY)) {
		localStorage.clear();
		return null;
	}

	const data = localStorage.getItem(key);

	return type === 'object' ? JSON.parse(data!) : data;
};

export const saveState = (key: string, data: any) => {
	if (!data) return;

	localStorage.setItem(AUTH_KEY, 'true');
	localStorage.setItem(
		key,
		typeof data === 'object' ? JSON.stringify(data) : data,
	);
};

export const clearState = (key: string) => {
	localStorage.removeItem(key);
};
