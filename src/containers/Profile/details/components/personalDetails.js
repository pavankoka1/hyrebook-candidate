import React, { useState } from 'react'
import store from 'store'
import Button from 'utils/button'
import Input from 'utils/input'
import Dropdown from 'utils/dropdown'
import DatePicker from 'utils/datePicker'

import { goBack } from 'store/profile/actions'

const differentlyAbledOptions = [
	{
		key: 'differently_abled_yes',
		value: 'Yes',
	},
	{
		key: 'differently_abled_no',
		value: 'No',
	},
]

const veteranOptions = [
	{
		key: 'veteran_yes',
		value: 'Yes',
	},
	{
		key: 'veteran_no',
		value: 'No',
	},
]

const genderOptions = [
	{
		key: 'gender_male',
		value: 'Male',
	},
	{
		key: 'gender_female',
		value: 'Female',
	},
	{
		key: 'gender_other',
		value: 'Other',
	},
]

const maritalStatusOptions = [
	{
		key: 'marital_status_single',
		value: 'Single',
	},
	{
		key: 'marital_status_married',
		value: 'Married',
	},
]

const onBreakOptions = [
	{
		key: 'on_break_1_month',
		value: '1 month',
	},
	{
		key: 'on_break_2_months',
		value: '2 months',
	},
	{
		key: 'on_break_3_months',
		value: '3 months',
	},
	{
		key: 'on_break_4_months',
		value: '4 months',
	},
	{
		key: 'on_break_5_months',
		value: '5 months',
	},
	{
		key: 'on_break_6_months',
		value: '6 months',
	},
	{
		key: 'on_break_8_months',
		value: '8 months',
	},
	{
		key: 'on_break_1_year',
		value: '1 year',
	},
	{
		key: 'on_break_more_than_1_year',
		value: '>1 year',
	},
]

function PersonalDetails() {
	const [state, setState] = useState({
		dob: new Date(),
		differentlyAbled: differentlyAbledOptions[0].value,
		veteran: veteranOptions[0].value,
		gender: genderOptions[0].value,
		maritalStatus: maritalStatusOptions[0].value,
		onBreak: onBreakOptions[0].value,
	})

	function handleClick() {
		store.dispatch(goBack())
	}

	return (
		<div className="pt-40">
			<div
				className="w-100p p-40 d-flex justify-content-between"
				style={{
					boxShadow: '6.5886px 6.5886px 43.924px rgba(0, 0, 0, 0.15)',
				}}
			>
				<div>
					<Input
						placeholder="Name"
						className="mt-26 mb-50 w-400"
						value={state.name}
						onChange={({ value }) =>
							setState({ ...state, name: value })
						}
					/>
					<Input
						placeholder="Phone No"
						className="mt-26 mb-50 w-400"
						value={state.phone}
						onChange={({ value }) =>
							setState({ ...state, phone: value })
						}
					/>
					<Input
						placeholder="Languages"
						className="mt-26 mb-50 w-400"
						value={state.language}
						onChange={({ value }) =>
							setState({ ...state, language: value })
						}
					/>
					<Dropdown
						placeholder="Differently Abled"
						options={differentlyAbledOptions}
						value={state.differentlyAbled}
						className="mb-50"
						onChange={(val) =>
							setState({ ...state, differentlyAbled: val })
						}
					/>
				</div>
				<div>
					<DatePicker
						className="mb-50"
						placeholder="DOB"
						value={state.dob}
						onChange={(value) => setState({ ...state, dob: value })}
					/>
					<Input
						placeholder="Email ID"
						className="mt-26 mb-50 w-400"
						value={state.email}
						onChange={({ value }) =>
							setState({ ...state, email: value })
						}
					/>
					<Input
						placeholder="Current Location"
						className="mt-26 mb-50 w-400"
						value={state.location}
						onChange={({ value }) =>
							setState({ ...state, location: value })
						}
					/>
					<Dropdown
						placeholder="Veteran"
						options={veteranOptions}
						value={state.veteran}
						onChange={(val) => setState({ ...state, veteran: val })}
					/>
				</div>
				<div>
					<Dropdown
						className="mb-24 w-150"
						placeholder="Gender"
						options={genderOptions}
						value={state.gender}
						onChange={(val) => setState({ ...state, gender: val })}
					/>
					<Dropdown
						className="mb-50 w-200"
						placeholder="Marital Status"
						options={maritalStatusOptions}
						value={state.maritalStatus}
						onChange={(val) =>
							setState({ ...state, maritalStatus: val })
						}
					/>
					<Input
						placeholder="Preferred Location"
						className="mt-26 mb-50 w-240"
						value={state.plocation}
						onChange={({ value }) =>
							setState({ ...state, plocation: value })
						}
					/>
					<Dropdown
						placeholder="On Break"
						options={onBreakOptions}
						value={state.onBreak}
						onChange={(val) => setState({ ...state, onBreak: val })}
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

export default PersonalDetails
