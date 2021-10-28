import * as queueActions from './actions';
import * as queueActionTypes from './actionTypes';
import * as QueueEpics from './epics';
import queueReducer from './reducer';

const queueEpics = Object.values({ ...QueueEpics });

export { queueActions, queueActionTypes, queueReducer, queueEpics };