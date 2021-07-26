import React, { useState, useRef, useEffect } from 'react'

function Dropdown({ className, placeholder, value, options, onChange }) {
	const dropdownRef = useRef(null)
	const [showDropdown, setShowDropdown] = useState(false)

	function handleOutsideClick(e) {
		if (
			dropdownRef &&
			showDropdown &&
			!dropdownRef.current.contains(e.target)
		) {
			setShowDropdown(false)
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
			<div
				className="bg-f2f2f2 h-48 pl-15 py-8 pr-24 d-flex justify-content-between has-cursor"
				style={{ borderRadius: '5px' }}
				onClick={() => !showDropdown && setShowDropdown(true)}
			>
				<p className="neu-24">{value}</p>
				<img
					style={{
						width: 16,
						transform: showDropdown ? 'rotate(180deg)' : '',
						transition: 'all 300ms ease-in',
					}}
					src={require('assets/icons/chevron-down.svg')}
					alt="chevron-down"
				/>
			</div>
			{showDropdown && (
				<div
					ref={dropdownRef}
					className="p-absolute z-index-1 l-0 bg-white mt-5 lc-0"
					style={{
						transform: 'translateY(100%)',
						bottom: '-5px',
						boxShadow: '6px 6px 40px 0px #00000026',
						borderRadius: '5px',
					}}
				>
					{options.map(({ key, value: option }) => (
						<p
							key={key}
							className={`px-40 py-20 ${
								value === option
									? 'bg-999999 t-white'
									: 'has-cursor'
							}`}
							onClick={() => value !== option && onChange(option)}
						>
							{option}
						</p>
					))}
				</div>
			)}
		</div>
	)
}

export default Dropdown
