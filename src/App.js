import React from 'react';
import { hot } from "react-hot-loader";
import Page from './components/Page/Page';
import Header from './components/Header/Header';
import PageContentWrapper from './components/Page/PageContentWrapper';

function App () {
  return (
    <Page>
      <Header />
      <PageContentWrapper />
    </Page>
  );
}

export default hot(module)(App);