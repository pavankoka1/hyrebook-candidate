import store from 'store'
import { loader } from 'store/Loader/LoaderAction'
import toSnakeCase from 'utils/toSnakeCase'
import toCamelCase from 'utils/toCamelCase'

export const isHandlerEnabled = (config = {}) => {
	return config.hasOwnProperty('handlerEnabled') && !config.handlerEnabled
		? false
		: true
}

export const requestHandler = (request) => {
	if (isHandlerEnabled(request)) {
		// Modify request here
		store.dispatch(loader(true))
	}
	const token = localStorage.getItem('token')
	if (token) {
		request.headers['Authorization'] = token
	}
	// return request
	request.data = toSnakeCase(request.data)
	return request
}

export const successHandler = (response) => {
	if (isHandlerEnabled(response)) {
		// Hanlde Response
		store.dispatch(loader(false))
	}
	response.data = toCamelCase(response.data)
	return response
}

export const errorHandler = (error) => {
	if (isHandlerEnabled(error.config)) {
		store.dispatch(loader(false))
		// You can decide what you need to do to handle errors.
		// here's example for unautherized user to log them out .
		// error.response.status === 401 && Auth.signOut();
	}
	return Promise.reject({ ...error })
}
