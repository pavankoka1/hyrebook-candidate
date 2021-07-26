import React, { useState } from 'react'
import Input from 'utils/input'
import DatePicker from 'utils/datePicker'

function EmploymentDetails() {
	const [state, setState] = useState({
		dob: new Date(),
	})

	return (
		<div className="pt-40">
			<div
				className="h-260 w-100p p-40 d-flex justify-content-between align-items-stretch"
				style={{
					boxShadow: '6.5886px 6.5886px 43.924px rgba(0, 0, 0, 0.15)',
				}}
			>
				<div className="d-flex flex-column justify-content-between">
					<Input
						placeholder="Current Designation"
						className="mt-26 w-400"
						value={state.name}
						onChange={({ value }) =>
							setState({ ...state, name: value })
						}
					/>
					<Input
						placeholder="Current Salary"
						className="w-400"
						value={state.phone}
						onChange={({ value }) =>
							setState({ ...state, phone: value })
						}
					/>
				</div>
				<div className="d-flex flex-column justify-content-between">
					<Input
						placeholder="Current Organization"
						className="mt-26 w-400"
						value={state.email}
						onChange={({ value }) =>
							setState({ ...state, email: value })
						}
					/>
					<Input
						placeholder="Total Year OF Experience"
						className="w-400"
						value={state.location}
						onChange={({ value }) =>
							setState({ ...state, location: value })
						}
					/>
				</div>
				<div>
					<DatePicker
						placeholder="Years"
						value={state.dob}
						onChange={(value) => setState({ ...state, dob: value })}
					/>
				</div>
			</div>
		</div>
	)
}

export default EmploymentDetails
