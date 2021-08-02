import React, { useState, useEffect } from 'react'

const stepsDetails = [
	'Resume',
	'Personal Details',
	'Employement Details',
	'Past work Experience',
	'Educational Details',
	'Additional Details',
]

function Dot({ isActive, delay, step }) {
	const [showDot, setShowDot] = useState(false)

	useEffect(() => {
		setTimeout(() => {
			setShowDot(true)
		}, delay)
	}, [])

	return (
		<div className="p-relative">
			<p
				className={`h-26 w-26 br-50p mb-10`}
				style={{
					background: showDot & isActive ? '#0c3a4d' : '#999999',
					// transition: 'background 200ms ease-in',
				}}
			/>
			<p
				className={`ml-13 w-120 mont-16 ${
					!isActive ? 't-999999' : ''
				} text-align-center p-absolute t-36 l-0`}
				style={{
					maxWidth: '120px',
					transform: 'translateX(-50%)',
				}}
			>
				{step}
			</p>
		</div>
	)
}

function ProgressBar({ step }) {
	const [width, setWidth] = useState(0)

	useEffect(() => {
		setTimeout(() => {
			setWidth(75 + 234 * (step - 1))
		}, 0)
	}, [step])

	return (
		<div className="h-76 p-relative">
			<div className="h-26 d-flex align-items-center">
				<div
					className="w-1320 h-5 bg-999999 p-relative"
					style={{ borderRadius: '5px' }}
				>
					<div
						className={`h-5 bg-0c3a4d p-absolute l-0`}
						style={{
							width,
							borderRadius: '5px',
							transition: `width ${
								400 + 330 * (step - 1)
							}ms ease-in`,
						}}
					/>
				</div>
			</div>
			<div className="d-flex justify-content-between p-absolute l-0 t-0 h-26 l-75 w-1170">
				{stepsDetails.map((name, id) => (
					<Dot
						delay={500 + 330 * id}
						key={`progeress-dot-${name}`}
						isActive={id + 1 <= step}
						step={name}
					/>
				))}
			</div>
		</div>
	)
}

export default ProgressBar
