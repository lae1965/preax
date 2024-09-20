import { useEffect, useState } from 'react';
import { TabBar } from '../TabBar/TabBar';
import { Icon } from '../Icon/Icon';
import styles from './styles.module.css';
import { statisticDayData, statisticWeekData } from './mock';

const tabList = [
  {
    text: 'на 24 часа',
    aria: 'Недельный прогноз',
  },
  {
    text: 'на 5 дней',
    aria: 'Почасовой прогноз',
  },
];

const sliders = [statisticDayData, statisticWeekData];

export const Slider = () => {
  const [toggleTab, setToggleTab] = useState(0);
  const handleToggleTab = (index) => {
    setToggleTab(index);
  };
  const [slider, setSlider] = useState(sliders[toggleTab]);

  useEffect(() => {
    setSlider(sliders[toggleTab]);
  }, [toggleTab]);

  return (
    <section className={styles.block}>
      <div className={styles.header}>
        <h2 className={styles.title}>Прогноз:</h2>
        <TabBar
          list={tabList}
          handleToggleTab={handleToggleTab}
          activeTab={toggleTab}
        />
      </div>

      <div className={styles.slider}>
        <button className={styles.btn} disabled>
          <Icon icon='chevron-left' />
        </button>
        <ul className={styles.list}>
          {slider.map((item, index) => {
            return (
              <li key={`${item.time}-${index}`} className={styles.item}>
                <span className={styles.text}>{item.time}</span>
                <Icon
                  icon={item.icon}
                  className={styles.icon}
                  alt='Иконка погоды'
                />
                {item.temp ? (
                  <span className={styles.text}>{item.temp}</span>
                ) : (
                  <span className={styles.text}>
                    от{item.minTemp} до{item.maxTemp}
                  </span>
                )}
              </li>
            );
          })}
        </ul>
        <button className={styles.btn}>
          <Icon icon='chevron-right' />
        </button>
      </div>
    </section>
  );
};
