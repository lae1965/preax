import { VacancyBlock } from '..';
import { List } from '../UI';

import styles from './vacancyList.module.css';

export const VacancyList = ({ data }) => {
  return (
    <List className={styles.wrapper}>
      {data.map((dataBlock, index) => {
        return (
          <VacancyBlock
            title={dataBlock.date}
            vacancy={dataBlock.vacancy}
            key={index}
          />
        );
      })}
    </List>
  );
};
