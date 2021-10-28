import * as sourceActions from './actions';
import * as sourceActionTypes from './actionTypes';
import * as SourceEpics from './epics';
import sourceReducer from './reducer';

const sourceEpics = Object.values({ ...SourceEpics });

export { sourceActions, sourceActionTypes, sourceReducer, sourceEpics };