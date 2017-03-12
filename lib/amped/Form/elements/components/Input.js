import React from 'react';
import TextField from 'material-ui/TextField';

export const Input = ( {type = 'text', label, name, value, onFieldChange} ) => {

	const style = {
		width : '100%',
		marginTop : 0
	};

	return (
		<TextField
			value={value}
			style={style}
			name={name}
			onChange={(evt, newVal) => onFieldChange(name, newVal)}
			floatingLabelText={label} />
	);
}

export const HiddenInput = ( {name, value } ) => (
	<input type="hidden" name={name} value={value} />
)