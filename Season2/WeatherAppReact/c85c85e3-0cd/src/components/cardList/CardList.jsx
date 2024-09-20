import styles from './CardList.module.css';
import Card from '../card/Card';

function CardList({ data }) {
  return (
    <div className={styles.containerWrapper}>
      <ul className={styles.containerForecast}>
        {data.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}

export default CardList;
