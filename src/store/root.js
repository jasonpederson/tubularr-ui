import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';
import { catchError } from 'rxjs/operators';
import { addNewReducer, addNewEpics } from '../containers/addNew/index';

const epics = combineEpics(
  ...addNewEpics
);

const rootEpic = (action$, store$, dependencies) =>
  epics(action$, store$, dependencies).pipe(
  catchError((error, source) => {
    console.error(error);
    return source;
  })
);

const rootReducer = combineReducers({
  addNewReducer
});

export { rootEpic, rootReducer }
