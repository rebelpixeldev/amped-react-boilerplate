import React from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import CircularProgress from 'material-ui/CircularProgress';

import { purple50 } from 'material-ui/styles/colors';

export class UploadButton extends React.Component{
	static propTypes = {
		uploading : React.PropTypes.bool,
		onChange : React.PropTypes.func
	}

	static defaultProps = {
		uploading : false,
		onChange : ()=>{}
	}

	render(){

		const progressStyle = {
			position : 'absolute',
			top: 7,
			right : 10,
		};

		if ( !this.props.uploading )
			progressStyle.display = 'none';

		return (
			<div className="amp-upload-btn ">
				<label>
					<RaisedButton primary={true}>
						Upload <CircularProgress color={purple50} size={23} thickness={2} style={progressStyle} />
					</RaisedButton>
					<input ref="fileUpload"
					       className="amp-upload-btn--input "
					       type="file"
					       onChange={() => this.props.onChange(this.refs.fileUpload) }
					/>
				</label>
			</div>
		);
	}

}

export default UploadButton;