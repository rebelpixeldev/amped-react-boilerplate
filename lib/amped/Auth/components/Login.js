import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import Divider from 'material-ui/Divider';

import {Form} from 'amped/Form';
import {LoaderButton} from 'amped/Form';

export const Login = ({loginFormData, settings, onOauthClick}) => (
	<Card className="amped-card amped-login-card" style={{width: 400}}>
		<div className="amped-login-card--header paper--depth-2">
			<h1>{settings.site.name} Login</h1>
		</div>
		<Form data={loginFormData}
		      name="login"
		      style={ {marginBottom: 16} }
		      submitLabel="Login"/>
		<Divider />
		<div className="amped-login-card--external">
			<LoaderButton label="Login with Google" loading={false} onClick={() => {
				window.open('http://localhost:4000/auth/google')
			}}/>
			<LoaderButton label="Login with Facebook" loading={false} onClick={() => {
				window.open('http://localhost:4000/auth/google')
			}}/>
		</div>

	</Card>
);

export default Login;