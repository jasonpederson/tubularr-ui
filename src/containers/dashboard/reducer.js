import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

const _initialState = fromJS({
  dashboardQuickStatsLoading: false,
  dashboardQuickStats: {},
  recentlyMonitoredLoading: false,
  recentlyMonitored: []
});

const dashboardReducer = (state = _initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_DASHBOARD_QUICKSTATS_STARTED: {
      return state.set('dashboardQuickStatsLoading', true)
        .set('dashboardQuickStats', {})
    }
    case actionTypes.GET_DASHBOARD_QUICKSTATS_COMPLETED: {
      return state.set('dashboardQuickStatsLoading', false)
        .set('dashboardQuickStats', action.payload)
    }
    case actionTypes.GET_DASHBOARD_QUICKSTATS_FAILED: {
      return state.set('dashboardQuickStatsLoading', false)
        .set('dashboardQuickStats', {})
    }
    case actionTypes.GET_RECENTLY_MONITORED_STARTED: {
      return state.set('recentlyMonitoredLoading', true)
        .set('recentlyMonitored', [])
    }
    case actionTypes.GET_RECENTLY_MONITORED_COMPLETED: {
      return state.set('recentlyMonitoredLoading', false)
        .set('recentlyMonitored', action.payload)
    }
    case actionTypes.GET_RECENTLY_MONITORED_FAILED: {
      return state.set('recentlyMonitoredLoading', false)
        .set('recentlyMonitored', [])
    }
    default:
      return state;
  }
};

export default dashboardReducer;


