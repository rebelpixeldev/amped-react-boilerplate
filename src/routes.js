
import {default as AmpedCoreRoutes} from 'amped-react-core/Core/routes';

import { Dashboard } from './components/views';
import { CoreLayout } from './components/layouts';

import {injectReducer} from './store/reducers'



export const createRoutes = (store) => (
	{
		path: '/',
		component: CoreLayout,
		indexRoute: {
			component : Dashboard
		},
		childRoutes: [
			...AmpedCoreRoutes(store, injectReducer)
		]
	}
)

export default createRoutes
