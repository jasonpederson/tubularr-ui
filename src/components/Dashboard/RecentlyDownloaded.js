import React from 'react';
import ListContainer from './shared/ListContainer';
import RecentlyDownloadedItem from './RecentlyDownloadedItem';

import './RecentlyDownloaded.scss';

export default function RecentlyDownloaded({ downloadList }) {
  return (
    <ListContainer header={'Recently Downloaded'}>
      { downloadList.slice(0, 3).map((item) => {
        return (
          <RecentlyDownloadedItem
            key={ item.id }
            videoTite={ item.title }
            channelTitle={ item.channel }
            completedTimestamp={ item.timestamp }
          />
        )
      })
      }
    </ListContainer>
  );
}