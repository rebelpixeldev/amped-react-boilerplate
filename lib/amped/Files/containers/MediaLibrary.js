import React from 'react';

import { connect } from 'react-redux'
import {AmpedService} from "amped/Core";

import MediaLibraryComponent from '../components/MediaLibrary'

const mapStateToProps = (state) => ({
	user : true,
	settings : state.amped.settings,

});

class MediaLibrary extends React.Component{

	constructor(props){
		super(props);
		this.props = props;
		this.state = {
			files : []
		}
	}

	componentDidMount(){
		console.log('MOUNTED');
		AmpedService.get(`/api/uploads`)
			.then((resp) => {
			    console.log(resp);
			    this.setState({
			    	files : resp.response
			    })
			})
	}

	render(){
		return (
			<MediaLibraryComponent {...this.state} {...this.props} />
		)
	}

}

export default connect(mapStateToProps)(MediaLibrary);
