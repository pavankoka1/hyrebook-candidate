import * as types from './types'

export const sendOtp = (payload) => {
	return { type: types.SEND_OTP, payload }
}

export const sendOtpSuccess = (payload) => {
	return { type: types.SEND_OTP_SUCCESS, payload }
}

export const sendOtpFailure = (payload) => {
	return { type: types.SEND_OTP_FAILURE, payload }
}

export const verifyOtp = (payload) => {
	return { type: types.VERIFY_OTP, payload }
}

export const verifyOtpSuccess = (payload) => {
	return { type: types.VERIFY_OTP_SUCCESS, payload }
}

export const verifyOtpFailure = (payload) => {
	return { type: types.VERIFY_OTP_FAILURE, payload }
}
