import { call, put } from 'redux-saga/effects'
import get from 'lodash/get'
import API from './apis'
import history from 'routes/History'
import * as ACTIONS from './actions'
import { takeLatest } from 'redux-saga/effects'
import * as TYPES from './types'

// Replace with your sagas
export function* sendOtpSaga({ payload }) {
	try {
		const response = yield API.sendOtp(payload)
		yield put(ACTIONS.sendOtpSuccess(response.data))
	} catch (error) {
		yield put(ACTIONS.sendOtpFailure(error))
	}
}

export function* verifyOtpSaga({ payload }) {
	try {
		const response = yield API.verifyOtp(payload)

		const token = get(response, 'data.token', '')
		const user = get(response, 'data.user', '')
		// const isRegistered = get(response, 'data.isRegistered', false)
		localStorage.setItem('token', `Token ${token}`)
		localStorage.setItem('user', user)

		history.push('/profile')
		// history.push(isRegistered ? '/search' : '/sign-up')

		yield put(ACTIONS.verifyOtpSuccess(response.data))
	} catch (error) {
		yield put(ACTIONS.verifyOtpFailure(error))
	}
}

export function* authSaga() {
	yield takeLatest(TYPES.SEND_OTP, sendOtpSaga)
	yield takeLatest(TYPES.VERIFY_OTP, verifyOtpSaga)
}
