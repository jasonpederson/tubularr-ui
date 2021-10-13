import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';
import { catchError } from 'rxjs/operators';
import { sourceReducer, sourceEpics } from '../containers/source/index';

const epics = combineEpics(
  ...sourceEpics
);

const rootEpic = (action$, store$, dependencies) =>
  epics(action$, store$, dependencies).pipe(
  catchError((error, source) => {
    console.error(error);
    return source;
  })
);

const rootReducer = combineReducers({
  sourceReducer
});

export { rootEpic, rootReducer }
