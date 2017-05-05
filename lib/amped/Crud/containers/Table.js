import React  from 'react';
import { connect } from 'react-redux'
import { Table as TableComponent } from '../components/Table'

import { AmpedService }  from 'amped/Core/AmpedService';
import { AmpedTransitionPage } from 'amped/Core';

const mapStateToProps = (state) => ({
	user : true,
	settings : state.amped.settings
});


class Table extends React.Component{
	

	constructor(props){
		super(props);
		this.props = props;
		this.state = {
			model : typeof this.props.model === 'undefined' ? this.props.params.model : this.props.model,
			loading : true,
			rowMenuItems : [
				{ label : 'Edit',  onClick : this.handleMenuItemEditClick.bind(this) },
				{ label : 'Delete',  onClick : this.handleMenuItemDeleteClick.bind(this) }
			]
		}
	}

	getData(){
		const url = this.props.filterAccount ? `/api/${this.state.model}/account` : `/api/${this.state.model}`;
		return Promise.all([
			AmpedService.get(url),
			AmpedService.get(`/api/${this.state.model}/tableHeaders`)
		])
	}

	getCellComponent(){

	}

	handleMenuItemEditClick(row){
		this.props.router.push(`/crud/edit/${this.state.model}/${row.id}`);
	}

	handleMenuItemDeleteClick(){

	}
	
	render(){
		return (
			<AmpedTransitionPage name={`amp-crud-${this.state.model}-page`}>
				<TableComponent {...this.state} getData={this.getData.bind(this)}></TableComponent>
			</AmpedTransitionPage>
		)
	}
	
}


export default connect(mapStateToProps, null, null, {withRef:true})(Table)
