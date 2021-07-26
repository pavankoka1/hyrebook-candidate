import { put } from 'redux-saga/effects'
import API from './apis'
import * as ACTIONS from './actions'
import { takeLatest } from 'redux-saga/effects'
import * as TYPES from './types'

// Replace with your sagas
export function* getProfileDetailsSaga({ payload }) {
	// try {
	// 	const response = yield API.getProfileDetails(payload)
	// 	yield put(ACTIONS.getProfileDetailsSuccess(response.data))
	// } catch (error) {
	// 	yield put(ACTIONS.getProfileDetailsFailure(error))
	// }
}

export function* profileSaga() {
	yield takeLatest(TYPES.GET_PROFILE_DETAILS, getProfileDetailsSaga)
}
