import * as React from 'react';
import { LayoutFilled, YoutubeFilled, SettingFilled, MenuUnfoldOutlined, GithubFilled, FilterFilled } from '@ant-design/icons';
import classnames from 'classnames';
import './icons.scss';

export function sidebarIcons (active ) {
  return {
    dashboard: <LayoutFilled className={classnames('icon', { 'icon-active': active})}/>,
    tubes: <YoutubeFilled className='icon' />,
    settings: <SettingFilled className='icon' />,
    queue: <MenuUnfoldOutlined className='icon' />,
    github: <GithubFilled className='icon' />,
    filter: <FilterFilled className='icon' />
  };
};