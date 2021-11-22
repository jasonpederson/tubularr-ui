import { ofType } from 'redux-observable';
import { mergeMap } from 'rxjs/operators';
import * as actionTypes from './actionTypes';
import * as actions from './actions';

const testVideos = [
  {
    "name": "Test Video",
    "channelName": "Video Channel",
    "downloaded": "",
    "videoLength": "360",
    "resolution": "1080p",
    "audioCodec": "aac",
    "fileType": 'mp4',
    "uuid": "e15f49f0-25cb-11ec-9712-b9b7234e0a22"
  },
  {
    "name": "Another Video",
    "channelName": "Another Channel",
    "downloaded": "",
    "videoLength": "712",
    "resolution": "1080p",
    "audioCodec": "opus",
    "fileType": 'mp4',
    "uuid": "e15f49f0-25cb-11ec-9712-b9b7234e0a22"
  }
]

export const getVideos = (action$) =>
action$.pipe(
	ofType(actionTypes.GET_VIDEOS_STARTED),
	mergeMap(async () => {
    try {
      return actions.getVideosCompleted(testVideos);
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
			return actions.getVideosFailed(error);
		}
	})
)
