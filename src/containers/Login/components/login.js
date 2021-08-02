import React, { useState } from 'react'
import store from 'store'
import { connect } from 'react-redux'
import Input from 'utils/input'
import Button from 'utils/button'
import isValidPhone from 'utils/isValidPhone'
import { sendOtp, verifyOtp } from 'store/auth/actions'
import { steps } from 'store/auth/reducer'

const placeholderStyles = {
	color: '#BDBDBD',
}

function Login({ loading, redirect, step }) {
	const [phone, setPhone] = useState('9515918848')
	const [otp, setOtp] = useState('')

	function handlePhoneChange({ value }) {
		setPhone(value)
	}

	function handleOtpChange({ value }) {
		setOtp(value)
	}

	function handleLoginClick() {
		store.dispatch(sendOtp({ username: phone, userType: 1 }))
	}

	function handleOtpClick() {
		store.dispatch(verifyOtp({ username: phone, otp }))
	}

	function renderStep() {
		switch (step) {
			case steps.LOGIN:
				return (
					<>
						<Input
							placeholder="Enter your no"
							value={phone}
							className="mb-20 w-350"
							placeholderStyles={placeholderStyles}
							onChange={handlePhoneChange}
							onEnter={handleLoginClick}
						/>
						<Button
							label="SUBMIT"
							disabled={!isValidPhone(phone)}
							loading={loading}
							disabledStyles={{
								color: '#000',
								background: '#BDBDBD',
								boxShadow: '4px 4px 10px rgba(0, 0, 0, 0.25)',
							}}
							styles={{
								color: '#000',
								background: '#F89C1C',
								boxShadow: '4px 4px 10px rgba(0, 0, 0, 0.25)',
							}}
							className="w-350 b-none h-48 d-flex justify-content-center align-items-center"
							onClick={handleLoginClick}
						/>
					</>
				)
			case steps.OTP:
				return (
					<>
						<Input
							placeholder="Enter OTP"
							value={otp}
							className="mb-20 w-350"
							placeholderStyles={placeholderStyles}
							onChange={handleOtpChange}
							onEnter={handleOtpClick}
						/>
						<Button
							label="START FINDING"
							disabled={!(otp.length === 4 || otp.length === 6)}
							loading={loading}
							disabledStyles={{
								color: '#000',
								background: '#BDBDBD',
								boxShadow: '4px 4px 10px rgba(0, 0, 0, 0.25)',
							}}
							styles={{
								color: '#000',
								background: '#F89C1C',
								boxShadow: '4px 4px 10px rgba(0, 0, 0, 0.25)',
							}}
							className="w-350 b-none h-48 d-flex justify-content-center align-items-center"
							onClick={handleOtpClick}
						/>
					</>
				)
			default:
				return null
		}
	}

	return renderStep()
}

const mapStateToProps = (state) => {
	return {
		loading: state.auth.loading,
		step: state.auth.step,
		redirect: state.auth.redirect,
	}
}

export default connect(mapStateToProps, undefined)(Login)
