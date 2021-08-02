import * as types from './types'

export const getProfileDetails = (payload) => {
	return { type: types.GET_PROFILE_DETAILS, payload }
}

export const getProfileDetailsSuccess = (payload) => {
	return { type: types.GET_PROFILE_DETAILS_SUCCESS, payload }
}

export const getProfileDetailsFailure = (payload) => {
	return { type: types.GET_PROFILE_DETAILS_FAILURE, payload }
}

export const goBack = () => {
	return { type: types.GO_BACK }
}
