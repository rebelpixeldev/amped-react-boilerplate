import React from 'react';
import { connect } from 'react-redux'
import { default as AmpedTableConponent } from '../components/AmpedTable'

import MemberService from '../../Core/MemberService';

console.log(MemberService);

const mapDispatchToProps = {

};

const mapStateToProps = (state) => ({
	user : true,
	settings : state.settings,

});

class AmpedTable extends React.Component{

	constructor(props){
		super(props);
		this.props = props;
	}

	componentDidMount(){
		this.getHeaders();
	}

	getHeaders(){
		MemberService.get(`/api/${this.props.model}/tableHeaders`)
			.then((resp) => {
			    console.log(resp);
			})
	}

	render(){
		return (
			<AmpedTableConponent {...this.props} />
		)
	}

}

AmpedTable.propTypes = {
	model : React.PropTypes.string.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(AmpedTable);
