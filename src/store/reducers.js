import {combineReducers} from 'redux'
import locationReducer from './location'

import { routerReducer } from 'react-router-redux';
import { ampedReducers } from 'amped-react-core/Core';

// @TODO need to get settings and navigation from the api
export const makeRootReducer = (asyncReducers) => {
	return combineReducers({
		location: locationReducer,
		amped: ampedReducers,
		router: routerReducer,
		...asyncReducers
	});
}

export const injectReducer = (store, {key, reducer}) => {
	if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

	store.asyncReducers[key] = reducer
	store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
