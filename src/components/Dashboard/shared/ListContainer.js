import React from 'react';

import './ListContainer.scss'

export default function ListContainer({ header, children  }) {
  return (
    <div className='list-container'>
      <div className='list-container-header-container'>
        { header }
      </div>
      <div>
        { children }
      </div>
    </div>
  );
}