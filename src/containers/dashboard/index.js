import * as dashboardActions from './actions';
import * as dashboardActionTypes from './actionTypes';
import * as DashboardEpics from './epics';
import dashboardReducer from './reducer';

const dashboardEpics = Object.values({ ...DashboardEpics });

export { dashboardActions, dashboardActionTypes, dashboardReducer, dashboardEpics };