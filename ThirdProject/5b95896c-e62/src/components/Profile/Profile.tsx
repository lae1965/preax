import { useAppSelector } from '../../model/store'
import styles from './Profile.module.css'

export const Profile: React.FC = () => {
  const userName = useAppSelector(state => state.auth.user?.name)

  return (
    <div className={styles.wrapper}>
      <div className={styles.avatar}>{userName?.charAt(0)}</div>
      <div className={styles.name}>{userName}</div>
    </div>
  )
}
