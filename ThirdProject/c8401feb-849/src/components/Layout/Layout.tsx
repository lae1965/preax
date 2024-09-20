import React from 'react'
import styles from './Layout.module.css'
import Logo from '../Logo/Logo'

interface LayoutProps extends React.HTMLAttributes<HTMLDivElement> {
	title: string
	paddingBottom?: string
	width?: string
}

const Layout: React.FC<LayoutProps> = ({
	title,
	width = 'auto',
	paddingBottom = '44px',
	children
}) => {
	return (
		<div style={{ width }}>
			<Logo logoName='OUIZ' />
			<div className={styles.formContainer} style={{ paddingBottom }}>
				<img
					src='images/formImage.png'
					alt='formImage'
					className={styles.formImage}
				/>
				<h1 className={styles.title}>{title}</h1>
				{children}
			</div>
		</div>
	)
}

export default Layout
