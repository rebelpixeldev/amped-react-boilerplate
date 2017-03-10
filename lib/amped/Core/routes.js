export default (store, injectReducer) =>
	[
		...require('../Crud/routes').default(store, injectReducer)
	]
