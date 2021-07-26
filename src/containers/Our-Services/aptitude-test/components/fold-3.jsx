import React from 'react'
import Input from 'utils/input'
import Button from 'utils/button'

const placeholderStyles = {
	color: '#999999',
	weight: 300,
}

function Form3() {
	return (
		<div className="h-600 d-flex justify-content-between w-1320 mx-auto my-0">
			<div>
				<p className="mont-40 mt-80 mb-20">Contact US</p>
				<p className="neu-24 w-600">
					Justo quisque faucibus donec aliquet a vulputate. Quam diam
					placerat diam, id morbi nulla. Massa urna nibh eleifend
					vitae proin lacinia. Non fermentum sed lorem sed mattis.
					Odio dolor libero vitae, eget donec. Vehicula purus, ut
					adipiscing at egestas nam.
				</p>
			</div>
			<div
				className="w-475 h-fit px-40 pt-80 pb-24 bg-white"
				style={{
					boxShadow:
						'6.58859px 6.58859px 43.9239px rgba(0, 0, 0, 0.15)',
					borderRadius: '10px',
				}}
			>
				<Input
					className="w-400 mb-48"
					placeholder="Name"
					styles={{
						border: '0.5px solid #000000',
						borderRadius: '5px',
					}}
					placeholderStyles={placeholderStyles}
				/>
				<Input
					className="w-400 mb-48"
					placeholder="Email Id"
					styles={{
						border: '0.5px solid #000000',
						borderRadius: '5px',
					}}
					placeholderStyles={placeholderStyles}
				/>
				<Input
					className="w-400 mb-40"
					placeholder="Phone No"
					styles={{
						border: '0.5px solid #000000',
						borderRadius: '5px',
					}}
					placeholderStyles={placeholderStyles}
				/>
				<Button
					className="b-none w-400 h-48 mont-16"
					label="REQUEST CALL BACK"
					styles={{ backgroundColor: '#F89C1C', color: '#000' }}
				/>
			</div>
			<img
				className="p-absolute b-0 r-0"
				style={{ zIndex: -1 }}
				src={require(`assets/images/our-services/one-page-cv/illustration-right.svg`)}
				alt="illustration"
			/>
		</div>
	)
}

export default Form3
