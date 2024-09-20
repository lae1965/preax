import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { Section } from '@/components/Section';
import { Button, Logo } from '@/UI';
import useAppSelector from '@/hooks/useAppSelector';
import useKeyboardShortcut from '@/hooks/useKeyboardShortcut';
import styles from './NotFound.module.css';
import { keyboardShortcuts } from '@/constants';
import useAgentSystem from '@/hooks/useAgentSystem';

const NotFound = () => {
	const name = useAppSelector((state) => state.user.data?.name);

	const isScreenThemeLight = useAppSelector(
		(state) => state.screenTheme.isLight,
	);
	const navigate = useNavigate();

	const os = useAgentSystem();
	useKeyboardShortcut(keyboardShortcuts.altEnter[os].shortcut, () =>
		redirect(),
	);

	const redirect = useCallback(() => {
		navigate(name ? '/themes' : '/');
	}, [name, navigate]);

	return (
		<Layout className={styles.container} header={false}>
			<Logo className={styles.logo} />
			<Section
				title='Ой, кажется такой страницы не существует'
				titleClassName={styles.title}
				className={styles.section}
				srcImg={
					isScreenThemeLight
						? '/images/lostspaceman.png'
						: '/images/darkspaceman.png'
				}
			>
				<Button
					wrapperClassName={styles.wrpbtn}
					className={styles.btn}
					onClick={redirect}
					tip={keyboardShortcuts.altEnter[os].hint}
					autoFocus
				>
					На главную
				</Button>
			</Section>
		</Layout>
	);
};

export default NotFound;
