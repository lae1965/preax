import clsx from "@utils/clsx";
import VacancyCard from "./VacancyCard";
import styles from "./VacancyBlock.module.css";

const VacancyBlock = ({ data }) => {
  return (
    <ul className={clsx("list", styles.list)}>
      {data.map((vacancy) => (
        <VacancyCard
          key={vacancy.id}
          name={vacancy.name}
          salary={vacancy.salary}
          company={vacancy.company}
          city={vacancy.city}
          experience={vacancy.experience}
        />
      ))}
    </ul>
  );
}

export default VacancyBlock;