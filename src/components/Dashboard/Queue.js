import React from 'react';
import ListContainer from './shared/ListContainer';
import QueueItem from './QueueItem';

import './Queue.scss';

export default function UpcomingQueue({ queueList }) {
  return (
    <ListContainer header={'Queue'}>
      { queueList.slice(0, 3).map((item) => {
        return (
          <QueueItem
            key={ item.id }
            videoTite={ item.title }
            videoLength={ item.length }
            channelTitle={ item.channel }
            resolution={ item.resolution }
            audioCodec={ item.audio }
            fileType={ item.fileType }
          />
        )
      })
      }
    </ListContainer>
  );
}