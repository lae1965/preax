import { useEffect, useState } from 'react';

import styles from './app.module.css';
import { Header, Layout, Card, Main, Footer, Slider } from './components';
import { useActiveCity, useCitiesPool, useWeatherApi } from './hooks';

function App() {
  const [isDropdownOpen, setIsdDropdownOpen] = useState(false);
  const { setActiveCity } = useActiveCity();
  const { cities } = useCitiesPool();

  useWeatherApi();

  useEffect(() => {
    setActiveCity(
      cities && cities.length
        ? cities[0]
        : {
            apiCity: 'Москва',
            id: '2024-04-24T20:49:45.977Z',
            lat: '55.7505412',
            lon: '37.6174782',
            valueCity: 'Москва',
          }
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout className={isDropdownOpen ? styles.hidden : ''}>
      <Card>
        <Header
          isDropdownOpen={isDropdownOpen}
          setIsdDropdownOpen={setIsdDropdownOpen}
        />
        <div className={isDropdownOpen ? styles.content : ''}>
          <Main />
          <Slider />
          <Footer />
        </div>
      </Card>
    </Layout>
  );
}

export default App;
