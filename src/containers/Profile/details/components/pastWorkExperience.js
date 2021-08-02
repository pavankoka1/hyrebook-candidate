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
