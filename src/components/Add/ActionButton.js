import React from 'react';

import './ActionButton.scss';

export default function ActionButton({ label, onClick, className }) {
  return (
    <div className={`action-button-container ${className}`}>
        <div
          className='action-button'
          onClick={ onClick }
        > { label }
        </div>
    </div>
  );
}