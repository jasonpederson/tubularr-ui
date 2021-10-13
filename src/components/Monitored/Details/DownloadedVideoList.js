import React from 'react';
import downloadedVideoListColumns from './constants/downloadedVideoListColumns';

import './DownloadedVideoList.scss';

export default function DownloadedVideoList({  }) {
  return (
    <div className='downloaded-video-list-container'>
      <div className='list-row header'>
        { downloadedVideoListColumns.map((column) => {
          return (
            <div className='header-value' style={{ flex: column.flexSize }}>{ column.value }</div>
          )
        })
        }
      </div>
    </div>
  );
}