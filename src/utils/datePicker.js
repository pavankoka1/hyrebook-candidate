import React, { useState, useEffect, useRef } from 'react'
import moment from 'moment'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

function DatePicker({ placeholder, className, value, onChange }) {
	const datePickerRef = useRef(null)
	const [showDatePicker, setShowDatePicker] = useState(false)

	function handleOutsideClick(e) {
		if (
			datePickerRef &&
			showDatePicker &&
			!datePickerRef.current.contains(e.target)
		) {
			setShowDatePicker(false)
		}
	}

	useEffect(() => {
		window.addEventListener('click', handleOutsideClick, false)

		return () =>
			window.removeEventListener('click', handleOutsideClick, false)
	})

	return (
		<div className={`p-relative ${className}`}>
			<p className="mont-16 fw-400 mb-5">{placeholder}</p>
			<div className="d-flex alingn-items-center">
				<p
					className={`bg-f2f2f2 h-48 w-150 neu-24 py-10 px-15 mr-24`}
					style={{ borderRadius: '5px' }}
				>
					{moment(value).format('L')}
				</p>
				<img
					className="has-cursor"
					src={require('assets/icons/calendar.svg')}
					alt="calendar"
					onClick={() => !showDatePicker && setShowDatePicker(true)}
				/>
			</div>
			{showDatePicker && (
				<div
					ref={datePickerRef}
					className="p-absolute b-0 l-0 bg-white"
					style={{
						transform: 'translateY(100%)',
						boxShadow: '',
						zIndex: 1,
						bottom: '-5px',
					}}
				>
					<Calendar
						style={{ margin: 0 }}
						onChange={(value) => {
							onChange(value)
						}}
						value={value}
					/>
				</div>
			)}
		</div>
	)
}

export default DatePicker
