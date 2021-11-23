import * as activityActions from './actions';
import * as activityActionTypes from './actionTypes';
import * as ActivityEpics from './epics';
import activityReducer from './reducer';

const activityEpics = Object.values({ ...ActivityEpics });

export { activityActions, activityActionTypes, activityReducer, activityEpics };