import React from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux'

import { default as AmpedAppComponent } from '../components/AmpedApp'
import { SET_USER } from '../actions';
import { AmpedService } from 'amped/Core/AmpedService';



import '../styles/_core.scss';

const mapStateToProps = (state) => ({
	user : state.amped.user,
	settings : state.amped.settings,

});


export class AmpedApp extends React.Component{

	static propTypes = {
		safeRoutes : React.PropTypes.array
	};

	static defaultProps = {
		safeRoutes : []
	};

	constructor(props){
		super(props);
		this.state = {
			setup : false
		}
	}
	componentDidMount(){
		AmpedService.getUser()
			.then(( resp ) => {
				if ( typeof resp.id === 'undefined' ){
					if ( this.getSafeRoutes().indexOf(browserHistory.getCurrentLocation().pathname) === -1 )
						// this.setState({setup: true});
						browserHistory.push('/login');
				} else {
					this.props.dispatch({
						type: SET_USER,
						user: resp
					})
				}
				this.setState({setup: true});
			})
	}

	render(){
		return (
			<AmpedAppComponent {...this.props} {...this.state}/>
		)
	}

	get defaultSafeRoutes(){
		return ['/login', '/signup', '/register', '/resetpassword'];
	}

	getSafeRoutes(){
		return [...this.props.safeRoutes, ...this.defaultSafeRoutes];
	}
}


export default connect(mapStateToProps, null, null, {
	withRef : true
})(AmpedApp);
