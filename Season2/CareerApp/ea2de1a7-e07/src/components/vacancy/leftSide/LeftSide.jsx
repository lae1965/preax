import { useEffect, useRef, useState } from 'react';
import styles from './LeftSide.module.css';

import Icon from '@components/icon/Icon';
import Button from '@components/button/Button';
import { clsx } from '@utils/clsx';
import { parseSalary } from '@utils/parse-salary';
import { useVacancyStore } from '@store/vacancyStore';

const LeftSide = ({ vacancy }) => {
  const [isHideVacancy, setIsHideVacancy] = useState(false);
  // const setToBlackList = useVacancyStore((state) => state.setToBlackList);
  const isHideVacancyRef = useRef(false);

  const { toggleToBlackList, blackList } = useVacancyStore()

  // useEffect(() => {
  //   return () => {
  //     if (isHideVacancyRef.current) setToBlackList(vacancy.id);
  //   };
  // }, []);

  const handleToggleShow = () => {
    // isHideVacancyRef.current = !isHideVacancy;
    // setIsHideVacancy(!isHideVacancy);
    toggleToBlackList(vacancy.id);
  };

  return (
    <section className={clsx(styles.block, styles.leftSide)}>
      <h1 className={styles.name}>{vacancy.name}</h1>
      <p className={styles.salary}>{parseSalary(vacancy.salary)}</p>
      <h3 className={styles.heading}>Требования к вакансии</h3>
      <div className={styles.requirements}>
        <div className={styles.requirementsItem}>
          <Icon name='star' />
          <span>
            Опыт работы{' '}
            <span className={styles.experience}>{vacancy.experience}</span>
          </span>
        </div>
        <div className={styles.requirementsItem}>
          <Icon name='briefCase' />
          {vacancy.employment}
        </div>
        <div className={styles.requirementsItem}>
          <Icon name='clock' />
          {vacancy.schedule}
        </div>
      </div>
      <Button
        className={clsx(styles.button, styles.buttonFrame)}
        onClick={handleToggleShow}
      >
        {blackList.includes(vacancy.id) ? (
          <>
            <Icon name='eye' className={styles.eyeIcon} />
            Показать
          </>
        ) : (
          <>
            <Icon name='slashEye' className={styles.eyeIcon} />
            Скрыть
          </>
        )}
      </Button>
      <h2 className={clsx(styles.salary, styles.descriptionHeading)}>
        Описание
      </h2>
      <div
        className={styles.description}
        dangerouslySetInnerHTML={{ __html: vacancy.description }}
      />
      {vacancy?.skills?.length > 0 && (
        <>
          <h2 className={clsx(styles.salary, styles.descriptionHeading)}>
            Ключевые навыки
          </h2>
          <div className={styles.skills}>
            {vacancy.skills.map((skill, index) => (
              <span key={index} className={styles.skill}>
                {skill.name}
              </span>
            ))}
          </div>
        </>
      )}
      <p className={styles.published}>{vacancy.published}</p>
    </section>
  );
};

export default LeftSide;
