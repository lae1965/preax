import React from 'react'
import styles from './button.module.css'
import { keyboardShortcut } from '../../../utils/constants'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string
	alternativeKeyboarShortcut?: boolean
}

export const Button: React.FC<ButtonProps> = ({
	children,
	className,
	alternativeKeyboarShortcut,
	...props
}) => {
	return (
		<div>
			<button className={`${styles.button} ${className}`} {...props}>
				{children}
			</button>
			{alternativeKeyboarShortcut && (
				<div className={styles.description}>
					<span>или нажми </span>
					<span className={styles.enter}>{keyboardShortcut()}</span>
				</div>
			)}
		</div>
	)
}
