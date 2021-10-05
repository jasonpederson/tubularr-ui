import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

const _initialState = fromJS({
  addNewInProgress: false,
  addNewCompleted: false,
  addNewError: ''
});

const addNewReducer = (state = _initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_NEW_STARTED: {
      return state.set('addNewInProgress', true)
        .set('addNewCompleted', false)
        .set('addNewError', undefined)
    }
    case actionTypes.ADD_NEW_COMPLETED: {
      return state.set('addNewInProgress', false)
        .set('addNewCompleted', true);
    }
    case actionTypes.ADD_NEW_FAILED: {
      return state.set('addNewInProgress', false)
        .set('addNewError', action.payload)
    }
    case actionTypes.ADD_NEW_RETRY: {
      return state.set('addNewInProgress', false)
        .set('addNewCompleted', false)
        .set('addNewError', undefined)
    }
    case actionTypes.ADD_NEW_RESET: {
      return state.set('addNewInProgress', false)
        .set('addNewCompleted', false)
        .set('addNewError', undefined)
    }
    default:
      return state;
  }
};

export default addNewReducer;


