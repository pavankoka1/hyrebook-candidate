import React from 'react'

function Circle({ imgSrc, styles, text }) {
	return (
		<div style={styles} className="p-absolute w-250">
			<div
				className={`w-250 h-250 bg-white d-flex justify-content-center align-items-center mb-30`}
				style={{
					left: '11.6%',
					borderRadius: '50%',
					boxShadow:
						'6.58859px 6.58859px 43.9239px rgba(0, 0, 0, 0.15)',
				}}
			>
				<img
					src={require(`assets/images/our-services/one-page-cv/${imgSrc}.svg`)}
					alt={imgSrc}
				/>
			</div>
			<p className="mont-20 w-fit text-align-center">{text}</p>
		</div>
	)
}

function Fold2() {
	return (
		<div className="h-750 vw-100 d-flex align-items-center p-relative">
			<img
				className="p-absolute b-12"
				style={{ zIndex: -1 }}
				src={require('assets/images/our-services/one-page-cv/illustration-left.svg')}
				alt="dotted curve"
			/>
			<Circle
				imgSrc="profiles-resumes"
				styles={{
					left: '10%',
					top: '48%',
					transform: 'translateY(-50%)',
				}}
				text="Choose Sample Which You Like"
			/>
			<Circle
				imgSrc="tools"
				styles={{
					left: '54%',
					top: '64%',
					transform: 'translate(-50%, -50%)',
				}}
				text="Choose Sample Which You Like"
			/>
			<Circle
				imgSrc="todos-list"
				styles={{
					right: '6%',
					top: '48%',
					transform: 'translateY(-50%)',
				}}
				text="Choose Sample Which You Like"
			/>
			<img
				className="w-100p"
				src={require('assets/images/our-services/one-page-cv/dotted-curve.svg')}
				alt="dotted curve"
			/>
		</div>
	)
}

export default Fold2
