import styles from './styles.module.css'

export const Slider = ({ data, vissible }) => {
  return (
    <ul className={`${styles['slide-tab']} ${styles['statistic-list']} ${vissible ? styles['active'] : ''} list-reset`}>
      {data.map((item, index) => {
        return (
          <li className={styles['statistic-list__item']} key={index}>
            <span className={styles['statistic-list__day']}>{item.time}</span>
            <img className={styles['statistic-list__icon']} src={`icon/${item.icon}.png`} alt="Иконка погоды" />
            {item.temp && <span className={styles['statistic-list__info']}>{item.temp}</span>}
            {item.minTemp && item.maxTemp && <span className={`${styles['statistic-list__info']}`}>{`от ${item.minTemp} до ${item.maxTemp}`}</span>}
          </li>
        )
      })}
    </ul>
  )
}

