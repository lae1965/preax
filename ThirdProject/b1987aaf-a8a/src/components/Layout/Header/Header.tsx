import { Logo } from '@/UI';
import styles from './header.module.css';

export const Header = () => {
	return (
		<header className={styles.header}>
			<Logo className={styles.logo} />
		</header>
	);
};
