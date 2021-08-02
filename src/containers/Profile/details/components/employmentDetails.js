import React, { useState } from 'react'
import store from 'store'
import Input from 'utils/input'
import Button from 'utils/button'
import DatePicker from 'utils/datePicker'

import { goBack } from 'store/profile/actions'

function EmploymentDetails() {
	const [state, setState] = useState({
		dob: new Date(),
	})

	function handleClick() {
		store.dispatch(goBack())
	}

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
			<div className="d-flex ml-auto w-fit mt-50">
				<Button
					label="BACK"
					className="w-120 h-48 mr-30"
					onClick={handleClick}
				/>
				<Button
					disabled
					label="NEXT"
					className="w-120 h-48 bg-f89c1c t-black b-0"
				/>
			</div>
		</div>
	)
}

export default EmploymentDetails
