import React from 'react';
import Icon from '../shared/Icon';
import { sidebarIcons } from './constants/icons'

import './NavigationMenuItem.scss';

const _isActive = (activePath, item) => {
  return item.path === activePath;
}

export default function navigationMenuItem({ item, children }) {
  return (
    <div className='navigation-menu-item-container'>
      <div className='main-row'>
        <div className='active-indicator-column' />
        <div className='icon-column'>
          <Icon iconList={ sidebarIcons(_isActive('/', item)) } name={ item.iconName } />
        </div>
        <div className='title-column' >
          <span className='title-text' >{ item.title }</span>
        </div>
      </div>
      { children && 
        children.map((child) => {
          return (
            <div className='children-container'>
              { child.title }
            </div>
          )
        })
      }
    </div>
  );
}