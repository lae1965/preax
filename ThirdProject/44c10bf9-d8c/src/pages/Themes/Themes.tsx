import { Button } from '../../components'
import { useAppDispatch } from '../../model/store'
import { signOut } from '../../model/slices/authSlice'
import styles from './Themes.module.css'

export const Themes: React.FC = () => {
	const dispatch = useAppDispatch()

	const handleLogout = () => {
		dispatch(signOut())
	}

	return (
		<div className={styles.container}>
			<Button onClick={handleLogout} className={styles.leaveButton}>
				Выйти
			</Button>
		</div>
	)
}
