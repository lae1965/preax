import { useState } from 'react'
import { TabBar } from '../tab-bar/TabBar'
import { Icon } from '../icon/Icon'
import { Slider } from '../slider/Slider'
import { statisticWeekData, statisticDayData } from './mockData'

import styles from './styles.module.css'

const Tab = () => {
  const [tab, setTab] = useState(1);

  return (
    <section className={styles['statistic']}>
      <TabBar setTab={setTab} tab={tab} />
      <div className={`${styles['statistic-slider']}`}>
        <button className={`${styles['slide-btn']} btn-reset`} disabled>
          <Icon name={'left'} />
        </button>
        <Slider vissible={tab === 1 ? true : false} data={statisticDayData} />
        <Slider vissible={tab === 2 ? true : false} data={statisticWeekData} />
        <button className={`${styles['slide-btn']} btn-reset`}>
          <Icon name={'right'} />
        </button>
      </div>
    </section>
  )
}

export default Tab;
