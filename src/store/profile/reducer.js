import * as types from './types'

export const steps = {
	LOGIN: 'LOGIN',
	OTP: 'OTP',
}

const INITIAL_STATE = {
	loading: false,
	error: '',
	step: 1,
}

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case types.GET_PROFILE_DETAILS:
			return {
				...state,
				loading: true,
			}
		case types.GET_PROFILE_DETAILS_SUCCESS:
			return {
				...state,
				loading: false,
			}
		case types.GET_PROFILE_DETAILS_FAILURE:
			return {
				...state,
				loading: false,
			}
		case types.GO_BACK:
			return {
				...state,
				step: state.step - 1,
			}
		default:
			return state
	}
}
