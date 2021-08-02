import React, { useState } from 'react'
import store from 'store'
import moment from 'moment'
import cloneDeep from 'lodash/cloneDeep'
import Input from 'utils/input'
import Button from 'utils/button'
import DatePicker from 'utils/datePicker'

import { goBack } from 'store/profile/actions'

function EducationalDetails() {
	const [state, setState] = useState({
		cards: [
			{
				start: new Date(2016, 1, 0, 0, 0, 0, 0),
				end: new Date(2019, 1, 0, 0, 0, 0, 0),
				course: "Bachelor's of engineering in Mechanical",
				institute: 'Marathwada Mitramanda’s Institute of Techonology',
			},
			{
				start: new Date(2013, 1, 0, 0, 0, 0, 0),
				end: new Date(2016, 1, 0, 0, 0, 0, 0),
				course: 'Diploma In Mechanical',
				institute: 'Government Polytechnic Karad',
			},
			{
				start: new Date(2012, 1, 0, 0, 0, 0, 0),
				end: new Date(2013, 1, 0, 0, 0, 0, 0),
				course: 'SSC',
				institute: 'Saraswati Vidyalay Koregaon',
			},
		],
	})

	function getYear({ year, id, yearKey }) {
		return (
			<div
				key={`educational-details-year-${yearKey}-${id}`}
				className="d-flex align-item-center"
			>
				<p className="neu-24 fw-200 mr-12">
					{moment(year).format('YYYY')}
				</p>
				<DatePicker
					view="decade"
					hideContent
					value={year}
					onChange={(value) => handleUpdateDate(id, yearKey, value)}
				/>
			</div>
		)
	}

	function handleUpdateDate(cardNo, yearkey, value) {
		const newCards = cloneDeep(state.cards)
		newCards[cardNo][yearkey] = value
		console.log(yearkey)
		setState({ ...state, cards: newCards })
	}

	function handleClick() {
		store.dispatch(goBack())
	}

	function handleAddClick() {
		const newCards = cloneDeep(state.cards)
		newCards.push({
			start: new Date(2016, 1, 0, 0, 0, 0, 0),
			end: new Date(2019, 1, 0, 0, 0, 0, 0),
			course: "Bachelor's of engineering in Mechanical",
			institute: 'Marathwada Mitramanda’s Institute of Techonology',
		})
		setState({ ...state, cards: newCards })
	}

	return (
		<div className="pt-40">
			<div
				className="w-100p pt-45 px-72 pb-60"
				style={{
					boxShadow: '6.5886px 6.5886px 43.924px rgba(0, 0, 0, 0.15)',
				}}
			>
				<div className="d-flex justify-content-between mb-50">
					<div>
						<p className="mont-16 mb-30">Years</p>
						{state.cards.map((card, id) => (
							<div className="d-flex align-items-center mb-30 h-48">
								{getYear({
									year: card.start,
									id,
									yearKey: 'start',
								})}
								<p className="mx-22">-</p>
								{getYear({
									year: card.end,
									id,
									yearKey: 'end',
								})}
							</div>
						))}
					</div>
					<div>
						<p className="mont-16 mb-30 h-20"> </p>
						{state.cards.map((card, id) => (
							<Input
								key={`${id}-course`}
								placeholder="Course"
								className="w-330 mb-30"
								value={state.location}
								onChange={({ value }) =>
									setState({ ...state, location: value })
								}
							/>
						))}
					</div>
					<div>
						<p className="mont-16 mb-30 h-20"></p>
						{state.cards.map((card, id) => (
							<Input
								key={`${id}-institute`}
								placeholder="Institute"
								className="w-330 mb-30"
								value={state.location}
								onChange={({ value }) =>
									setState({ ...state, location: value })
								}
							/>
						))}
					</div>
				</div>
				<Button
					label="ADD MORE +"
					className="w-200 h-48 mx-auto"
					onClick={handleAddClick}
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

export default EducationalDetails
