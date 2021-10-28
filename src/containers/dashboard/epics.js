import { ofType } from 'redux-observable';
import { mergeMap } from 'rxjs/operators';
import * as actionTypes from './actionTypes';
import * as actions from './actions';

export const getDashboardQuickStats = (action$) =>
action$.pipe(
	ofType(actionTypes.GET_DASHBOARD_QUICKSTATS_STARTED),
	mergeMap(async () => {
    try {
      return actions.getDashboardQuickStatsCompleted({
        monitoredChannels: 4,
        monitoredPlaylists: 2,
        downloadedItems: 19,
        queuedItems: 123
      });
			// return fetch(`http://localhost:8080/dashboardQuickStats`, {
			// 	method: 'GET',
      //   headers: {'Content-Type': 'application/json'}
      // })
      //   .then(response => response.json())
      //   .then((jsonReponse) => {
			// 		return actions.getSourcesCompleted(jsonReponse);
      //   }).catch(function (error) {
			// 		return actions.getSourcesFailed(error);
			// 	})
		} catch (error) {
			return actions.getDashboardQuickStatsFailed(error);
		}
	})
)

const testRecentlyMonitored = [
  {
    "name": "Test Channel",
    "sourceKey": "TomScottGo",
    "lastIndexedOn": "",
    "uuid": "e15f49f0-25cb-11ec-9712-b9b7234e0a18"
  }
]

export const getRecentlyMonitored = (action$) =>
action$.pipe(
	ofType(actionTypes.GET_RECENTLY_MONITORED_STARTED),
	mergeMap(async () => {
    try {
      return actions.getRecentlyMonitoredCompleted(testRecentlyMonitored);
			// return fetch(`http://localhost:8080/dashboardQuickStats`, {
			// 	method: 'GET',
      //   headers: {'Content-Type': 'application/json'}
      // })
      //   .then(response => response.json())
      //   .then((jsonReponse) => {
			// 		return actions.getSourcesCompleted(jsonReponse);
      //   }).catch(function (error) {
			// 		return actions.getSourcesFailed(error);
			// 	})
		} catch (error) {
			return actions.getRecentlyMonitoredFailed(error);
		}
	})
)
