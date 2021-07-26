import { axiosInstance } from '../../network/apis'
const handlerEnabled = false

// Replace endpoint and change api name
const getProfileDetails = async (payload) => {
	return await axiosInstance.post('/api/auth/sendotp/', payload, {
		handlerEnabled,
	})
}

export default {
	getProfileDetails,
}
