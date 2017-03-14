import React from 'react';
import { AmpedTable } from 'amped/Table';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';

import { SHOW_SNACK_BAR, HIDE_SNACK_BAR } from 'amped/Alerts/actions';

export const Table = ( props ) => {

	return (
		<Card>
			<CardHeader
				title="Crud Table"
			/>
			<CardText>
				<AmpedTable model={props.params.model} />
			</CardText>
		</Card>
	);
}

export default Table;