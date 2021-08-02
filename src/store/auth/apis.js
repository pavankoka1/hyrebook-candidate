import { axiosInstance } from '../../network/apis'
const handlerEnabled = false

// Replace endpoint and change api name
const sendOtp = async (payload) => {
	return await axiosInstance.post('/api/auth/candidate/sendotp/', payload, {
		handlerEnabled,
	})
}

const verifyOtp = async (payload) => {
	return await axiosInstance.post('/api/auth/otp-verify/', payload, {
		handlerEnabled,
	})
}

export default {
	sendOtp,
	verifyOtp,
}
