import React from 'react';

import TubularrLogo from '../../content/images/TubularrLogo_v3.png';
import './Header.scss';

export default function PageHeader() {
  return (
    <div className='header-container'>
      <img height='70px' width="300px" src={ TubularrLogo } alt="Tubuluar Logo" />
    </div>
  );
}