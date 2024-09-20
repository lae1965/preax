import Icon from '../Icon/Icon';
import { ListItem } from '../UI';

import styles from './vacancyCard.module.css';

export const VacancyCard = ({ vacancy, isLoading }) => {
  const { title, income, exp, city, company } = vacancy;
  return (
    <ListItem className={styles.wrapper}>
      <div className={styles.top}>
        <h2 className={styles.title} data-sceleton={isLoading.toString()}>
          {title}
        </h2>
        {!isLoading && <Icon className={styles.hideIcon} name={'hide'} />}
      </div>
      <span className={styles.price} data-sceleton={isLoading.toString()}>
        {income
          ? `${(income.minValue && `от ${income.minValue}`) || ''} ${
              (income.maxValue && income.minValue && '-') || ''
            } ${(income.maxValue && `до ${income.maxValue}`) || ''} ${
              income.currency
            }`
          : 'Доход не указан'}
      </span>
      <span
        className={`${styles.text} ${styles.company}`}
        data-sceleton={isLoading.toString()}
      >
        {company}
      </span>
      <span
        className={`${styles.text} ${styles.city}`}
        data-sceleton={isLoading.toString()}
      >
        {city}
      </span>
      <div className={styles.exp}>
        {(isLoading && <span className={styles.circle}></span>) || (
          <Icon className={styles.icon} name={'star'} />
        )}
        <span className={styles.text} data-sceleton={isLoading.toString()}>
          {exp}
        </span>
      </div>
    </ListItem>
  );
};
