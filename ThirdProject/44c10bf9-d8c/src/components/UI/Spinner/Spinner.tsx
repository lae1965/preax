import { DetailedHTMLProps, HTMLAttributes } from 'react'
import styles from './spinner.module.css'

export const Spinner: React.FC<
	DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = () => (
	<div className={styles.ldsEllipsis}>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
	</div>
)
