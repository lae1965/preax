import { Logo } from '../UI'
import { WeatherSearch } from '../WeatherSearch/WeatherSearch'

import styles from './header.module.css'

export const Header = ({isDropdownOpen, setIsdDropdownOpen}) => {
  return (
    <header className={styles.header}>
      <Logo className={styles.logo} />
      <WeatherSearch isDropdownOpen={isDropdownOpen} setIsdDropdownOpen={setIsdDropdownOpen}/>
    </header>
  )
}
