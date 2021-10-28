import React from 'react';
import MonitoredItemCard from '../Shared/MonitoredItemCard';

import './RecentlyMonitored.scss'

export default function RecentlyMonitored({ sources, hoveredItemUuid, onMouseExitHandler, onMouseEnterHanlder, onClick }) {
  return (
    <div className='recently-monitored-container'>
      <div className='recently-monitored-header'>Recently Monitored</div>
      <div className='recently-monitored-items-container'>
        { sources.map((item) => {
          return (<MonitoredItemCard 
            key={ item.uuid }
            item={item}
            onClick={ onClick }
            onMouseEnterHanlder={ onMouseEnterHanlder } 
            onMouseExitHandler={ onMouseExitHandler }
            hoveredItemUuid={ hoveredItemUuid }
          />
        )})
        }
      </div>
    </div>
  );
}