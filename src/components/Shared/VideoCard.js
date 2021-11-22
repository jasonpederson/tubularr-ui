import React from 'react';
import convertLegnthToMinutesSeconds from '../../utils/convertLegnthToMinutesSeconds';
import classnames from 'classnames';

import './VideoCard.scss';

/*
TODO
- Add Video Length
- Add Video Thumbnail
*/

export default function VideoCard({ item, hoveredItemUuid, onClick, onMouseEnterHanlder, onMouseExitHandler }) {
  return (
    <div 
      className='video-card-container' 
      onMouseEnter={ () =>{ onMouseEnterHanlder(item.uuid) } }
      onMouseLeave={ () => { onMouseExitHandler(item.uuid) }}
      onClick={() => { onClick( item.uuid )}}
    >
      <div className='video-card-thumbnail-container'>
      </div>
      <div className='video-card-detail-container'>
        <div className='video-card-title-row'>
          <div className='name-text'>{item.name}</div>
        </div>
        <div className='video-card-title-row channel-text'>
          {item.channelName}
        </div>
        <div className='video-card-specs-container'>
          <div className='queue-item-specs-item'>{ item.resolution }</div>
          <div className='queue-item-specs-item'>{ item.audioCodec }</div>
          <div className='queue-item-specs-item'>{ item.fileType }</div>
        </div>
      </div>
    </div>
  );
}