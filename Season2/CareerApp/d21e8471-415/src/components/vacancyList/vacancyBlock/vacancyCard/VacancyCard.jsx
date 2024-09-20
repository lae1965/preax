import React from 'react';
import Icon from '@components/icon/Icon';
import styles from './VacancyCard.module.css';
import { useVacancyStore } from '@store/vacancyStore';
import { currPage, usePageStore } from '@store/pageStore';

const VacancyCard = ({ card, showEye, hideVacancy }) => {
  const [fetchVacancy, setToBlackList] = useVacancyStore((state) => [
    state.fetchVacancy,
    state.setToBlackList,
  ]);
  const setCurrentPage = usePageStore((state) => state.setCurrentPage);

  const handleChoice = async () => {
    await fetchVacancy(card.id);
    setCurrentPage(currPage.vacancy);
  };

  const handleHide = (e) => {
    e.stopPropagation();
    setToBlackList(card.id);
    hideVacancy(card.id);
  };

  return (
    <li className={styles.card} onClick={handleChoice}>
      <div className={styles.main}>
        <div className={styles.headerBlock}>
          <h4 className={styles.title} title={card.name}>
            {card.name}
          </h4>
          <p className={styles.salary}>{card.salary}</p>
        </div>
        {showEye && (
          <button className={styles.controlsBlock} onClick={handleHide}>
            <Icon name={'slashEye'} className={styles.eye} />
          </button>
        )}
      </div>
      <div className={styles.additional}>
        <div className={styles.upContent}>
          {card.company}
          <p>{card.city}</p>
        </div>
        <p className={styles.experience}>
          <Icon name={'star'} className={styles.star} />
          {card.experience}
        </p>
      </div>
    </li>
  );
};

export default VacancyCard;
