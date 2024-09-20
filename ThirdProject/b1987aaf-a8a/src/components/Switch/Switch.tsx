import styles from './switch.module.css';
import Sun from '@/UI/icons/Sun';
import Moon from '@/UI/icons/Moon';
import useAppDispatch from '@/hooks/useAppDispatch';
import { toggleScreenTheme } from '@/store/slices/screenTheme';
import useAppSelector from '@/hooks/useAppSelector';

export const Switch: React.FC = () => {
	const dispatch = useAppDispatch();
	const isScreenThemeLight = useAppSelector(
		(state) => state.screenTheme.isLight,
	);

	const handleToggleTheme = () => {
		dispatch(toggleScreenTheme());
	};

	return (
		<button
			className={styles.toggleThemes}
			type='button'
			onClick={handleToggleTheme}
		>
			<div
				className={styles.ellipse}
				data-theme={isScreenThemeLight ? 'light' : 'dark'}
			></div>
			<Sun />
			<div
				className={styles.moon}
				data-theme={isScreenThemeLight ? 'light' : 'dark'}
			>
				<Moon />
			</div>
		</button>
	);
};
