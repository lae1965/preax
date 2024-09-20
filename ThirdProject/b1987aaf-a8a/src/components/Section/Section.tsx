import clsx from '@/utils/clsx';
import styles from './section.module.css';
import { Logo } from '@/UI';

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
	title?: string;
	img?: boolean;
	srcImg?: string;
	header?: boolean;
	titleClassName?: string;
}

export const Section: React.FC<SectionProps> = ({
	title,
	img = true,
	srcImg = '/images/illustration1.png',
	header,
	className,
	titleClassName,
	children,
}) => {
	return (
		<section className={clsx(styles.content, className)}>
			{header && (
				<header className={styles.header}>
					<Logo className={styles.logo} />
					{title && <h2 className={styles.headerTitle}>{title}</h2>}
				</header>
			)}
			{img && <img className={styles.img} src={srcImg} alt='Иллюстрация' />}
			{title && !header && (
				<h2 className={clsx(styles.title, titleClassName)}>{title}</h2>
			)}
			{children}
		</section>
	);
};
