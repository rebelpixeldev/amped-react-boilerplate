import React from 'react'
import {Topbar, Sidebar} from 'amped/Layout'
import { AmpedApp } from 'amped/Core';
import './CoreLayout.scss'
import '../../styles/core.scss'

export const CoreLayout = ({children}) => (
	<AmpedApp>
		{children}
	</AmpedApp>
)

CoreLayout.propTypes = {
	children: React.PropTypes.element.isRequired
}

export default CoreLayout
