import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import Divider from 'material-ui/Divider';

import { Form } from 'amped/Form/elements';
import { LoaderButton } from 'amped/Form/elements';

export const Login = ( { loginFormData, settings } ) => (
    <Card className="amped-card" style={{width:400}}>
        <h1>{settings.site.name} Login</h1>
        <Form data={loginFormData}
              style={ {marginBottom: 16} }
            submitLabel="Login"/>
        <Divider />

        <LoaderButton label="Login with Google" loading={false} />

    </Card>
);

export default Login;