import React from 'react';

import { SnackBar, Confirm } from 'amped/Alerts';

export const AmpedGlobal = ( props ) => {
    return (
    	<div>
			<SnackBar />
		    <Confirm />
	    </div>
    );
};