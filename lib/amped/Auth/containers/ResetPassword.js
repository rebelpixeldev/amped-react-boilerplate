import React from 'react';
import { connect } from 'react-redux';
import { default as ResetPasswordComponent } from '../components/ResetPassword';
import { browserHistory } from 'react-router';

import '../styles/_login.scss';

const mapStateToProps = (state) => ({
	user : true,
	settings : state.amped.settings,
	loginFormData : {
		action: '/api/user/resetpassword',
		method : 'POST',
		fields: [
			[
				{
					type: 'text',
					label: 'Email',
					name: 'email',
					icon: 'account_circle'
				}
			]
		]
	}
});

export class ResetPassword extends React.Component{

	constructor(props){
		super(props);
	}

	handleFormSubmit(resp){
		if ( resp.success )
		browserHistory.push('/login');
	}

	render(){
		return (
			<ResetPasswordComponent {...this.props} onSubmit={this.handleFormSubmit.bind(this)}  />
		)
	}

}

export default connect(mapStateToProps)(ResetPassword)
