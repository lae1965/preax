import clsx from '@/utils/clsx';
import styles from './iconbutton.module.css';

interface IconButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const IconButton: React.FC<IconButtonProps> = ({
	className,
	children,
	...otherProps
}) => {
	return (
		<button className={clsx(styles.btn, className)} {...otherProps}>
			{children}
		</button>
	);
};
