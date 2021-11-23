import React from 'react';
import { useHistory, useLocation } from 'react-router';
import ActivityViewTypeSelector from './ActivityViewTypeSelector';
import DownloadQueue from './DownloadQueue';
import isActivePath from '../../utils/isActivePath';

import './ActivityPage.scss';

export default function ActivityPage () {
  const location = useLocation();
  const routerHistory = useHistory();

  return (
    <div className='queue-container'>
      <ActivityViewTypeSelector 
        activityViewPath={ location.pathname }
        setActivityViewTypePath={ routerHistory.push }
      />
      { isActivePath(location.pathname, 'downloadQueue') ?
          <DownloadQueue />
          :
          <></>
      }
    </div>
  )
};