import { MemberService } from './MemberService';

export { default as AmpedGlobal } from './containers/AmpedGlobal';
export ampedReducers from './reducers/';

export const AmpedSetup = (store) => {
	MemberService.store = store;
}