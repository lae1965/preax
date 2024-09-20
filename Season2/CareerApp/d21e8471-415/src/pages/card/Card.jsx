import styles from './Card.module.css';

import Button from '@components/button/Button';
import Icon from '@components/icon/Icon';
import Vacancy from '@components/vacancy/Vacancy';
import { currPage, usePageStore } from '@store/pageStore';

const Card = () => {
  const setCurrentPage = usePageStore((state) => state.setCurrentPage);

  const handleClick = () => {
    setCurrentPage(currPage.main);
  };

  return (
    <div className={styles.wrapper}>
      <Button className={styles.button} onClick={handleClick}>
        <Icon name='chevron' className={styles.icon} />К результатам поиска
      </Button>
      <Vacancy />
    </div>
  );
};

export default Card;
