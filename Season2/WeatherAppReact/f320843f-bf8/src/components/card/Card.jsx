import { ProgressBar } from '../progress-bar/ProgressBar';
import styles from './styles.module.css';

const Card = ({ item, className = '' }) => {
  return (
    <li className={`${styles['card']} ${className}`}>
      <div className={
        `${styles['card__header']} 
        ${styles['card__header--' + item.code]}`
      }>{item.name}</div>
      <div className={styles['card__value']}>{item.value}</div>
      {
        item.progress
          ? <ProgressBar type={item.progress.type} value={item.progress.value} view={item.progress.view} descr={item.description} />
          : <div className={styles['card__desc']}>{item.description}</div>
      }
    </li>
  );
};

export default Card;