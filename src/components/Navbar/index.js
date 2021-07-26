import React from 'react'
import Links from './links'

function NavBar() {
	return (
		<div className="h-fit my-25 mx-auto w-1320 d-flex justify-content-between align-items-center">
			<img
				alt="logo"
				height={30}
				src={require('assets/logos/hyrebook.svg')}
			/>
			<Links />
		</div>
	)
}

export default NavBar
