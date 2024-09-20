import React from 'react';
import Icon from '@components/icon/Icon';
import styles from './VacancyCard.module.css';
import { useVacancyStore } from '@store/vacancyStore';
import { useRoute } from '@hooks/useRoute';
import { APP_PAGE } from '../../../../constans/constans';
import { useQuerySearchParams } from '@store/querySearchParams';

const VacancyCard = ({
  card,
  showEye,
  setSimilarVacancies = () => {},
  setSimilarPage = () => {},
}) => {
  const [fetchVacancy, toggleToBlackList, blackList] = useVacancyStore(
    (state) => [state.fetchVacancy, state.toggleToBlackList, state.blackList]
  );

  const [withBlackList] = useQuerySearchParams((state) => [state.blackList]);

  const { navigate, addQueryParam } = useRoute();

  const handleChoice = async () => {
    navigate(APP_PAGE.vacancy);
    addQueryParam('id', card.id);
    setSimilarVacancies([]);
    setSimilarPage(1);
    await fetchVacancy(card.id);
  };

  const handleHide = (e) => {
    e.stopPropagation();
    toggleToBlackList(card.id);
  };

  return (
    <>
      {(!blackList.includes(card.id) || withBlackList) && (
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
                {!blackList.includes(card.id) && (
                  <Icon name={'eyeBlackList'} className={styles.eye} />
                )}
                {blackList.includes(card.id) && (
                  <Icon name={'eyeBlackList'} className={styles.blackListEye} />
                )}
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
      )}
    </>
  );
};

export default VacancyCard;
