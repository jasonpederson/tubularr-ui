import * as React from 'react';
import indicatoCardIcons from './contants/indicatorCardIcons';
import Icon from '../shared/Icon';

import './IndicatorCard.scss';

export default function IndicatorCard ({ isError, message, actions }) {
  return (
    <div className='indicator-card-container'>
      <div className='indicator-card-icon-container'>
        <Icon iconList={ indicatoCardIcons } name={ isError ? 'failure' : 'success' } />
      </div>
      <div className='indicator-card-message-container'>
        { message }
      </div>
      { actions && 
        <div className='indicator-card-action-container'>
          { actions }
        </div>
      }
    </div>
  )
};