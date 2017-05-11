import React from 'react';
import TextField from 'material-ui/TextField';

import { UPDATE_FIELD } from '../actions';

export const Input = ( {type = 'text', label, name, value, formValues, onFieldChange} ) => {

	const style = {
		width : '100%',
		marginTop : 0
	};

	return (
		<TextField
			defaultValue={typeof formValues === 'undefined'? '' : formValues[name]}
			style={style}
			name={name}
			onChange={(evt, newVal) => onFieldChange(name, newVal)}
			floatingLabelText={label} />
	);
}

export const HiddenInput = ( {name, value } ) => (
	<input type="hidden" name={name} value={value} />
)