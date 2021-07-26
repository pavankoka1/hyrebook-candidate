import React from 'react'
import ReactLoader from 'react-loader-spinner'
import './Loader.scss'

const Loader = () => {
	return (
		<div className="d-flex h-100p vw-100 justify-content-center align-items-center">
			<ReactLoader
				type="TailSpin"
				color="#031116"
				secondaryColor="#f00"
				height={40}
				width={40}
			/>
		</div>
	)
	// return (
	// 	<div className="spinnerContainer d-flex justify-content-center align-items-center h-100">
	// 		<div className="spinner-border text-primary" role="status">
	// 			<span className="sr-only">Loading...</span>
	// 		</div>
	// 	</div>
	// )
}

export default Loader
