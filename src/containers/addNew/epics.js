import { ofType } from 'redux-observable';
import { mergeMap } from 'rxjs/operators';
import * as actionTypes from './actionTypes';
import * as actions from './actions';
import normalizeForDatabase from './utils/normalizeForDatabase';

export const addNew = (action$) =>
action$.pipe(
	ofType(actionTypes.ADD_NEW_STARTED),
	mergeMap(async (action) => {
    const normalizedValues = normalizeForDatabase(action.payload);
    try {
			return fetch(`http://localhost:8080/source`, {
				method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(normalizedValues)
      })
        .then((response) => {
          console.log('Response json', response);
					return actions.addNewCompleted();
        }).catch(function (error) {
					console.log('Add New Failed', error);
					return actions.addNewFailed(error);
				})
		} catch (error) {
			return actions.addNewFailed(error);
		}
	})
)
