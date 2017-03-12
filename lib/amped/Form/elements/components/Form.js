import React from 'react';

import { Button } from 'amped/Form/elements';

export const Form = ( {action, content, style, submitLabel = 'Submit', onSubmit} ) => (
	<form action={action} style={style}>
		{content}
		<Button label={submitLabel} onClick={onSubmit} />
	</form>
);

Form.propTypes = {
	style : React.PropTypes.object
};

Form.defaultProps = {
	style : {}
}

export default Form;