
import { combineReducers } from 'redux';

import alerts from '../../Alerts/reducers';
import settings from '../reducers/settings';

export const ampedReducers = combineReducers({
	alerts,
	settings
});

export default ampedReducers;