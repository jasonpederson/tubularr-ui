import React from 'react';
import NavigationMenu from '../NavigationMenu/NavigationMenu';
import PageContent from './PageContent';

import './PageContentWrapper.scss';

export default function PageContentWrapper() {
  return (
    <div className='page-content-wrapper-container'>
      <NavigationMenu />
      <PageContent />
    </div>
  );
}