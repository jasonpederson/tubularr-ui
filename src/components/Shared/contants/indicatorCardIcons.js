import * as React from 'react';
import { WarningOutlined, CheckCircleOutlined } from '@ant-design/icons';
import colorCodes from '../../../constants/colorCodes';

export default {
  success: <CheckCircleOutlined style={{ fontSize: '36px', color: `${colorCodes.green}` }} />,
  failure: <WarningOutlined style={{ fontSize: '36px', color: `${colorCodes.highlight}` }}  />
};
