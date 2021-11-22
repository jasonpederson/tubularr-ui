import React from 'react';
import { YoutubeFilled } from '@ant-design/icons';

import './PlaylistThumbnail.scss';

export default function PlaylistThumnail({ thumbnail }) {
  return (
    <div className='paylist-thumbnail-container'>
      <div className='paylist-tier-two'></div>
      <div className='paylist-tier-one'></div>
      <div className='playlist-thumnail'>
        { !thumbnail ?
          <YoutubeFilled className='no-thumbnail-icon' />
          :
          //Todo: Setup channel thumnail
          <></>
        }
      </div>
    </div>
  );
}