import { useEffect, useState } from 'react';
import styles from './MoreVacancies.module.css';

import VacancyBlock from '@components/vacancyList/vacancyBlock/VacancyBlock';
import Button from '@components/button/Button';
import { useVacancyStore } from '@store/vacancyStore';
import SkeletonVacancyList from '@components/vacancyList/SkeletonVacancyList';

const MoreVacancies = ({ vacancyId }) => {
  const [similarVacancies, setSimilarVacancies] = useState([]);
  const [similarPage, setSimilarPage] = useState(1);
  const [isVacanciesRendered, setIsVacanciesRendered] = useState(false);
  const [fetchSimilarVacancy, loading] = useVacancyStore((state) => [
    state.fetchSimilarVacancy,
    state.loading,
  ]);

  useEffect(() => {
    (async () => {
      const moreVacancies = await fetchSimilarVacancy(vacancyId, similarPage);
      if (similarPage === 1) setSimilarVacancies(moreVacancies);
      else setSimilarVacancies([...similarVacancies, ...moreVacancies]);
    })();
  }, [similarPage]);

  const handleMoreSimilarVacancies = () => {
    setSimilarPage(similarPage + 1);
    setIsVacanciesRendered(false);
  };

  return (
    <section className={styles.similar}>
      <h2 className={styles.similarHeading}>Похожие вакансии</h2>
      <VacancyBlock
        cards={similarVacancies}
        showEye={false}
        setIsVacanciesRendered={setIsVacanciesRendered}
      />
      {loading && <SkeletonVacancyList isLoadTitle={false} skeletonCount={6} />}
      {isVacanciesRendered && (
        <div className={styles.moreSimilarButtonWrapper}>
          <Button
            className={styles.moreSimilarButton}
            onClick={handleMoreSimilarVacancies}
          >
            Показать ещё
          </Button>
        </div>
      )}
    </section>
  );
};

export default MoreVacancies;
