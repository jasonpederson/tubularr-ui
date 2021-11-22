import React from 'react';
import VideoList from './VideoList';

import './VideoPage.scss';

export default function VideoPage() {
  return (
    <div className='video-page-container'>
      <VideoList />
    </div>
  );
}