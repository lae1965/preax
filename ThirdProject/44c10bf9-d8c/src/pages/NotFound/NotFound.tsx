import { Button, Logo } from '../../components'
import lost from '/lost.svg'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './NotFound.module.css'
import { useIsPressEnter } from '../../hooks/useIsPressEnter'

export const NotFound: React.FC = () => {
	const navigate = useNavigate()
	const isPressAltEnter = useIsPressEnter()

	const handleGoHome = () => {
		navigate('/themes')
	}

	useEffect(() => {
		if (isPressAltEnter) {
			handleGoHome()
		}
	}, [isPressAltEnter])

	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<Logo />
				<img className={styles.formImg} src={lost} alt='lost' />
				<div className={styles.contentWrapper}>
					<h1 className={styles.title}>
						Ой, кажется такой страницы не существует
					</h1>
					<div className={styles.footerWrapper}>
						<Button
							type='button'
							onClick={handleGoHome}
							alternativeKeyboarShortcut={true}
						>
							На главную
						</Button>
					</div>
				</div>
			</div>
		</div>
	)
}
