import React from 'react';
import { AmpedTable } from 'amped/Table';
import { AmpedCard } from 'amped/Common';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';

import { SHOW_SNACK_BAR, HIDE_SNACK_BAR } from 'amped/Alerts/actions';

export const Table = ( props ) => {

	return (
	<AmpedCard title='Crud Title'>
		<AmpedTable {...props} menuItems={props.rowMenuItems}  />
	</AmpedCard>
	);
}

export default Table;