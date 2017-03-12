import React from 'react'

export const PlainLayout = ({children}) => (
	<div className='amped-container'>
		<div className="amped-content-container">
			<div className='amped-content'>
				{children}
			</div>
		</div>
	</div>
)

PlainLayout.propTypes = {
	children: React.PropTypes.element.isRequired
}

export default PlainLayout
