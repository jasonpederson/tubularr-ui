import React from 'react';
import { YoutubeFilled } from '@ant-design/icons';

import './ChannelThumbnail.scss';

export default function MonitoredItemChannelThumnail({ thumbnail }) {
  return (
    <div className='channel-thumbnail-container'>
      { !thumbnail ?
        <YoutubeFilled className='no-thumbnail-icon' />
        :
        //Todo: Setup channel thumnail
        <></>
      }
    </div>
  );
}