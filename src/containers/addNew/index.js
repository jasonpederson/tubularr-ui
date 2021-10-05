import * as addNewActions from './actions';
import * as addNewActionTypes from './actionTypes';
import * as AddNewEpics from './epics';
import addNewReducer from './reducer';

const addNewEpics = Object.values({ ...AddNewEpics });

export { addNewActions, addNewActionTypes, addNewReducer, addNewEpics };