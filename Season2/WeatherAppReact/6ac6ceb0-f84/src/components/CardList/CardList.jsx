import { mockDayData } from '../../constants/mockData';
import styles from './CardList.module.css';
import { Card } from '../Card/Card';

export const CardList = () => {
  return (
    <div className={styles.moreInfo}>
      {mockDayData.map((item, index) => (
        <Card key={index} card={item} />
      ))}
    </div>
  );
};
