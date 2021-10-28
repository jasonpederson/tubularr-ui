import * as actionTypes from './actionTypes';

export const getDashboardQuickStats = payload => ({
  type: actionTypes.GET_DASHBOARD_QUICKSTATS_STARTED,
  payload
});
export const getDashboardQuickStatsCompleted = payload => ({
  type: actionTypes.GET_DASHBOARD_QUICKSTATS_COMPLETED,
  payload
});
export const getDashboardQuickStatsFailed = payload => ({
  type: actionTypes.GET_DASHBOARD_QUICKSTATS_FAILED,
  payload
});
export const getRecentlyMonitored = payload => ({
  type: actionTypes.GET_RECENTLY_MONITORED_STARTED,
  payload
});
export const getRecentlyMonitoredCompleted = payload => ({
  type: actionTypes.GET_RECENTLY_MONITORED_COMPLETED,
  payload
});
export const getRecentlyMonitoredFailed = payload => ({
  type: actionTypes.GET_RECENTLY_MONITORED_FAILED,
  payload
});