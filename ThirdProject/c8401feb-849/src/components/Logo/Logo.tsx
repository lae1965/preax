import React from 'react'
import styles from './Logo.module.css'

interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {
	logoName: string
}

const Logo: React.FC<LogoProps> = ({ logoName }) => {
	return <div className={styles.logo}>{logoName}</div>
}

export default Logo
