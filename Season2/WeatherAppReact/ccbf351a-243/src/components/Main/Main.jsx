import { CityCard } from '../CityCard/CityCard'
import { CityList } from '../CityList/CityList'

import styles from './main.module.css'

export const Main = () => {
  return (
    <main className={styles.main}>
      <CityCard />
      <CityList />
    </main>
  )
} 