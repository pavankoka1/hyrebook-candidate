import * as types from './types'

export const steps = {
	LOGIN: 'LOGIN',
	OTP: 'OTP',
}

const INITIAL_STATE = {
	loading: false,
	redirect: false,
	error: '',
	step: steps.LOGIN,
}

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case types.SEND_OTP:
			return {
				...state,
				loading: true,
			}
		case types.SEND_OTP_SUCCESS:
			return {
				...state,
				loading: false,
				step: steps.OTP,
			}
		case types.SEND_OTP_FAILURE:
			return {
				...state,
				loading: false,
			}
		case types.VERIFY_OTP:
			return {
				...state,
				loading: true,
			}
		case types.VERIFY_OTP_SUCCESS:
			debugger
			return {
				...state,
				loading: false,
				redirect: true,
			}
		case types.VERIFY_OTP_FAILURE:
			return {
				...state,
				loading: false,
			}
		default:
			return state
	}
}
