import { Icon } from '../Icon/Icon';
import { ProgressBar } from '../UI';
import styles from './cityList.module.css';
import { detailMockData } from './mockData';

export const CityList = () => {
  return (
    <section className={styles.detail}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <h3 className={styles.title}>Влажность</h3>
          <Icon
            icon='humidity'
            alt='Влажность иконка'
            className={styles.icon}
          />
          <span className={styles.data}>{detailMockData.humidity.value}</span>
          <div className={styles.barWrapper}>
            <ProgressBar
              type={detailMockData.humidity.type}
              current={detailMockData.humidity.current}
            />
            <div
              className={`${styles.description} ${styles.descriptionBarVal}`}
            >
              <span>0%</span>
              <span>100%</span>
            </div>
          </div>
        </li>
        <li className={styles.item}>
          <h3 className={styles.title}>Давление</h3>
          <Icon icon='barometr' alt='Давление иконка' className={styles.icon} />
          <span className={styles.data}>{detailMockData.barometr.value}</span>
          <div className={styles.barWrapper}>
            <ProgressBar
              type={detailMockData.barometr.type}
              current={detailMockData.barometr.current}
            />
            <span className={styles.description}>
              {detailMockData.barometr.comment}
            </span>
          </div>
        </li>
        <li className={styles.item}>
          <h3 className={styles.title}>Видимость</h3>
          <Icon
            icon='visibility'
            alt='Видимость иконка'
            className={styles.icon}
          />
          <span className={styles.data}>{detailMockData.visibility.value}</span>
          <div className={styles.barWrapper}>
            <ProgressBar
              type={detailMockData.visibility.type}
              current={detailMockData.visibility.current}
            />
            <span className={styles.description}>
              {detailMockData.visibility.comment}
            </span>
          </div>
        </li>
        <li className={styles.item}>
          <h3 className={styles.title}>Рассвет</h3>
          <Icon icon='sunrise' alt='Рассвет иконка' className={styles.icon} />
          <span className={styles.data}>{detailMockData.sunrise}</span>
          <span className={styles.description}>Прошло: 02:47</span>
        </li>
        <li className={styles.item}>
          <h3 className={styles.title}>Закат</h3>
          <Icon icon='sunset' alt='Закат иконка' className={styles.icon} />
          <span className={styles.data}>{detailMockData.sunset}</span>
          <span className={styles.description}>Осталось: 05:08</span>
        </li>
        <li className={styles.item}>
          <h3 className={styles.title}>Сила ветра</h3>
          <Icon icon='direction' alt='Сила ветра' className={styles.icon} />
          <span className={styles.data}>{detailMockData.direction}</span>
          <span className={styles.description}>Северо-западный</span>
        </li>
      </ul>
    </section>
  );
};
