import React from 'react'
import DuckImage from '../assets/Duck.jpg'

import { Form } from 'amped/Form';
import { AmpedService } from 'amped/Core';
import { AmpedCard } from 'amped/Common';
import { LineChart } from 'amped/Charts';

import './HomeView.scss'


export class HomeView extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			// recentData : {
			// 	labels: ["January", "February", "March", "April", "May", "June", "July"],
			// 	datasets: [
			// 		{
			// 			label: "My First dataset",
			// 			fillColor: "rgba(220,220,220,0.2)",
			// 			strokeColor: "rgba(220,220,220,1)",
			// 			pointColor: "rgba(220,220,220,1)",
			// 			pointStrokeColor: "#fff",
			// 			pointHighlightFill: "#fff",
			// 			pointHighlightStroke: "rgba(220,220,220,1)",
			// 			data: [65, 59, 80, 81, 56, 55, 40]
			// 		},
			// 		{
			// 			label: "My Second dataset",
			// 			fillColor: "rgba(151,187,205,0.2)",
			// 			strokeColor: "rgba(151,187,205,1)",
			// 			pointColor: "rgba(151,187,205,1)",
			// 			pointStrokeColor: "#fff",
			// 			pointHighlightFill: "#fff",
			// 			pointHighlightStroke: "rgba(151,187,205,1)",
			// 			data: [28, 48, 40, 19, 86, 27, 90]
			// 		}
			// 	]
			// }
		}
	}


	render(){
		return (
			<div>
				<AmpedCard title="Recent Activity">
					<LineChart model="activity" dataKey={['created_at']} />
				</AmpedCard>
				<AmpedCard title="Form Components">
					<Form name="formcomponents" data={formData}   />
				</AmpedCard>
			</div>
		)
	}

}


const formData = {
	action: '',
	method : 'POST',
	fields: [
		[
			{
				type: 'text',
				label: 'Text',
				name: 'email',
				value : 'example@website.com',
				icon: 'account_circle'
			},
			{
				type: 'password',
				label: 'Password',
				name: 'password',
				icon: 'lock'
			}
		],
		[
			{
				type: 'switch',
				label: 'Switch',
				name: 'switch',
				icon: 'lock'
			},
			{
				type: 'date',
				label: 'Datepicker',
				name: 'datepicker',
				icon: 'lock'
			},
			{
				type: 'dropdown',
				label: 'Dropdown',
				name: 'dropdown',
				options : [
					{value:'option1', label:'Option 1'},
					{value:'option2', label:'Option 2'},
					{value:'option3', label:'Option 3'},
					{value:'option4', label:'Option 4'}
				]
			},

		],
		[
			{
				type: 'checkbox',
				label: 'Checkboxes',
				name: 'checkbox',
				options : [
					{value:'option1', label:'Option 1'},
					{value:'option2', label:'Option 2'},
					{value:'option3', label:'Option 3'},
					{value:'option4', label:'Option 4'}
				]
			},
			{
				type: 'radio',
				label: 'Radio Buttons',
				name: 'radiobutton',
				options : [
					{value:'radio1', label:'Radio 1'},
					{value:'radio2', label:'Radio 2'},
					{value:'radio3', label:'Radio 3'},
					{value:'radio4', label:'Radio 4'}
				]
			}
		],
		[
			{
				type: 'textarea',
				label: 'Textarea',
				name: 'textarea',
				icon: 'lock'
			}
		]
	]
}


export default HomeView
