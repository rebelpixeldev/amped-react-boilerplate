import React from 'react';

import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import { Form } from 'amped/Form/elements';



export const Table = ( props ) => {
	const dummyForm = {
		method : 'POST',
		action : '/stuff/n/things',
		fields : [
			[
				{ type : 'text', name : 'first_name', label : 'First Name', value : 'Ted' },
				{ type : 'text', name : 'last_name', label : 'Last Name' }
			],
			[
				{ type : 'select', name : 'province', label : 'Province', value : 'ON', options : [
					{ label : 'Ontario', value : 'ON' },
					{ label : 'British Columbia', value : 'BC'}
				]}
			]
		]
	};
	return (
		<Card>
			<CardHeader
				title="Crud Form"
			/>
			<Form data={dummyForm} />
		</Card>
	);
}

export default Table;