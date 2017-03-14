import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

import { HIDE_CONFIRM } from '../actions';

export const Confirm = ( {data, dispatch, acceptLabel, cancelLabel, onAccept, onCancel} ) => {

	const onAcceptTap = () => {
	    dispatch({type : HIDE_CONFIRM });
		onAccept();
	};

	const onCancelTap = () => {
		dispatch({type : HIDE_CONFIRM });
		onCancel();
	};


	const actions = [
		<FlatButton
			label={cancelLabel}
			primary={true}
			onTouchTap={onCancelTap}
		/>,
		<FlatButton
			label={acceptLabel}
			primary={true}
			disabled={true}
			onTouchTap={onAcceptTap}
		/>,
	];

	return (
			<Dialog
				title="Dialog With Actions"
				actions={actions}
				modal={true}
				open={data !== false} >
				{data.message}
			</Dialog>
	);
};

/**
 * A yes or no question in a dialog. Good for the 'Are you sure?' type actions
 *
 * message {string} - The message that show appear in the confirm dialog
 * acceptLabel { string } - The label that should appear on the accept button
 * cancelLabel { string } - The label that should appear on the cancel button
 * onAccept { function } - A callback function for when the user hits 'accept'
 * onCancel { function } - A callback function for when the user hits 'cancel'
 */

Confirm.propTypes = {
	message : React.PropTypes.string,
	acceptLabel : React.PropTypes.string,
	cancelLabel : React.PropTypes.string,
	onAccept : React.PropTypes.func,
	onCancel : React.PropTypes.func
};

Confirm.defaultProps = {
	acceptLabel : 'Yes',
	cancelLabel : 'Cancel',
	onAccept : () => {},
	onCancel : () => {}
}

export default Confirm;