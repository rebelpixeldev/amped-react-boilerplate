import { connect } from 'react-redux'
import Login from '../components/Login'

const mapDispatchToProps = {

}

const mapStateToProps = (state) => ({
	user : true,
	settings : state.settings,
	loginFormData : {
		method : 'POST',
		action : '/stuff/n/things',
		fields : [
			[
				{ type : 'text', name : 'email', label : 'Email' }
			],
			[
				{ type : 'password', name : 'password', label : 'Password' }
			]
		]
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(Login)
