import React from 'react';

import './QuickStats.scss'

export default function QuickStats({ totalMonitoredChannels, totalMonitoredPlaylists, downloadedItems, queuedItems }) {
  return (
    <div className='quick-stats-container'>
      <div className='quick-stats-item-container'>
        <div className='quick-stats-header'>Monitored Channels</div>
        <div className='quick-stats-value'>{ totalMonitoredChannels }</div>
      </div>
      <div className='quick-stats-item-container'>
        <div className='quick-stats-header'>Monitored Playlists</div>
        <div className='quick-stats-value'>{ totalMonitoredPlaylists }</div>
      </div>
      <div className='quick-stats-item-container'>
        <div className='quick-stats-header'>Downloaded Items</div>
        <div className='quick-stats-value'>{ downloadedItems }</div>
      </div>
      <div className='quick-stats-item-container'>
        <div className='quick-stats-header'>Queued Items</div>
        <div className='quick-stats-value'>{ queuedItems }</div>
      </div>
    </div>
  );
}