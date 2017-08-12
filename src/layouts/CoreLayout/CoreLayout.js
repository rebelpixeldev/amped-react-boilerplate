import React from 'react'
import {Topbar, Sidebar} from 'amped-react-core/Layout'
import { AmpedApp } from 'amped-react-core/Core';
import PropTypes from 'prop-types';

import './CoreLayout.scss'
import '../../styles/core.scss'

export const CoreLayout = ({children}) => (
	<AmpedApp>
		{children}
	</AmpedApp>
)

CoreLayout.propTypes = {
	children: PropTypes.element.isRequired
}

export default CoreLayout
