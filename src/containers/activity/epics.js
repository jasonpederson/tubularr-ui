import { ofType } from 'redux-observable';
import { mergeMap } from 'rxjs/operators';
import * as actionTypes from './actionTypes';
import * as actions from './actions';

const testQueue = [
  {
    id: '1234-u83djd',
    title: 'Video Title',
    channel: 'Channel Test',
    length: 322,
    resolution: '1080p',
    audio: 'opus',
    fileType: 'mp4'
  },
  {
    id: '1234-u8333jd',
    title: 'Another Video',
    channel: 'Channel Test',
    length: 455,
    resolution: '720p',
    audio: 'aac',
    fileType: 'mp4'
  },
  {
    id: '1234-u8467jd',
    title: 'Third Video',
    channel: 'Channel Test',
    length: 665,
    resolution: '1080p',
    audio: 'aac',
    fileType: 'mp4'
  }
]

export const getDownloadQueue = (action$) =>
action$.pipe(
	ofType(actionTypes.GET_DOWNLOAD_QUEUE_STARTED),
	mergeMap(async () => {
    try {
      return actions.getDownloadQueueCompleted(testQueue);
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
			return actions.getDownloadQueueFailed(error);
		}
	})
)

const testDownloads = [
  {
    id: '1234-u83djd',
    title: 'Video Title',
    channel: 'Channel Test',
    timestamp: '2021-10-15T09:13:29'
  },
  {
    id: '1234-u8333jd',
    title: 'Another Video',
    channel: 'Channel Test',
    timestamp: '2021-10-122T13:13:29'
  }
]

export const getRecentlyDownloaded = (action$) =>
action$.pipe(
	ofType(actionTypes.GET_DOWNLOAD_QUEUE_STARTED),
	mergeMap(async () => {
    try {
      return actions.getRecentlyDownloadedCompleted(testDownloads);
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
			return actions.getRecentlyDownloadedFailed(error);
		}
	})
)
