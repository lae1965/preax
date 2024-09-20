import React from 'react'
import styles from './Button.module.css'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	title: string
	width?: string
}

const Button: React.FC<ButtonProps> = ({
	title,
	width = '304px',
	...props
}) => {
	return (
		<button className={styles.button} style={{ width }} {...props}>
			{title}
		</button>
	)
}

export default Button
