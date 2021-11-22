import * as React from 'react';
import { LayoutFilled, YoutubeFilled, ScheduleOutlined, SettingFilled, UnorderedListOutlined, GithubFilled, FilterFilled } from '@ant-design/icons';
import classnames from 'classnames';
import './icons.scss';

export function sidebarIcons (active) {
  return {
    dashboard: <LayoutFilled className={classnames('icon', { 'icon-active': active})}/>,
    videos: <YoutubeFilled className={classnames('icon', { 'icon-active': active})} />,
    monitored: <ScheduleOutlined className={classnames('icon', { 'icon-active': active})}/>,
    settings: <SettingFilled className={classnames('icon', { 'icon-active': active})} />,
    activity: <UnorderedListOutlined className={classnames('icon', { 'icon-active': active})} />,
    github: <GithubFilled className={classnames('icon', { 'icon-active': active})} />,
    filter: <FilterFilled className={classnames('icon', { 'icon-active': active})}s />
  };
};