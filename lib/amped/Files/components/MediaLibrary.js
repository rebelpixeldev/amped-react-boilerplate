import React from 'react';

import { AmpedUploadButton } from 'amped/Files';
import { AmpedLoader } from 'amped/Common';

export const MediaLibrary = ( props ) => {
	return (
		<div className="amp-media-library">
			<div className="amp-media-library--header">
				<AmpedUploadButton />
			</div>
			<div className="amp-media-library--files">
				{props.files.map(( file, i ) => {
					console.log(file);
					return (
						<MediaLibraryItem key={i} className="amp-media-library--files" {...file}  />
					)
				})}
			</div>
			<AmpedLoader loading={props.files.length === 0 || props.loading} />
		</div>
	);
}


export const MediaLibraryItem = ( props ) => {
	return (
		<div className="amp-media-library-item">
			<img src={props.thumb_url} alt=""/>
		</div>
	);
}

export default MediaLibrary;