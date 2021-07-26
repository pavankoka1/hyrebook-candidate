import { FeatureSaga1 } from '../Feature1/FeatureSagas'
import { authSaga } from 'store/auth/saga'
import { profileSaga } from 'store/profile/saga'
import { fork, all } from 'redux-saga/effects'

export function* watchSagas() {
	//Combine sagas with
	yield all([FeatureSaga1(), authSaga(), profileSaga()])
	// OR
	// yield all([fork(FeatureSaga1)]);
}
