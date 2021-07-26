import React from 'react'
import ProgressBar from './components/progressBar'
import UploadResume from './components/uploadResume'
import PersonalDetails from './components/personalDetails'
import EmploymentDetails from './components/employmentDetails'
import PastWorkExperience from './components/pastWorkExperience'

function Index({ step }) {
	function renderStep() {
		switch (step) {
			case 1:
				return <UploadResume />
			case 2:
				return <PersonalDetails />
			case 3:
				return <EmploymentDetails />
			case 4:
				return <PastWorkExperience />
			default:
				return null
		}
	}
	return (
		<div className="vw-100">
			<div className="w-1320 mx-auto my-0 py-40">
				<ProgressBar step={step} />
				{renderStep()}
			</div>
		</div>
	)
}

export default Index
