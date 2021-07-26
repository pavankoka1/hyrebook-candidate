import React from 'react'
import Button from 'utils/button'

function Header() {
	return (
		<div className="d-flex align-items-center justify-content-between mt-20 mx-auto mb-15 w-1320">
			<img src={require('assets/logos/hyrebook.svg')} alt="logo" />

			<Button
				label="Login As Recruiter"
				onClick={() =>
					window.location.replace('https://www.hyrebook.com/')
				}
			/>
		</div>
	)
}

export default Header
