import React from 'react';

import './RecentlyDownloadedItem.scss'

export default function RecentlyDownloadedItem({ videoTite, channelTitle, completedTimestamp }) {
  return (
    <div className='recently-downloaded-item-container'>
      <div className='recently-downloaded-item-row'>
        <div className='recently-downloaded-item-title'>{ videoTite }</div>
        <div className='recently-downloaded-item-time'>
          { completedTimestamp }
        </div>
      </div>
      <div className='recently-downloaded-item-row'>
        <div className='recently-downloaded-item-channel'>{ channelTitle }</div>
      </div>
    </div>
  );
}