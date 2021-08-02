import React, { useState } from 'react'
import store from 'store'
import Input from 'utils/input'
import Button from 'utils/button'
import DatePicker from 'utils/datePicker'

import { goBack } from 'store/profile/actions'

function AdditionalDetails() {
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
				<Input
					placeholder="Skills"
					className="p-relative h-fit w-100p"
					value={state.skills}
					onChange={({ value }) =>
						setState({ ...state, skills: value })
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

export default AdditionalDetails
