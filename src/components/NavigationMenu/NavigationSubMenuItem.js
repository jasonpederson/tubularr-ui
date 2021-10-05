import React from 'react';
import { useHistory, useLocation } from 'react-router';
import classnames from 'classnames';
import isActivePath from '../../utils/isActivePath';

import './NavigationSubMenuItem.scss';

export default function navigationSubMenuItem({ item }) {
  const location = useLocation();
  const routerHistory = useHistory();
  const currentItemActive = isActivePath(location.pathname, item);
  return (
    <div className='navigation-sub-menu-item-container'>
      <div 
        className={classnames('navigation-sub-menu-item', {'active': currentItemActive})}
        onClick={ () => { routerHistory.push(`${item.path}`)}}
      >
        { item.title }
      </div>
    </div>
  );
}