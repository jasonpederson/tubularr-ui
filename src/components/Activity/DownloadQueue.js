import React from 'react';
import DownloadQueueItem from './DownloadQueueItem';

import './DownloadQueue.scss';

export default function DownloadQueue({ downloadQueue  }) {
  console.log('Download Queue', downloadQueue);
  return (
    <div className='download-queue-container'>
      { downloadQueue.map((queueItem) => {
        return (
          <DownloadQueueItem queueItem={ queueItem }/>
        )
      })
      }
    </div>
  );
}