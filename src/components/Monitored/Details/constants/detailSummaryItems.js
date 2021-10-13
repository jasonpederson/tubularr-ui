import React from 'react';
import { ClockCircleOutlined, AudioOutlined, VideoCameraOutlined, SyncOutlined, GatewayOutlined } from '@ant-design/icons';

export default [
  {
    icon: <SyncOutlined />,
    hoverText: 'Last Indexed',
    value: 'lastIndexedOn',
    defaultValue: 'Never'
  },
  {
    icon: <ClockCircleOutlined />,
    hoverText: 'Index Schedule (hours)',
    value: 'indexSchedule',
    additionalText: 'hours'
  },
  {
    icon: <GatewayOutlined />,
    hoverText: 'Wanted Resolution',
    value: 'sourceResolution'
  },
  {
    icon: <VideoCameraOutlined />,
    hoverText: 'Wanted Video Codec',
    value: 'sourceVideoCodec'
  },
  {
    icon: <AudioOutlined />,
    hoverText: 'Wanted Audio Codec',
    value: 'sourceAudioCodec'
  },
];


