import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

const _initialState = fromJS({
  getVideosInProgress: false,
  videos: [],
  getVideosError: undefined
});

const videoReducer = (state = _initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_VIDEOS_STARTED: {
      return state.set('getVideosInProgress', true)
        .set('videos', state.videos)
        .set('getVideosError', undefined)
    }
    case actionTypes.GET_VIDEOS_COMPLETED: {
      return state.set('getVideosInProgress', false)
        .set('videos', action.payload)
    }
    case actionTypes.GET_VIDEOS_FAILED: {
      return state.set('getVideosInProgress', false)
        .set('videos', state.videos)
        .set('getVideosError', action.payload)
    }
    default:
      return state;
  }
};

export default videoReducer;


