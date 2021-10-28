import React from 'react';
import classnames from 'classnames';
import { YoutubeFilled } from '@ant-design/icons';

import './MonitoredItemCard.scss';

export default function MonitoredItemCard({ item, hoveredItemUuid, onClick, onMouseEnterHanlder, onMouseExitHandler }) {
  return (
    <div 
      className='monitored-item-container' 
      onMouseEnter={ () =>{ onMouseEnterHanlder(item.uuid) } }
      onMouseLeave={ () => { onMouseExitHandler(item.uuid) }}
      onClick={() => { onClick( item.uuid )}}
    >
      <div className={classnames('monitored-item-thumbnail-container', {'thumbnail-hover': hoveredItemUuid === item.uuid })}>
        <YoutubeFilled className='no-thumbnail-icon' />
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