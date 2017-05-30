import React from 'react';

import {AmpedUploadButton, AmpedMediaLibraryModalTrigger} from 'amped/Files';

export const Image = ({type = 'text', label, name, value, onFieldChange}) => {
	return (
		<div className="image-form-element">
			<label htmlFor="" className="image-form-element--label">{label}</label>
			<div className="image-form-element--outer">

				<img className="image-form-element--preview" src={value.thumb_url} alt="" style={{height: 100}}/>
				<span className="image-form-element--content">
					<span className="image-form-element--title">
						{value.title}
					</span>
					<span className="image-form-element--upload">
						<AmpedMediaLibraryModalTrigger onFileSelect={onFieldChange.bind(this, name)} />
					</span>
				</span>
			</div>
		</div>
	);
}

export default Image;