import * as actionTypes from './actionTypes';

export const getVideos = payload => ({
  type: actionTypes.GET_VIDEOS_STARTED,
  payload
});
export const getVideosCompleted = payload => ({
  type: actionTypes.GET_VIDEOS_COMPLETED,
  payload
});
export const getVideosFailed = payload => ({
  type: actionTypes.GET_VIDEOS_FAILED,
  payload
});