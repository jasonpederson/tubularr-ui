import React from 'react';
import classnames from 'classnames';
import { YoutubeFilled } from '@ant-design/icons';

import './PlaylistThumbnail.scss';

export default function PlaylistThumnail({ thumbnail, isHovered }) {
  return (
    <div className='paylist-thumbnail-container' >
      <div className={ classnames('paylist-tier-two background-medium', { 'side-borders top-border': isHovered } )} />
      <div className={ classnames('paylist-tier-one background-light', { 'side-borders': isHovered } )} />
      <div className={ classnames('playlist-thumnail', { 'side-borders': isHovered } )} >
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