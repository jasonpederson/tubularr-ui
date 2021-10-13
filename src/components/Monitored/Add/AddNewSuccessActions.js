import React from 'react';
import ActionButton from './ActionButton';

import './AddNewSuccessActions.scss';

export default function AddNewFailureActions({ onDone, onAddAnother }) {
  return (
    <div className='add-new-success-actions-container'>
      <ActionButton label='Add Another' onClick={ onAddAnother } colorOverride={true} secondaryAction={ true } />
      <ActionButton label='Done' onClick={ onDone } colorOverride={true} />
    </div>
  );
}