import React from 'react';

import { default as MaterialAvatar } from 'material-ui/Avatar';

export const Avatar = ( {user} ) => {
	console.log('USERRR', user);
	return (
		<span>
			{ typeof user.id !== 'undefined' && (
				<span className="amped-avatar">
					<MaterialAvatar src={user.upload.thumb_url} style={{'marginRight':12}}></MaterialAvatar> {user.display_name}
				</span>
			)}
		</span>
	);
}

export default Avatar;