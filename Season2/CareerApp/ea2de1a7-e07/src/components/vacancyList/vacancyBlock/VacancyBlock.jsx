import React, { useEffect, useRef, useState } from 'react';
import VacancyCard from './vacancyCard/VacancyCard';
import { formatTitleDate } from '@utils/format-date';
import styles from './VacancyBlock.module.css';

const VacancyBlock = ({
  title,
  cards,
  showEye = true,
  setIsVacanciesRendered = () => { },
  setSimilarVacancies = () => { },
  setSimilarPage = () => { }
}) => {
  const [cardList, setCardList] = useState(cards);
  const listRef = useRef(null);

  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList') setIsVacanciesRendered(true);
      });
    });

    if (listRef.current) {
      observer.observe(listRef.current, { childList: true });
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    setCardList(cards);
  }, [cards]);

  const hideVacancy = (vacancyId) => {
    setCardList(cardList.filter((card) => card.id !== vacancyId));
  };

  return (
    <li className={styles.wrapper}>
      {!!title && <h3 className={styles.title}>{formatTitleDate(title)}</h3>}
      <ul className={styles.cardsBlock} ref={listRef}>
        {cardList?.map((card) => (
          <VacancyCard
            card={card}
            key={card.id}
            showEye={showEye}
            hideVacancy={hideVacancy}
            setSimilarVacancies={setSimilarVacancies}
            setSimilarPage={setSimilarPage}
          />
        ))}
      </ul>
    </li>
  );
};

export default VacancyBlock;
