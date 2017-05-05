import React from 'react';

import { Button } from 'amped/Form';

export const Form = ( {action, content, style, className, submitLabel, onSubmit} ) => (
	<form action={action} style={style} className={`amped-form ${className}`} onSubmit={onSubmit}>

		{ content.props.children.length > 0 &&
			(
				<div className="amped-form-container">
					<div className="amped-form--content">
						{content}
					</div>
					<Button className="amped-form--submit" label={submitLabel} onClick={onSubmit} />
				</div>
			)
		}
	</form>
);

Form.propTypes = {
	style : React.PropTypes.object,
	className : React.PropTypes.string,
	submitLabel : React.PropTypes.string
};

Form.defaultProps = {
	style : {},
	className : '',
	submitLabel : 'Submit'
}

export default Form;