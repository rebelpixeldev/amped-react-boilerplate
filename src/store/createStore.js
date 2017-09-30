import makeRootReducer from './reducers'
import {updateLocation} from './location'

import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'

import createHistory from 'history/createBrowserHistory'
import { Route } from 'react-router'

import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'

import {AmpedSetup} from 'amped-react-core/Core';

export default (history, initialState = {}) => {

	const middleware = routerMiddleware(history)
	// ======================================================
	// Store Enhancers
	// ======================================================
	const enhancers = []

	let composeEnhancers = compose

	if (__DEV__) {
		const composeWithDevToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		if (typeof composeWithDevToolsExtension === 'function') {
			composeEnhancers = composeWithDevToolsExtension
		}
	}

	// ======================================================
	// Store Instantiation and HMR Setup
	// ======================================================
	const store = createStore(
		makeRootReducer(),
		applyMiddleware(middleware)
	)


	// const store = createStore(
	//
	// 	initialState,
	// 	composeEnhancers(
	// 		applyMiddleware(...middleware),
	// 		...enhancers
	// 	)
	// );


	AmpedSetup(store);
	store.asyncReducers = {}

	// To unsubscribe, invoke `store.unsubscribeHistory()` anytime
	// store.unsubscribeHistory = browserHistory.listen(updateLocation(store))

	if (module.hot) {
		module.hot.accept('./reducers', () => {
			const reducers = require('./reducers').default
			store.replaceReducer(reducers(store.asyncReducers))
			// store.replaceReducer(reducers(store.asyncReducers))
		})
	}

	return store
}
