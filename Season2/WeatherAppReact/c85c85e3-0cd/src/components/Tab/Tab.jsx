import styles from './Tab.module.css';
import Icon from '../icon/Icon';

function Tab({ activeCards }) {
  return (
    <div className={styles.sliderContent}>
      <button>
        <Icon path='/images/icons/chevron.svg' />
      </button>

      <ul className={styles.cards}>
        {activeCards.map((cardData, i) => (
          <li key={i} className={styles.dayCard}>
            <div className={styles.cardContent}>
              <span className={styles.time}>{cardData.time}</span>
              <Icon path={cardData.imgSrc} size={32} />
              <span className={styles.temp}>{cardData.temp}</span>
            </div>
          </li>
        ))}
      </ul>

      <button>
        <Icon path='/images/icons/chevron.svg' />
      </button>
    </div>
  );
}

export default Tab;
