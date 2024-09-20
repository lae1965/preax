import styles from './Slider.module.css';
import { useState } from 'react';
import { dayCardsData } from '../../content/sliderData';
import TabBar from '../TabBar/TabBar';
import Tab from '../Tab/Tab';

function Slider() {
  const [activeCards, setActiveCards] = useState(dayCardsData);

  const handleSwitch = (newActiveCards) => {
    setActiveCards(newActiveCards);
  };

  return (
    <section className={styles.slider}>
      <TabBar activeCards={activeCards} handleSwitch={handleSwitch} />
      <Tab activeCards={activeCards} />
    </section>
  );
}

export default Slider;
