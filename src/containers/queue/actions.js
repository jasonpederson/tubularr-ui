import * as actionTypes from './actionTypes';

export const getDownloadQueue = payload => ({
  type: actionTypes.GET_DOWNLOAD_QUEUE_STARTED,
  payload
});
export const getDownloadQueueCompleted = payload => ({
  type: actionTypes.GET_DOWNLOAD_QUEUE_COMPLETED,
  payload
});
export const getDownloadQueueFailed = payload => ({
  type: actionTypes.GET_DOWNLOAD_QUEUE_FAILED,
  payload
});
export const getRecentlyDownloaded = payload => ({
  type: actionTypes.GET_RECENTLY_DOWNLOAD_STARTED,
  payload
});
export const getRecentlyDownloadedCompleted = payload => ({
  type: actionTypes.GET_RECENTLY_DOWNLOAD_COMPLETED,
  payload
});
export const getRecentlyDownloadedFailed = payload => ({
  type: actionTypes.GET_RECENTLY_DOWNLOAD_FAILED,
  payload
});