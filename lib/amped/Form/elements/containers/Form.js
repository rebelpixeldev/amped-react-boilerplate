import React from 'react';
import { connect } from 'react-redux'
import { Form } from '../components/Form';
import { Input, HiddenInput, Select } from 'amped/Form/elements'

import {GridList, GridTile} from 'material-ui/GridList';

const mapDispatchToProps = {

};

const mapStateToProps = (state) => ({
	user : true,
	settings : state.settings,

});

class FormContainer extends React.Component{

	constructor(props){
		super(props);
		this.props = props;
		this.state = {
			formValues : this.props.data.fields.reduce((values, row) => {
			    row.forEach((col) => {
			        values[col.name] = typeof col.value === 'undefined' ? '' : col.value;
			    });
			    return values;
			}, {})
		}
	}

	getFormContent(){
		return typeof this.props.children === 'undefined' ? this.buildForm() : this.props.children;
	}

	buildForm(){
		if ( typeof this.props.data === 'undefined' )
			return '';
		return (
			<div style={{paddingLeft:this.formPadding, paddingRight:this.formPadding}}>
				{this.props.data.fields.map(( row, i ) => {
					return (
						<GridList key={i} cols={row.length} padding={this.formPadding} cellHeight={this.cellHeight} style={{marginLeft:-16, marginRight:-16}}>
							{row.map((field, i ) => {
								const Comp = this.componentMap[field.type];
								return (
								<GridTile key={i}>
									<Comp {...field}
									      value={this.state.formValues[field.name]}
										  onFieldChange={this.onFieldChange.bind(this)} />
								</GridTile>
								)
							})}
						</GridList>
					)
				})}
			</div>
		)

	}

	onFieldChange(name, value){
		this.setState({
			formValues : Object.assign({}, this.state.formValues, {[name] : value})
		})
	}

	onSubmit(){
		console.log('Form Data', this.state.formValues);
	}

	render(){
		const content = this.getFormContent();
		return (
			<Form {...this.props} content={content} onSubmit={this.onSubmit.bind(this)}  />
		)
	}

	get componentMap(){
		return {
			text: Input,
			password : Input,
			hidden : HiddenInput,
			select : Select
		}
	}

	get formPadding(){
		return 16;
	}

	get cellHeight(){
		return 75;
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(FormContainer);
