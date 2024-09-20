import styles from './TabBar.module.css';
import { dayCardsData, weekCardsData } from '../../content/sliderData';

function TabBar({ activeCards, handleSwitch }) {
  return (
    <div className={styles.sliderSwitcher}>
      <h2>Прогноз:</h2>
      <div className={styles.switcher}>
        <button
          className={`${styles.switcherButton} ${
            activeCards === dayCardsData ? styles.active : ''
          }`}
          onClick={() => handleSwitch(dayCardsData)}
        >
          на 24 часа
        </button>
        <button
          className={`${styles.switcherButton} ${
            activeCards === weekCardsData ? styles.active : ''
          }`}
          onClick={() => handleSwitch(weekCardsData)}
        >
          на 5 дней
        </button>
      </div>
    </div>
  );
}

export default TabBar;
