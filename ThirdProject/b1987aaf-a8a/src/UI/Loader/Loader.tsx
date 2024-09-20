import clsx from '@/utils/clsx';
import styles from './loader.module.css';

interface LoaderProps extends React.HTMLAttributes<HTMLElement> {}

export const Loader: React.FC<LoaderProps> = ({ className, ...otherProps }) => {
	return (
		<div className={clsx(styles.container, className)} {...otherProps}>
			<span className={styles.dot} />
		</div>
	);
};
