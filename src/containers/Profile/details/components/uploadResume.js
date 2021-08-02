import React, { useRef } from 'react'
import Button from 'utils/button'
import useUploadFile from '../hooks/useUploadFile'

function UploadResume() {
	const inputRef = useRef(null)
	const { uploadFile, step } = useUploadFile()

	function handleUpload(e) {
		const file = e.target.files[0]
		const formData = new FormData()
		formData.append('file', file)
		console.log('uplaod func called')
		console.log(typeof file, file, formData)
		for (var key of formData.entries()) {
			console.log(key[0] + ', ' + key[1])
		}
		uploadFile()
	}

	function renderStep() {
		switch (step) {
			case 1:
				return (
					<div className="pt-74">
						<input
							className="d-none"
							type="file"
							ref={inputRef}
							onChange={handleUpload}
						/>
						<div
							className="w-440 h-200 has-cursor d-flex flex-column align-items-center justify-content-center bg-dde9ef br-5 mx-auto mb-60"
							onClick={() => inputRef.current.click()}
						>
							<img
								className="mb-5"
								src={require('assets/icons/upload.svg')}
								alt="upload-icon"
							/>
							<p className="mont-16 t-black">
								Click here to upload file
							</p>
						</div>
						<Button
							label="UPLOAD RESUME"
							className="b-0 bg-f89c1c w-fit py-14 px-40 t-black mx-auto mb-36"
						/>
						<Button
							disabled
							label="NEXT"
							className="b-0"
							disabledStyles={{
								padding: '14px 40px',
								marginLeft: 'auto',
							}}
						/>
					</div>
				)
			case 2:
				return (
					<div className="pt-74">
						<div className="w-440 h-200 has-cursor d-flex flex-column align-items-center justify-content-center bg-dde9ef br-5 mx-auto mb-60">
							<img
								src={require('assets/images/profile/upload.gif')}
								alt="upload-gif"
							/>
						</div>
					</div>
				)
			case 3:
				return (
					<div className="pt-74">
						<div className="w-440 p-35 h-200 has-cursor d-flex align-items-center justify-content-between bg-dde9ef br-5 mx-auto mb-60">
							<img
								src={require('assets/images/profile/resume.svg')}
								alt="resume"
							/>
							<p className="h-100p w-1 bg-0c3a4d" />
							<div className="has-cursor d-flex flex-column align-items-center justify-content-center">
								<img
									className="mb-5 mx-auto"
									src={require('assets/icons/upload.svg')}
									alt="upload-icon"
								/>
								<p className="mont-16 t-black w-150 fw-400 text-align-center">
									Click here to upload new file
								</p>
							</div>
						</div>
					</div>
				)
			default:
				return null
		}
	}

	return renderStep()
}

export default UploadResume
