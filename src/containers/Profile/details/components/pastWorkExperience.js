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
				className="w-100p p-40 h-280 d-flex flex-column justify-content-between"
				style={{
					boxShadow: '6.5886px 6.5886px 43.924px rgba(0, 0, 0, 0.15)',
				}}
			>
				<div className="d-flex justify-content-between mb-40">
					<Input
						placeholder="Current Designation"
						className="mt-26 w-360"
						value={state.name}
						onChange={({ value }) =>
							setState({ ...state, name: value })
						}
					/>
					<Input
						placeholder="Current Salary"
						className="mt-26 w-360"
						value={state.phone}
						onChange={({ value }) =>
							setState({ ...state, phone: value })
						}
					/>
					<DatePicker
						placeholder="Years"
						className="w-260"
						value={state.dob}
						onChange={(value) => setState({ ...state, dob: value })}
					/>
				</div>
				<Input
					placeholder="Role / Projects -"
					className="w-100p"
					value={state.name}
					onChange={({ value }) =>
						setState({ ...state, name: value })
					}
				/>
			</div>
		</div>
	)
}

export default EmploymentDetails
