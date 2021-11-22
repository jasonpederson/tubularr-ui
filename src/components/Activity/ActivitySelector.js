import React from 'react';
import classnames from 'classnames';

import './ActivitySelector.scss';

export default function QueueSelector({ activeTab, onSelectTab }) {
  return (
    <div className='queue-selector-container'>
      <div className={ classnames('queue-selector-button', {'selected': activeTab === 'downloadQueue'}) } onClick={ () =>  { onSelectTab('downloadQueue') }}>
        <div className='queue-selctor-text'>Download Queue</div>
      </div>
      <div className={ classnames('queue-selector-button', {'selected': activeTab === 'recentlyDownloaded'}) } onClick={ () => { onSelectTab('recentlyDownloaded') }}>
        <div className='queue-selctor-text'>Recently Downloaded</div></div>
    </div>
  );
}