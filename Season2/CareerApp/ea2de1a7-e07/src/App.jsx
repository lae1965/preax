import React, { useState } from 'react';
import Main from '@pages/main/Main';
import Layout from '@components/layout/Layout';
import Card from '@pages/card/Card';
import { useRoute } from '@hooks/useRoute';
import { APP_PAGE } from './constans/constans.js';

const App = () => {
  const { path } = useRoute();
  return (
    <Layout>
      {path === APP_PAGE.main && <Main />}
      {path === APP_PAGE.vacancy && <Card />}
    </Layout>
  );
};

export default App;
