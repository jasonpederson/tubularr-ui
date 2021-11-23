import React from 'react';
import classnames from 'classnames';
import isActivePath from '../../utils/isActivePath';

import './ActivityViewTypeSelector.scss';

export default function ActivityViewTypeSelector ({ activityViewPath, setActivityViewTypePath }) {
  console.log('activityViewPath', activityViewPath);
  return (
    <div className='queue-selector-container'>
      <div className={ classnames('queue-selector-button', {'selected': isActivePath(activityViewPath, 'queue')} ) } onClick={ () =>  { setActivityViewTypePath('/activity/queue') }}>
        <div className='queue-selctor-text'>Download Queue</div>
      </div>
      <div className={ classnames('queue-selector-button', {'selected': isActivePath(activityViewPath, 'recent')}) } onClick={ () => { setActivityViewTypePath('/activity/recent') }}>
        <div className='queue-selctor-text'>Recently Downloaded</div></div>
    </div>
  );
}