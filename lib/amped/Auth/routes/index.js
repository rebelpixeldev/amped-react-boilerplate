export default (store, injectReducer) => [
	require('./Login').default(store, injectReducer),
	require('./LoginRedirect').default(store, injectReducer),
]