import * as actionTypes from './actionTypes';

export const addNewStarted = payload => ({
  type: actionTypes.ADD_NEW_STARTED,
  payload
});
export const addNewCompleted = payload => ({
  type: actionTypes.ADD_NEW_COMPLETED,
  payload
});
export const addNewFailed = payload => ({
  type: actionTypes.ADD_NEW_FAILED,
  payload
});
export const addNewRetry = () => ({
  type: actionTypes.ADD_NEW_RETRY
});
export const addNewReset = () => ({
  type: actionTypes.ADD_NEW_RESET
});