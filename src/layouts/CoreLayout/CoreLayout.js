import React from 'react'
import {Topbar, Sidebar} from 'amped/Layout'
import { AmpedGlobal } from 'amped/Core';
import './CoreLayout.scss'
import '../../styles/core.scss'

export const CoreLayout = ({children}) => (
	<div className='amped-container'>
		<Topbar />
		<div className="amped-content-container">
			<Sidebar />
			<div className='amped-content'>
				{children}
			</div>
		</div>
		<AmpedGlobal />
	</div>
)

CoreLayout.propTypes = {
	children: React.PropTypes.element.isRequired
}

export default CoreLayout
