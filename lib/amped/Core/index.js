import { AmpedService } from './AmpedService';

export { default as AmpedApp } from './containers/AmpedApp';
export { default as AmpedTransitionPage } from './containers/TransitionPage';
export ampedReducers from './reducers/';

export { AmpedService };



export const AmpedSetup = (store) => {
	AmpedService.store = store;
}
