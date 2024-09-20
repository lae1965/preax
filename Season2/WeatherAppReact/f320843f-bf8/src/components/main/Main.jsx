import CardList from '../card-list';
import CityCard from '../city-card';
import Tab from '../tab';
import styles from './styles.module.css';


const Main = () => {
  return (
    <main >
      <div className={styles.main}>
        <CityCard />
        <CardList />
      </div>
      <Tab />
    </main>
  );
};

export default Main;