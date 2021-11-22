import React from 'react';
import convertLegnthToMinutesSeconds from '../../utils/convertLegnthToMinutesSeconds';

import './DownloadQueueItem.scss';

export default function DownloadQueueItem({ queueItem  }) {
  const convertedVideoLength = convertLegnthToMinutesSeconds(queueItem.length);

  return (
    <div className='download-queue-item-container'>
      <div className='download-queue-item-row'>
        <div className='download-queue-item-title'>{ queueItem.title }</div>
        <div className='download-queue-item-channel'>{ queueItem.channel }</div>
        <div className='download-queue-item-details-container'>
          <div className='download-queue-item-details-item'>{ queueItem.resolution }</div>
          <div className='download-queue-item-details-item'>{ queueItem.audio }</div>
          <div className='download-queue-item-details-item'>{ queueItem.fileType }</div>
        </div>
        <div className='queue-item-time'>
          <div className='queue-item-time-value'>{ convertedVideoLength.minutes } min</div>
          { convertedVideoLength.seconds > 0 &&
            <div className='queue-item-time-value'>{ convertedVideoLength.seconds } sec</div>
          }
        </div>
      </div>
    </div>
  );
}