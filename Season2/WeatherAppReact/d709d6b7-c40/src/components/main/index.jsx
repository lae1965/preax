import CardList from "../cardList";
import CityCard from "../cityCard";
import styles from "./main.module.css";
import Slider from "../slider";

const Main = ({ data }) => {
  return (
    <main className={styles.main}>
      <CityCard data={data.current} />
      <CardList data={data.details} />
      <Slider data={data.forecast} />
    </main>
  );
};

export default Main;
