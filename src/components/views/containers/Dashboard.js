import React from 'react';
import { connect } from 'react-redux';
import { default as DashboardComponent } from '../components/Dashboard';

export class Dashboard extends React.Component{

	state = {
		formData : {
			action: '',
			method : 'POST',
			fields: [
				[
					{ type: 'text', label: 'Text', name: 'email', value : 'example@website.com', icon: 'account_circle' },
					{ type: 'password', label: 'Password', name: 'password', icon: 'lock' }
				],
				[
					{ type: 'switch', label: 'Switch', name: 'switch', icon: 'lock' },
					{ type: 'date', label: 'Datepicker', name: 'datepicker', icon: 'lock' },
					{ type: 'dropdown', label: 'Dropdown', name: 'dropdown',
						options : [
							{value:'option1', label:'Option 1'},
							{value:'option2', label:'Option 2'},
							{value:'option3', label:'Option 3'},
							{value:'option4', label:'Option 4'}
						]
					},

				],
				[
					{ type: 'checkbox', label: 'Checkboxes', name: 'checkbox',
						options : [
							{value:'option1', label:'Option 1'},
							{value:'option2', label:'Option 2'},
							{value:'option3', label:'Option 3'},
							{value:'option4', label:'Option 4'}
						]
					},
					{ type: 'radio', label: 'Radio Buttons', name: 'radiobutton',
						options : [
							{value:'radio1', label:'Radio 1'},
							{value:'radio2', label:'Radio 2'},
							{value:'radio3', label:'Radio 3'},
							{value:'radio4', label:'Radio 4'}
						]
					}
				],
				[
					{ type: 'textarea', label: 'Textarea', name: 'textarea', icon: 'lock' }
				]
			]
		}
	};

	render(){
		return (
			<DashboardComponent formData={this.state.formData} />
		)
	}

}

export default Dashboard;

