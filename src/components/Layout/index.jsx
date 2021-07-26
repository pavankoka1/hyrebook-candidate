import React from 'react'
import NavBar from 'components/Navbar'

function Layout({ children }) {
	return (
		<div className="vh-100 vw-100 d-flex flex-column">
			<NavBar />
			<div className="flex-grow-1 p-relative vw-100">{children}</div>
		</div>
	)
}

export default Layout
