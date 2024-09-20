import clsx from '@/utils/clsx';
import { Loader } from '..';
import styles from './button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	tip?: string;
	loading?: boolean;
	wrapperClassName?: string;
}

export const Button: React.FC<ButtonProps> = ({
	wrapperClassName,
	className,
	children,
	tip,
	loading,
	...otherProps
}) => {
	return (
		<div className={clsx(styles.wrapper, wrapperClassName)}>
			<button
				className={clsx(styles.btn, className, loading && styles.loading)}
				{...otherProps}
			>
				{loading ? <Loader className={styles.loader} /> : children}
			</button>
			{tip && (
				<p className={styles.tip}>
					или нажми <span>{tip}</span>
				</p>
			)}
		</div>
	);
};
