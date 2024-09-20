import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import useAppSelector from './hooks/useAppSelector';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Themes from './pages/Themes';
import Main from './pages/Main';
import Rating from './pages/Rating';
import ProtectedRoute from './HOC/ProtectedRoute';
import { useEffect } from 'react';
import useAppDispatch from './hooks/useAppDispatch';
import { setScreenTheme } from './store/slices/screenTheme';

const App = () => {
	const name = useAppSelector((state) => state.user.data?.name);
	const themes = useAppSelector((state) => state.user.themes);
	const isScreenThemeLight = useAppSelector(
		(state) => state.screenTheme.isLight,
	);
	const dispatch = useAppDispatch();

	useEffect(() => {
		const isLight = sessionStorage.getItem('is_screen_theme_light');

		console.log(isLight);
		if (isLight) console.log(!!+isLight);

		dispatch(
			setScreenTheme(
				isLight
					? !!+isLight
					: window.matchMedia('(prefers-color-scheme: light)').matches,
			),
		);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		const bodyClassList = document.body.classList;
		if (isScreenThemeLight) {
			bodyClassList.add('screen-light-theme');
			bodyClassList.remove('screen-dark-theme');
		} else {
			bodyClassList.add('screen-dark-theme');
			bodyClassList.remove('screen-light-theme');
		}

		sessionStorage.setItem(
			'is_screen_theme_light',
			(+isScreenThemeLight).toString(),
		);
	}, [isScreenThemeLight]);

	return (
		<BrowserRouter>
			<Routes>
				<Route
					element={<ProtectedRoute isAllowed={!name} redirectPath='/themes' />}
				>
					<Route path='/' element={<Login />} />
				</Route>

				<Route element={<ProtectedRoute isAllowed={!!name} />}>
					<Route
						element={
							<ProtectedRoute isAllowed={!!themes} redirectPath='/themes' />
						}
					>
						<Route path='/main' element={<Main />} />
						<Route path='/rating' element={<Rating />} />
					</Route>
					<Route path='/themes' element={<Themes />} />
				</Route>
				<Route path='/not-found' element={<NotFound />} />
				<Route path='*' element={<Navigate to='/not-found' />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
