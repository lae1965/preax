import clsx from '@utils/clsx';
import styles from './VacancyCard.module.css';
import Experience from '@components/UI/icons/Experience';
import EyeSlashSolid from '@components/UI/icons/EyeSlashSolid';
import formatCurrency from '@utils/formatCurrency';

const VacancyCard = ({ name, salary, company, city, experience }) => {
  const formattedCurrency = formatCurrency(salary?.currency);
  const formattedFrom = salary?.from?.toLocaleString();
  const formattedTo = salary?.to?.toLocaleString();
  const formattedSalary =
    formattedFrom && !formattedTo
      ? `от ${formattedFrom} ${formattedCurrency}`
      : !formattedFrom && formattedTo
      ? `до ${formattedTo} ${formattedCurrency}`
      : formattedFrom && formattedTo
      ? `${formattedFrom} - ${formattedTo} ${formattedCurrency}`
      : 'Доход не указан';

  return (
    <li className={styles.item}>
      <article className={styles.card}>
        <div className={styles.container}>
          <button className={clsx('btn', styles.hideBtn)}>
            <EyeSlashSolid />
          </button>
          <h3 className={clsx('title', styles.name)}>{name}</h3>
          <p className={clsx('descr', styles.salary)}>{formattedSalary}</p>
          <span className={styles.company}>{company}</span>
          <span className={styles.city}>{city}</span>
          <span className={styles.experience}>
            <Experience width='12' height='12' />
            {experience}
          </span>
        </div>
      </article>
    </li>
  );
};

export default VacancyCard;
