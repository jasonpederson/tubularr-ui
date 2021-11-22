import * as videoActions from './actions';
import * as videoActionTypes from './actionTypes';
import * as VideoEpics from './epics';
import videoReducer from './reducer';

const videoEpics = Object.values({ ...VideoEpics });

export { videoActions, videoActionTypes, videoReducer, videoEpics };