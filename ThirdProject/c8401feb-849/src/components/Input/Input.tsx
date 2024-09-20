import React, { InputHTMLAttributes } from 'react'
import styles from './Input.module.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	label: string
	hint?: string
}

const Input: React.FC<InputProps> = ({ label, hint, ...props }) => {
	return (
		<div className={styles.inputGroup}>
			<label htmlFor={props.id} className={styles.label}>
				{label}
			</label>
			<input {...props} className={styles.input} />
			{hint && <p className={styles.inputDescription}>{hint}</p>}
		</div>
	)
}

export default Input
