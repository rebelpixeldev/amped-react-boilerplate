import { connect } from 'react-redux';
import Login from '../components/Login';

import '../styles/_login.scss';

const mapStateToProps = (state) => ({
	user : true,
	settings : state.amped.settings,
	loginFormData : {
		action: '/login',
		method : 'POST',
		fields: [
			[
				{
					type: 'text',
					label: 'Email',
					name: 'email',
					icon: 'account_circle'
				}
			],
			[
				{
					type: 'password',
					label: 'Password',
					name: 'password',
					icon: 'lock'
				}
			]
		]
	}
});

export default connect(mapStateToProps)(Login)
