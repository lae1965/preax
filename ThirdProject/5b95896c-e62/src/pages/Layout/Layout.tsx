import { Navigate, Outlet } from 'react-router-dom'
import { useAuth, useThemes } from '../../hooks'

import { Logo, Profile, Sandwich, TabBar } from '../../components'

import styles from './Layout.module.css'
import { IconButton } from '../../components/IconButton/IconButton'

export const Layout: React.FC = () => {
  const { signOut } = useAuth()
  const { allThemesSelected, resetThemes } = useThemes()

  if (!allThemesSelected) {
    return <Navigate to='/themes' replace />
  }

  const handleSignOut = () => {
    signOut()
    resetThemes()
  }

  return (
    <div className={styles.container}>
      <div className={styles.layoutWrapper}>
        <div className={styles.layout}>
          <header className={styles.header}>
            <Logo to={'/main'} className={styles.logo} />
            <TabBar />
            <div className={styles.right}>
              <div className={styles.bigScreenWrapper}>
                <Profile />
                <IconButton onClick={handleSignOut} />
              </div>
              <button className={styles.sandwich} type='button'>
                <Sandwich />
              </button>
            </div>
          </header>
          <div className={styles.outletWrapper}>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  )
}
