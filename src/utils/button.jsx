import React from 'react'
import Loader from 'react-loader-spinner'

function Button(props) {
	const {
		disabled,
		loading,
		label,
		onClick,
		className,
		styles,
		disabledStyles,
	} = props

	function handleClick() {
		!disabled && !loading && onClick && onClick()
	}

	return (
		<div
			className={`d-flex justify-content-center align-items-center button pl-32 pr-32 pt-12 pb-12 w-fit ${
				disabled ? 'button--disabled' : ''
			} ${className}`}
			onClick={handleClick}
			style={
				disabled
					? {
							...disabledStyles,
							background: '#999999',
							color: '#000',
					  }
					: { ...styles }
			}
		>
			{loading ? (
				<Loader
					type="TailSpin"
					color="#000000"
					height={20}
					width={20}
				/>
			) : (
				label
			)}
		</div>
	)
}

export default Button
