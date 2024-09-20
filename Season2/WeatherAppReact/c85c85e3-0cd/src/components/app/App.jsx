import styles from './App.module.css';
import Header from '../header/Header';
import Main from '../main/Main';
import Footer from '../footer/Footer';
import Slider from '../slider/Slider';

function App() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Header />
        <Main />
        <Slider />
        <Footer />
      </div>
    </div>
  );
}

export default App;
