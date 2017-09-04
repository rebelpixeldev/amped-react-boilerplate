import React from 'react'
import {Topbar, Sidebar} from 'amped-react-core/Layout'
import { AmpedApp } from 'amped-react-core/Core';
import PropTypes from 'prop-types';

export const CoreLayout = ({children}) => {

	const App = AmpedApp();

	return (
		<App>
			{children}
		</App>
	)
}

CoreLayout.propTypes = {
	children: PropTypes.element.isRequired
}

export default CoreLayout
