import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Logo.module.css'
import { LogoSvg } from '../../SVG/LogoSvg/LogoSvg'

interface ILogoProps
	extends DetailedHTMLProps<
		HTMLAttributes<HTMLAnchorElement>,
		HTMLAnchorElement
	> {}

export function Logo({ ...props }: ILogoProps) {
	const navigate = useNavigate()

	const handleLogoClick = () => {
		navigate('/')
	}

	return (
		<a className={styles.wrapper} onClick={handleLogoClick} {...props}>
			<LogoSvg />
		</a>
	)
}
