import { useEffect } from 'react';

import { useVacancyStore } from './store';
import {
  Header,
  Footer,
  Layout,
  Main,
  FilterList,
  VacancyList,
} from './components';
import { Container } from './components/UI';
import { mockData } from './constants';

import styles from './app.module.css';
import { generateSceleton } from './util/generateSceleton';

const App = () => {
  const vacancy = useVacancyStore((state) => state.vacancy);
  const fetchVacancy = useVacancyStore((state) => state.fetchVacancyDefault);
  const isLoading = useVacancyStore((state) => state.isLoading);
  const sceletonVacancy = generateSceleton();

  useEffect(() => {
    fetchVacancy();
  }, []);

  useEffect(() => {
    if (isLoading) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'auto';
  }, [isLoading]);

  return (
    <Layout>
      <Header />
      <Main className={styles.main}>
        <Container>
          <FilterList />
          <VacancyList data={isLoading ? sceletonVacancy : vacancy} />
        </Container>
      </Main>
      <Footer />
    </Layout>
  );
};

export default App;
