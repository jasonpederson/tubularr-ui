import React, { useState } from 'react';
import ChannelThumbnail from './ChannelThumbnail';
import PlaylistThumbnail from './PlaylistThumbnail';

import './MonitoredItemCard.scss';

export default function MonitoredItemCard({ item, hoveredItemUuid, onClick, onMouseEnterHanlder, onMouseExitHandler, isPlaylist }) {
  const [ isHovered, setIsHovered ] = useState(false);

  return (
    <div 
      className='monitored-item-container' 
      onMouseEnter={ () =>{ setIsHovered(true) } }
      onMouseLeave={ () => { setIsHovered(false) }}
      onClick={() => { onClick( item.uuid )}}
    >
      <div className='monitored-item-thumbnail-container'>
        { isPlaylist ?
            <PlaylistThumbnail thumbnail={ false } isHovered={ isHovered } />
          : 
            <ChannelThumbnail thumbnail={ false } isHovered={ isHovered } />
        }
      </div>
      <div className='monitored-item-details-container'>
        <div className='monitored-item-detail-row name'>
          {item.name}
        </div>
        <div className='monitored-item-detail-row sourceKey'>
          {item.sourceKey}
        </div>
        <div className='last-indexed-container'>
          <div className='last-indexed-text'>
            Last Indexed: { item.lastIndexedOn === '' ? 'Never' : item.lastIndexedOn }
          </div>
        </div>
      </div>
    </div>
  );
}