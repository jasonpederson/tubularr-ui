import * as actionTypes from './actionTypes';

export const getSourcesStarted = payload => ({
  type: actionTypes.GET_SOURCES_STARTED,
  payload
});
export const getSourcesCompleted = payload => ({
  type: actionTypes.GET_SOURCES_COMPLETED,
  payload
});
export const getSourcesFailed = payload => ({
  type: actionTypes.GET_SOURCES_FAILED,
  payload
});
export const setSelectedSource = payload => ({
  type: actionTypes.SET_SELECTED_SOURCE,
  payload
});
export const addSourceStarted = payload => ({
  type: actionTypes.ADD_SOURCE_STARTED,
  payload
});
export const addSourceCompleted = payload => ({
  type: actionTypes.ADD_SOURCE_COMPLETED,
  payload
});
export const addSourceFailed = payload => ({
  type: actionTypes.ADD_SOURCE_FAILED,
  payload
});
export const addSourceRetry = () => ({
  type: actionTypes.ADD_SOURCE_RETRY
});
export const addSourceReset = () => ({
  type: actionTypes.ADD_SOURCE_RESET
});