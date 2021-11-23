import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

const _initialState = fromJS({
  activtiyViewType: 'downloadQueue',
  getDownloadQueueInProgress: false,
  downloadQueue: [],
  getDownloadQueueError: undefined,
  getRecentlyDownloadedInProgress: false,
  recentlyDownloaded: [],
  getRecentlyDownloadedError: undefined
});

const activityReducer = (state = _initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_ACTIVITY_VIEW_TYPE: {
      return state.set('activityViewType', action.payload)
    }
    case actionTypes.GET_DOWNLOAD_QUEUE_STARTED: {
      return state.set('getDownloadQueueInProgress', true)
        .set('getDownloadQueueError', undefined)
    }
    case actionTypes.GET_DOWNLOAD_QUEUE_COMPLETED: {
      return state.set('getDownloadQueueInProgress', false)
        .set('downloadQueue', action.payload)
    }
    case actionTypes.GET_DOWNLOAD_QUEUE_FAILED: {
      return state.set('getDownloadQueueInProgress', false)
        .set('getDownloadQueueError', action.payload)
    }
    case actionTypes.GET_RECENTLY_DOWNLOAD_STARTED: {
      return state.set('getRecentlyDownloadedInProgress', true)
        .set('getRecentlyDownloadedError', undefined)
    }
    case actionTypes.GET_RECENTLY_DOWNLOAD_COMPLETED: {
      return state.set('getRecentlyDownloadedInProgress', false)
        .set('recentlyDownloaded', action.payload)
    }
    case actionTypes.GET_RECENTLY_DOWNLOAD_FAILED: {
      return state.set('getRecentlyDownloadedInProgress', false)
        .set('getRecentlyDownloadedError', action.payload)
    }
    default:
      return state;
  }
};

export default activityReducer;


