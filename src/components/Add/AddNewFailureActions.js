import React from 'react';
import ActionButton from './ActionButton';

export default function AddNewFailureActions({ onRetry }) {
  return (
    <ActionButton label='Retry' onClick={ onRetry } colorOverride={true}/>
  );
}