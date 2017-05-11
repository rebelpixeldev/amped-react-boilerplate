import React from 'react';
import { connect } from 'react-redux'
import { default as FormComponent } from '../components/Form';
import { Input, HiddenInput, Select, Json, Image } from 'amped/Form';
import { CrudService } from 'amped/Crud';

import { AmpedService } from 'amped/Core';
import { SET_VALUES, REMOVE_VALUES, UPDATE_FIELD } from '../actions';

import {GridList, GridTile} from 'material-ui/GridList';

import '../styles/_form.scss';


const mapStateToProps = (state) => ({
	user : true,
	settings : state.settings,
	formValues : state.amped.form.values
});

export class Form extends React.Component{

	static propType = {
		name            : React.PropTypes.string.isRequired,
		onSubmit        : React.PropTypes.func,
		onRequestStart  : React.PropTypes.func,
		onSubmitSuccess : React.PropTypes.func,
		onSubmitError   : React.PropTypes.func
	};

	static defaultProps = {
		onSubmit        : () => {},
		onRequestStart  : () => {},
		onSubmitSuccess : () => {},
		onSubmitError   : () => {}
	}

	static get foo(){return 'bar'}

	constructor(props){
		super(props);
		this.props = props;
		this.foo = 'bar';

		this.submit = this.onSubmit.bind(this);

		this.state = {
			formValues : null
		}

		this.service = new CrudService(this.props.model);
	}

	componentWillReceiveProps(nextProps){
		if ( typeof this.props.formValues[this.props.name] === 'undefined' &&
			typeof nextProps.data.fields !== 'undefined' && nextProps.data.fields.length > 0 ) {

			this.props = nextProps;
			this.setFormValues();
		}
	}

	setFormValues(){
		this.props.dispatch({
			type : SET_VALUES,
			fields : this.props.data.fields,
			name : this.props.name
		})
		// this.setState({
		// 	formValues : this.props.data.fields.reduce((values, row) => {
		// 		row.forEach((col) => {
		// 			values[col.name] = typeof col.value === 'undefined' ? '' : col.value;
		// 		});
		// 		return values;
		// 	}, {})
		// })
	}

	getFormContent(){
		return this.buildForm();//typeof this.props.children === 'undefined' ? this.buildForm() : this.props.children;
	}

	buildForm(){
		if ( typeof this.props.data === 'undefined' )
			return '';
		return (
			<div style={{paddingLeft:this.formPadding, paddingRight:this.formPadding}}>
				{this.props.data.fields.map(( row, i ) => {

					const cellHeight = this.getRowHeight(row);
					const cols = row === 'json_text' ? 2 : row.length;
					return (
						<GridList key={i} cols={cols} cellHeight={cellHeight} style={{marginLeft:-16, marginRight:-16}}>
							{row.map((field, i ) => {
								const Comp = this.componentMap[field.type].component;
								return (
								<GridTile key={i}>
									<Comp {...field}
											formValues={this.props.formValues[this.props.name]}
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

	getRowHeight(row){
		return Math.max.apply(row.map( field => field.height));
	}

	onFieldChange(name, value){
		this.props.dispatch({
			type : UPDATE_FIELD,
			formName : this.props.name,
			fieldName : name,
			value
		})
	}

	onSubmit(){

		console.log(this);

		const pValues = this.props.formValues[this.props.name] || {};

		const vals = Object.keys(pValues).reduce((ret, key) => {
			if (typeof pValues[key] === 'object') {
				Object.keys(pValues[key]).forEach((jKey) => {
					ret[`${key}.${jKey}`] = pValues[key][jKey];
				})
			} else
				ret[key] = pValues[key];

			return ret;

		}, {});

		this.props.onRequestStart(vals);

		console.log('SUBMIttinG', this.props);

		AmpedService[this.props.data.method.toLowerCase()](this.props.data.action, vals)
			.then((resp) => {
				this.props.onSubmit(resp);
				if ( resp.success )
					this.props.onSubmitSuccess(resp);
				else
					this.props.onSubmitError(resp);
			}).catch(( err ) => {
			console.log('CAAAT');
			console.log(this.props.onSubmit);
				this.props.onSubmit(err);
				this.props.onSubmitError(err);
			});
	}

	render(){
		const content = this.getFormContent();
		return (
			<FormComponent {...this.props} content={content} onSubmit={this.onSubmit.bind(this)}>
				{this.props.children}
			</FormComponent>
		)
	}

	get componentMap(){
		return {
			text: {
				component: Input,
				height:75
			},
			password : {
				component : Input,
				height:75
			},
			hidden : {
				component : HiddenInput,
				height:0
			},
			select : {
				component : Select,
				height:75
			},
			json_text : {
				component : Json,
				height:75 // @TODO figure out how to set this dynamically from the Json component
			},
			image : {
				component : Image,
				height: 150
			}
		}
	}

	get formPadding(){
		return 15;
	}

	get cellHeight(){
		return 75;
	}
}



export default connect(mapStateToProps, null, null, {withRef:true})(Form);
