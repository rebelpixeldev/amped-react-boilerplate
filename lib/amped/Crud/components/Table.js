import React from 'react';
import { AmpedTable } from 'amped/Table';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';

export const Table = ( props ) => (
	<Card>
		<CardHeader
			title="Crud Table"
		/>
		<CardText>
			<AmpedTable />
		</CardText>
	</Card>
);

export default Table;