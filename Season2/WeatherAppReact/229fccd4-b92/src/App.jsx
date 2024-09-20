import { useEffect } from 'react';
import styles from './App.module.css';
import { Header, Layout, Card, Main, Footer, Slider } from './components';
import { useWeather } from './hooks/useWeatherContext';
import { searchStatus } from './utils/constants';

function App() {
  const { statusOfSearch } = useWeather();

  useEffect(() => {
    document.body.style.overflow =
      statusOfSearch > searchStatus.isClosedDrop ? 'hidden' : 'unset';
  }, [statusOfSearch]);

  return (
    <Layout>
      <Card>
        <Header />
        <div
          className={styles.content}
          data-isdrop={
            statusOfSearch > searchStatus.isClosedDrop ? 'true' : 'false'
          }
        >
          <Main />
          <Slider />
          <Footer />
        </div>
      </Card>
    </Layout>
  );
}

export default App;
