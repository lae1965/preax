import styles from './Main.module.css';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { CityCard } from '../CityCard/CityCard';
import { CardList } from '../CardList/CardList';

export const Main = () => {
  return (
    <main className={styles.content}>
      <Header />
      <section className={styles.weather}>
        <CityCard />
        <CardList />
      </section>
      <Footer />
    </main>
  );
};
