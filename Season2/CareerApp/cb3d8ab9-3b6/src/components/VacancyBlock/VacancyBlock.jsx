import { useVacancyStore } from '../../store';
import { List, ListItem } from '../UI';
import { VacancyCard } from '../VacancyCard/VacancyCard';

import styles from './vacancyBlock.module.css';

export const VacancyBlock = ({ title, vacancy }) => {
  const isLoading = useVacancyStore((state) => state.isLoading);

  return (
    <ListItem className={styles.wrapper}>
      <h2 className={styles.title} data-sceleton={isLoading.toString()}>
        {title}
      </h2>
      <List className={styles.list}>
        {vacancy.map((info, index) => {
          return (
            <VacancyCard vacancy={info} key={index} isLoading={isLoading} />
          );
        })}
      </List>
    </ListItem>
  );
};
