import * as React from 'react';
import { LayoutFilled, YoutubeFilled, SettingFilled, MenuUnfoldOutlined, GithubFilled, FilterFilled } from '@ant-design/icons';
import classnames from 'classnames';
import './icons.scss';

export function sidebarIcons (active) {
  return {
    dashboard: <LayoutFilled className={classnames('icon', { 'icon-active': active})}/>,
    tubes: <YoutubeFilled className={classnames('icon', { 'icon-active': active})} />,
    settings: <SettingFilled className={classnames('icon', { 'icon-active': active})} />,
    queue: <MenuUnfoldOutlined className={classnames('icon', { 'icon-active': active})} />,
    github: <GithubFilled className={classnames('icon', { 'icon-active': active})} />,
    filter: <FilterFilled className={classnames('icon', { 'icon-active': active})}s />
  };
};