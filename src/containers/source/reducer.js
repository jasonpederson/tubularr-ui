import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

const _initialState = fromJS({
  getSourcesInProgress: false,
  sources: [],
  getSourcesError: undefined,
  selectedSource: {},
  addSourceInProgress: false,
  addSourceCompleted: false,
  addSourceError: ''
});

const sourceReducer = (state = _initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_SOURCES_STARTED: {
      return state.set('getSourcesInProgress', true)
        .set('getSourcesError', undefined)
    }
    case actionTypes.GET_SOURCES_COMPLETED: {
      return state.set('getSourcesInProgress', false)
        .set('sources', action.payload)
    }
    case actionTypes.GET_SOURCES_FAILED: {
      return state.set('getSourcesInProgress', false)
      .set('getSourcesError', action.payload)
    }
    case actionTypes.SET_SELECTED_SOURCE: {
      return state.set('selectedSource', action.payload);
    }
    case actionTypes.ADD_SOURCE_STARTED: {
      return state.set('addSourceInProgress', true)
        .set('addSourceCompleted', false)
        .set('addSourceError', undefined)
    }
    case actionTypes.ADD_SOURCE_COMPLETED: {
      return state.set('addSourceInProgress', false)
        .set('addSourceCompleted', true);
    }
    case actionTypes.ADD_SOURCE_FAILED: {
      return state.set('addSourceInProgress', false)
        .set('addSourceError', action.payload)
    }
    case actionTypes.ADD_SOURCE_RETRY: {
      return state.set('addSourceInProgress', false)
        .set('addSourceCompleted', false)
        .set('addSourceError', undefined)
    }
    case actionTypes.ADD_SOURCE_RESET: {
      return state.set('addSourceInProgress', false)
        .set('addSourceCompleted', false)
        .set('addSourceError', undefined)
    }
    default:
      return state;
  }
};

export default sourceReducer;


