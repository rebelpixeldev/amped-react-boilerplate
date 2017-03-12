export default (store, injectReducer) => [
	require('./Login').default(store, injectReducer),
]