import CardList from '../cardList/CardList';
import CityCard from '../cityCard/CityCard';
import styles from './Main.module.css';
import weatherData from '../../content/data';

function Main() {
  const data = weatherData;

  return (
    <main className={styles.wrapper}>
      <CityCard />
      <CardList data={data} />
    </main>
  );
}

export default Main;
