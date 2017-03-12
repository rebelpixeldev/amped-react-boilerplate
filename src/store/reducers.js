import {combineReducers} from 'redux'
import locationReducer from './location'

import {default as AmpedSettings} from 'amped/core/reducers';

// @TODO need to get settings and navigation from the api

export const makeRootReducer = (asyncReducers) => {
	return combineReducers({
		location: locationReducer,
		settings : AmpedSettings,
		...asyncReducers
	})
}

export const injectReducer = (store, {key, reducer}) => {
	if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

	store.asyncReducers[key] = reducer
	store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
