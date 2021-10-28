import React from 'react';
import convertLegnthToMinutesSeconds from '../../utils/convertLegnthToMinutesSeconds';

import './QueueItem.scss'

export default function QueueItem({ videoTite, videoLength, channelTitle, resolution, audioCodec, fileType }) {
  const convertedVideoLength = convertLegnthToMinutesSeconds(videoLength);

  return (
    <div className='queue-item-container'>
      <div className='queue-item-row'>
        <div className='queue-item-title'>{ videoTite }</div>
        <div className='queue-item-time'>
          <div className='queue-item-time-value'>{ convertedVideoLength.minutes } min</div>
          { convertedVideoLength.seconds > 0 &&
            <div className='queue-item-time-value'>{ convertedVideoLength.seconds } sec</div>
          }
        </div>
      </div>
      <div className='queue-item-row'>
        <div className='queue-item-channel'>{ channelTitle }</div>
        <div className='queue-item-details-container'>
          <div className='queue-item-details-item'>{ resolution }</div>
          <div className='queue-item-details-item'>{ audioCodec }</div>
          <div className='queue-item-details-item'>{ fileType }</div>
        </div>
      </div>
    </div>
  );
}