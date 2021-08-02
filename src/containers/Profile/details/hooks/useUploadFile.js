import React, { useState } from 'react'
import APIS from 'store/auth/apis'

const useSearchGroupProps = (file) => {
	const [step, setStep] = useState(3)
	const [response, setResponse] = useState(null)

	const uploadFile = async () => {
		try {
			const response = await APIS.verifyOtp()
			setResponse(response)
		} catch (err) {
			debugger
		}
	}

	return {
		step,
		uploadFile,
	}
}

export default useSearchGroupProps
