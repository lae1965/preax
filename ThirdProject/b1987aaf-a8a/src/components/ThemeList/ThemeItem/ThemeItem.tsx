import { ThemeData } from '@/types';
import clsx from '@/utils/clsx';
import styles from './themeitem.module.css';
import CheckCircle from '@/UI/icons/CheckCircle';

interface ThemeItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	data: ThemeData;
	isSelected: boolean;
	isNotSelected: boolean;
}

export const ThemeItem: React.FC<ThemeItemProps> = ({
	data,
	isSelected,
	isNotSelected,
	className,
	...otherProps
}) => {
	return (
		<button
			className={clsx(
				styles.item,
				isSelected && styles.isSelected,
				isNotSelected && styles.isNotSelected,
				className,
			)}
			aria-label={data.name}
			{...otherProps}
		>
			<img className={styles.img} src={data.background.light} alt='' />
			<h2 className={styles.title}>
				{data.name}
				<CheckCircle className={styles.checkIcon} />
			</h2>
		</button>
	);
};
