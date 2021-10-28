import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';
import { catchError } from 'rxjs/operators';
import { sourceReducer, sourceEpics } from '../containers/sources/index';
import { dashboardReducer, dashboardEpics } from '../containers/dashboard/index';
import { queueReducer, queueEpics } from '../containers/queue/index';

const epics = combineEpics(
  ...sourceEpics,
  ...dashboardEpics,
  ...queueEpics
);

const rootEpic = (action$, store$, dependencies) =>
  epics(action$, store$, dependencies).pipe(
  catchError((error, source) => {
    console.error(error);
    return source;
  })
);

const rootReducer = combineReducers({
  sourceReducer,
  dashboardReducer,
  queueReducer
});

export { rootEpic, rootReducer }
