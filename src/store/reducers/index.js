import { combineReducers } from 'redux'
import { reducer as auth } from 'store/auth'
import { reducer as profile } from 'store/profile'
import loader from '../Loader/LoaderReducer'

export default combineReducers({
	auth,
	profile,
	loader,
})
