import React from 'react';
import { useHistory, useLocation } from 'react-router';
import classnames from 'classnames';
import Icon from '../shared/Icon';
import NavigationSubMenuItem from './NavigationSubMenuItem';
import { sidebarIcons } from './constants/icons';
import isActivePath from '../../utils/isActivePath';

import './NavigationMenuItem.scss';

export default function navigationMenuItem({ item, subMenuItems }) {
  const location = useLocation();
  const routerHistory = useHistory();
  const currentItemActive = isActivePath(location.pathname, item.title);

  return (
    <div className='navigation-menu-item-container'>
      <div className='navigation-menu-item-row'>
        <div className='icon-column'>
          <Icon iconList={ sidebarIcons(currentItemActive) } name={ item.iconName } />
        </div>
        <div className='title-column' >
          <span 
            onClick={ () => { routerHistory.push(`${item.path}`)}} 
            className={classnames('title-text', {'active': currentItemActive})}
          >
            { item.title }
          </span>
        </div>
      </div>
        { subMenuItems && currentItemActive &&
          <div className='sub-menu-container'>
           {  subMenuItems.map((subMenuItem) => {
                return (
                  <NavigationSubMenuItem key={ subMenuItem.path } item={ subMenuItem } />
                )
              })
            }
          </div>
        }
    </div>
  );
}