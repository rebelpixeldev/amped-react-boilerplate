import React from 'react';

import { Form } from 'amped-react-core/Form';
import { AmpedService } from 'amped-react-core/Core';
import { AmpedCard } from 'amped-react-core/Common';
import { LineChart } from 'amped-react-core/Charts';

export const Dashboard = ( { formData } ) => (
	<div className="amped-boilerplate-app">
		<AmpedCard title="Recent Activity">
			<LineChart model="activity" dataKey={['created_at']} />
		</AmpedCard>
		<AmpedCard title="Form Components Examples">
			<Form name="formcomponents" data={formData}   />
		</AmpedCard>
	</div>
);

export default Dashboard;