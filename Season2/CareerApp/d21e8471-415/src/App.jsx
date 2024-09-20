import React, { useState } from 'react';
import Main from '@pages/main/Main';
import Layout from '@components/layout/Layout';
import { currPage, usePageStore } from '@store/pageStore';
import Card from '@pages/card/Card';

const App = () => {
  const currentPage = usePageStore((store) => store.currentPage);
  return (
    <Layout>
      {(currentPage === currPage.main && <Main />) ||
        (currentPage === currPage.vacancy && <Card />)}
    </Layout>
  );
};

export default App;
