import React from 'react'

function Fold2() {
	return (
		<div className="h-750 vw-100 d-flex align-items-center p-relative">
			<img
				className="p-absolute t-0"
				style={{ zIndex: -1 }}
				src={require('assets/images/our-services/one-page-cv/illustration-left.svg')}
				alt="dotted curve"
			/>
			<div className="w-1320 d-flex flex-column justify-content-center align-items-center mx-auto my-0">
				<p className="mont-40 mb-44">Benefits Of Aptitude Test</p>
				<div className="w-1320 d-flex justify-content-between">
					<div>
						<img
							className="mb-20"
							src={require('assets/images/our-services/aptitude-test/rocket-and-stars.svg')}
							alt="rocket-stars"
						/>
						<p className="mont-20 w-240 text-align-center mx-auto">
							Increases Chances Of Getting Shortlisted
						</p>
					</div>
					<div>
						<img
							className="mb-20"
							src={require('assets/images/our-services/aptitude-test/profile.svg')}
							alt="rocket-stars"
							style={{ border: '4.39239px solid #E1E4E5' }}
						/>
						<p className="mont-20 w-240 text-align-center mx-auto">
							IStand Out Your Profile From Others
						</p>
					</div>
					<div>
						<img
							className="mb-20"
							src={require('assets/images/our-services/aptitude-test/resume.svg')}
							alt="rocket-stars"
						/>
						<p className="mont-20 w-320 text-align-center">
							Company prefer candidates who have given aptitude
							test
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Fold2
