import { useEffect } from 'react'
import { useNavigate } from 'react-router'
import Button from '../../Button/Button'
import Layout from '../../Layout/Layout'
import styles from './NotFound.module.css'

interface NotFoundProps extends React.HTMLAttributes<HTMLElement> {}

const NotFound: React.FC<NotFoundProps> = () => {
	const navigate = useNavigate()

	useEffect(() => {
		const keyDown = (e: KeyboardEvent) => {
			if (e.key === 'Enter') {
				e.preventDefault()
				handleClick()
			}
		}

		addEventListener('keydown', keyDown)
		return () => removeEventListener('keydown', keyDown)
	}, [])

	const handleClick = () => {
		if (localStorage.getItem('name')) navigate('/themes')
		else navigate('/')
	}

	return (
		<Layout
			title='Ой, кажется такой страницы не существует'
			width='704px'
			paddingBottom='64px'
		>
			<Button title='На главную' onClick={handleClick} />
			<p className={styles.text}>
				или нажми <span>Enter ↵</span>
			</p>
		</Layout>
	)
}

export default NotFound
