import { ofType } from 'redux-observable';
import { mergeMap } from 'rxjs/operators';
import * as actionTypes from './actionTypes';
import * as actions from './actions';
import normalizeForDatabase from './utils/normalizeForDatabase';

export const getSources = (action$) =>
action$.pipe(
	ofType(actionTypes.GET_SOURCES_STARTED),
	mergeMap(async () => {
    try {
			return fetch(`http://localhost:8080/sources`, {
				method: 'GET',
        headers: {'Content-Type': 'application/json'}
      })
        .then(response => response.json())
        .then((jsonReponse) => {
					return actions.getSourcesCompleted(jsonReponse);
        }).catch(function (error) {
					return actions.getSourcesFailed(error);
				})
		} catch (error) {
			return actions.getSourcesFailed(error);
		}
	})
)

export const getSingleSource = (action$) =>
action$.pipe(
	ofType(actionTypes.GET_SINGLE_SOURCE_STARTED),
	mergeMap(async (action) => {
    const uuid = action.payload;
    try {
			return fetch(`http://localhost:8080/source?uuid=${uuid}`, {
				method: 'GET',
        headers: {'Content-Type': 'application/json'}
      })
        .then(response => response.json())
        .then((jsonReponse) => {
					return actions.getSingleSourceCompleted(jsonReponse);
        }).catch(function (error) {
					return actions.getSingleSourceFailed(error);
				})
		} catch (error) {
			return actions.getSingleSourceFailed(error);
		}
	})
)

export const addSource = (action$) =>
action$.pipe(
	ofType(actionTypes.ADD_SOURCE_STARTED),
	mergeMap(async (action) => {
    const normalizedValues = normalizeForDatabase(action.payload);
    try {
			return fetch(`http://localhost:8080/source`, {
				method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(normalizedValues)
      })
        .then((response) => {
					return actions.addSourceCompleted();
        }).catch(function (error) {
					return actions.addSourceFailed(error);
				})
		} catch (error) {
			return actions.addSourceFailed(error);
		}
	})
)
