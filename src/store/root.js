import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';
import { catchError } from 'rxjs/operators';
import { sourceReducer, sourceEpics } from '../containers/sources/index';
import { videoReducer, videoEpics } from '../containers/videos/index';
import { activityReducer, activityEpics } from '../containers/activity/index';

const epics = combineEpics(
  ...sourceEpics,
  ...videoEpics,
  ...activityEpics
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
  videoReducer,
  activityReducer
});

export { rootEpic, rootReducer }
