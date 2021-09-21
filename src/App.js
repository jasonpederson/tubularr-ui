import React from 'react';
import Page from './components/Page/Page';
import Header from './components/Header/Header';
import PageContentWrapper from './components/Page/PageContentWrapper';

function App() {
  return (
    <Page>
      <Header />
      <PageContentWrapper />
    </Page>
  );
}

export default App;
