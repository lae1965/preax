import { useEffect, useState } from 'react';
import styles from './Vacancy.module.css';

import RightSide from './rightSide/RightSide';
import LeftSide from './leftSide/LeftSide';
import { useVacancyStore } from '@store/vacancyStore';
import MoreVacancies from './moreVacancies/MoreVacancies';

const Vacancy = () => {
  const vacancy = useVacancyStore((state) => state.vacancy);

  return (
    <>
      <main className={styles.content}>
        <LeftSide vacancy={vacancy} />
        <RightSide vacancy={vacancy} />
      </main>
      <MoreVacancies vacancyId={vacancy.id} />
    </>
  );
};

export default Vacancy;
