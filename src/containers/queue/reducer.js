import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

const _initialState = fromJS({
  downloadQueueLoading: false,
  downloadQueue: [],
  recentlyDownloadedLoading: false,
  recentlyDownloaded: []
});

const queueReducer = (state = _initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_DOWNLOAD_QUEUE_STARTED: {
      return state.set('downloadQueueLoading', true)
        .set('downloadQueue', [])
    }
    case actionTypes.GET_DOWNLOAD_QUEUE_COMPLETED: {
      return state.set('downloadQueueLoading', false)
        .set('downloadQueue', action.payload)
    }
    case actionTypes.GET_DOWNLOAD_QUEUE_FAILED: {
      return state.set('downloadQueueLoading', false)
        .set('downloadQueue', [])
    }
    case actionTypes.GET_RECENTLY_DOWNLOAD_STARTED: {
      return state.set('recentlyDownloadedLoading', true)
        .set('recentlyDownloaded', [])
    }
    case actionTypes.GET_RECENTLY_DOWNLOAD_COMPLETED: {
      return state.set('recentlyDownloadedLoading', false)
        .set('recentlyDownloaded', action.payload)
    }
    case actionTypes.GET_RECENTLY_DOWNLOAD_FAILED: {
      return state.set('recentlyDownloadedLoading', false)
        .set('recentlyDownloaded', [])
    }
    default:
      return state;
  }
};

export default queueReducer;


