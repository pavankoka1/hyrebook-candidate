import React from 'react'

function RecommendedJobs() {
	return (
		<div
			className="p-24"
			style={{
				borderRadius: '11.7px',
				boxShadow: '7.02781px 7.02781px 46.8521px rgba(0, 0, 0, 0.15)',
			}}
		>
			<p className="mb-24 mont-20">Highly Recommended Jobs For You</p>
			<div className="lc-0">
				{[1, 2].map((key) => (
					<div
						key={key}
						className="bg-f5f8fa p-24 mb-16"
						style={{ borderRadius: '10px' }}
					>
						<p className="mont-20 mb-8">Product Designer</p>
						<p className="mont-20 mb-8 fw-400">Google</p>
						<p className="mont-20 mb-8 fw-400">Pune</p>
						<p className="mont-20 mb-8 fw-300">3 Days ago</p>
					</div>
				))}
			</div>
		</div>
	)
}

export default RecommendedJobs
