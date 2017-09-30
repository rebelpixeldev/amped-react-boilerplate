import React from 'react'
import {Topbar, Sidebar} from 'amped-react-core/Layout'
import PropTypes from 'prop-types';

export const CoreLayout = ({children}) => {

	return (
		<div>
			{children}
		</div>
	)
}

CoreLayout.propTypes = {
	children: PropTypes.element.isRequired
}

export default CoreLayout
