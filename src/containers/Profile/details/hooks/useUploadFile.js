import React, { useState } from 'react'
import APIS from 'store/auth/apis'

const useSearchGroupProps = (file) => {
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
		uploadFile,
	}
}

export default useSearchGroupProps
