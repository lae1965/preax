import { VacancyCard } from './VacancyCard/VacancyCard';
import { useVacancyStore } from '@store/vacancyStore';

import styles from './VacancyBlock.module.css';

export const VacancyBlock = ({ date, info }) => {
  const [isShowHidden, blackList] = useVacancyStore((state) => [
    state.filters.show_hidden,
    state.blackList,
  ]);
  const filterVacancy = isShowHidden
    ? info
    : info.filter((vacancy) => !blackList.includes(vacancy.id));

  if (!filterVacancy.length && !!info.length)
    return (
      <p className={styles.allHidden}>
        Вы скрыли все вакансии на этой странице.
        <br />
        Для их отображения войдите в "Дополнительные фильтры" -{'>'} "Другие
        параметры"
        <br /> и выберите "Включая скрытые вакансии".
      </p>
    );

  return (
    filterVacancy.length > 0 && (
      <div className={styles.wrapper}>
        {date ? (
          <h2 className={styles.heading}>{date}</h2>
        ) : (
          <div className={styles.loader}></div>
        )}
        <ul className={styles.list}>
          {filterVacancy.map((vacancy, index) => (
            <VacancyCard
              key={index}
              vacancy={vacancy}
              isShowHidden={isShowHidden}
            />
          ))}
        </ul>
      </div>
    )
  );
};
