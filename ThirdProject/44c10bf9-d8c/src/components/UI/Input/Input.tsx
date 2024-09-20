import React, {
	InputHTMLAttributes,
	MouseEventHandler,
	useRef,
	useState
} from 'react'
import styles from './input.module.css'
import { XCircle } from '../../SVG/XCircle/XCircle'
import { cn } from '../../../utils/classNames'
import { ErrorObject } from '../../Form/Form'
import { EyeOff } from '../../SVG/Eye/EyeOff'
import { Eye } from '../../SVG/Eye/Eye'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	label: string
	value: string
	clearvalue: MouseEventHandler<HTMLSpanElement>
	hint?: string
	error?: ErrorObject
	inputType?: string
}

const types = ['password', 'text']

export const Input: React.FC<InputProps> = ({
	label,
	value,
	clearvalue,
	inputType = 'text',
	hint,
	error,
	...props
}) => {
	const styleColor = useRef({})
	const borderColor = useRef({})
	if (error) {
		styleColor.current = { color: error.color }
		borderColor.current = { borderColor: error.color }
	}

	const [showPassword, setShowPassword] = useState(false)
	const toggleShow = () => {
		setShowPassword(!showPassword)
	}
	return (
		<div className={styles.inputGroup}>
			<label className={styles.label}>
				{label}
				<input
					{...props}
					type={inputType === 'password' ? types[+showPassword] : inputType}
					data-type={inputType}
					value={value}
					className={styles.input}
					style={borderColor.current}
				/>
				<div className={styles.controlButton}>
					{value !== '' && (
						<span onClick={clearvalue}>
							<XCircle />
						</span>
					)}
					{value !== '' &&
						inputType === 'password' &&
						((showPassword && (
							<span onClick={toggleShow}>
								<EyeOff />
							</span>
						)) || (
							<span onClick={toggleShow}>
								<Eye />
							</span>
						))}
				</div>
			</label>
			{error && (
				<p
					className={cn([styles.inputDescription, styles.error])}
					style={styleColor.current}
				>
					{error.message}
				</p>
			)}
			{hint && <p className={styles.inputDescription}>{hint}</p>}
		</div>
	)
}
