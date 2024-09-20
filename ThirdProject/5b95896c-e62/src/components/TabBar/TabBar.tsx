import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { useLocation } from 'react-router-dom'
import { ROUTE_PATHS } from '../../constants'
import styles from './TabBar.module.css'
import { Tab } from '..'

interface ITabBarProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLMenuElement>, HTMLMenuElement> {}

export const TabBar: React.FC<ITabBarProps> = () => {
  const location = useLocation()

  return (
    <nav className={styles.nav}>
      <Tab
        text='Главная'
        path={ROUTE_PATHS.MAIN}
        isActive={location.pathname === ROUTE_PATHS.MAIN}
      />
      <Tab
        text='Рейтинг'
        path={ROUTE_PATHS.RAITING}
        isActive={location.pathname === `${ROUTE_PATHS.MAIN}/${ROUTE_PATHS.RAITING}`}
      />
    </nav>
  )
}
