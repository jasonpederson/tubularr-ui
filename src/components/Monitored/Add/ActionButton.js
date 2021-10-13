import React from 'react';
import classnames from 'classnames';
import './ActionButton.scss';

export default function ActionButton({ label, onClick, className, colorOverride = false, secondaryAction = false }) {
  return (
    <div className={`action-button-container ${className}`}>
        <div
          className={classnames(
            'action-button',
            { 'light': !secondaryAction && !colorOverride },
            { 'dark': !secondaryAction && colorOverride },
            { 'secondary-action-button-light': secondaryAction && !colorOverride },
            { 'secondary-action-button-dark': secondaryAction && colorOverride },
          )}
          onClick={ onClick }
        > { label }
        </div>
    </div>
  );
}