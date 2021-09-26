import React from 'react';
import NavigationMenuItem from './NavigationMenuItem';
import navigationMenuItemList from './constants/navigationMenuItemList';

import './NavigationMenu.scss';

export default function Sidebar() {
  return (
    <div className='navigation-menu-container'>
      { navigationMenuItemList.map((listItem) => {
          return (
            <NavigationMenuItem 
              key={ listItem.title }
              item={ listItem }
              childrenItems={ listItem.children }
            />
          );
        })
      }
    </div>
  );
}