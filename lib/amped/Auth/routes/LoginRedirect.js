
var Router = require('react-router');
import { browserHistory } from 'react-router';


export default (store, reducer) => ({
	path : '/login/:token',
	getComponent (nextState, cb) {

		console.log(nextState);

		localStorage.setItem('amped-token', nextState.params.token);

		console.log(nextState.params.token);
		console.log(localStorage.getItem('amped-token'));

		browserHistory.push('/');

		// console.log(nextState);
	}
})
