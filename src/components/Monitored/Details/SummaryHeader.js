import React from 'react';
import { YoutubeFilled } from '@ant-design/icons';
import detailSummaryItems from './constants/detailSummaryItems';

import './SummaryHeader.scss';

export default function SummaryHeader({ selectedSource }) {
  return (
    <div className='monitored-details-summary-container'>
      <div className='monitored-thumbnail-container'>
        <div className='monitored-item-thumbnail'>
          <YoutubeFilled className='no-thumbnail-icon' />
        </div>
      </div>
      <div className='monitored-details-summary-column'>
        <div className='monitored-details-summary-row'>
          <span className='selected-source-name'>{selectedSource.name}</span>
        </div>
        <div className='monitored-details-summary-row'>
          <span className='selected-source-key'>{selectedSource.sourceKey}</span>
        </div>
        <div className='monitored-details-summary-row spacing'>
          { detailSummaryItems.map((summaryItem, index) => {
            return (
              <div key={ index } className='monitored-details-summary-item-container'>
              { summaryItem.icon }
              <span className='monitored-details-summary-item-header'>
                { selectedSource[summaryItem.value] || summaryItem.defaultValue } { summaryItem.additionalText }
              </span>
            </div>
            )
          })
          }
        </div>
      </div>
    </div>
  );
}