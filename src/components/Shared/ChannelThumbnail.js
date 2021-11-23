import React from 'react';
import classnames from 'classnames';
import { YoutubeFilled } from '@ant-design/icons';

import './ChannelThumbnail.scss';

export default function MonitoredItemChannelThumnail({ thumbnail, isHovered }) {
  return (
    <div className={ classnames('channel-thumbnail-container', { 'hovered': isHovered } )} >
      { !thumbnail ?
        <YoutubeFilled className='no-thumbnail-icon' />
        :
        //Todo: Setup channel thumnail
        <></>
      }
    </div>
  );
}