import React from 'react';
import downloadedVideoListColumns from './constants/downloadedVideoListColumns';

import './DownloadedVideoList.scss';

export default function DownloadedVideoList({  }) {
  return (
    <div className='downloaded-video-list-container'>
      <div className='list-row header'>
        { downloadedVideoListColumns.map((column, index) => {
          return (
            <div className='header-value' key={ index } style={{ flex: column.flexSize }}>{ column.value }</div>
          )
        })
        }
      </div>
    </div>
  );
}