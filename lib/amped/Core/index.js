import { AmpedService } from './AmpedService';

export { default as AmpedGlobal } from './containers/AmpedGlobal';
export ampedReducers from './reducers/';

export const AmpedSetup = (store) => {
	AmpedService.store = store;
}