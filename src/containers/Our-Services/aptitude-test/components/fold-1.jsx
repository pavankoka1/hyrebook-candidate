import React from 'react'
import Button from 'utils/button'

function Card() {
	return (
		<div
			className="mt-160 mx-auto w-fit px-72 pt-50 pb-30 bg-white"
			style={{
				boxShadow: '6.58859px 6.58859px 43.9239px rgba(0, 0, 0, 0.15)',
				borderRadius: '10px',
			}}
		>
			<div className="d-flex mb-40">
				<img
					className="align-self-start mt-8 mr-8"
					src={require('assets/icons/double-quote.svg')}
					alt="double-quote"
				/>
				<p className="neu-24 w-660" style={{ textAlign: 'center' }}>
					Tellus elit sit hac bibendum urna elit. Eleifend phasellus
					sapien lacus, vitae, sit eget porttitor lorem senectus. Sit
					nec fusce facilisis accumsan nisl, vestibulum. Libero semper
					libero amet quisque. Et, odio amet odio turpis bibendum
					scelerisque. Urna risus sed sed orci odio elementum sed.
					Morbi tristique in in ipsum duis.
				</p>
				<img
					className="align-self-end mb-8 ml-8"
					style={{ transform: 'rotate(180deg)' }}
					src={require('assets/icons/double-quote.svg')}
					alt="double-quote"
				/>
			</div>
			<p className="mont-16 t-031116 w-fit ml-auto">
				XYZ company / Candidate
			</p>
		</div>
	)
}

function Fold1() {
	return (
		<div className="w-1320 mx-auto mt-0 overflow-visible mb-28">
			<div className="d-flex overflow-visible">
				<div className="w-50p mt-120">
					<p className="mont-40 mb-20">Online Aptitude Test</p>
					<p className="neu-24 mb-60">
						Accumsan blandit quis amet, nunc aliquam scelerisque. At
						pellentesque nec velit amet, libero habitasse et euismod
						magna. Ut laoreet dolor sagittis aenean blandit.
						Ridiculus tempus turpis arcu commodo ut. Quam nunc
						luctus aliquam quis in aliquam. Commodo quis consequat
						nibh tellus quisque aliquam bibendum turpis{' '}
					</p>
					<Button
						label="CONTACT US"
						styles={{ background: '#F89C1C' }}
						className="px-40 py-14 w-fit t-031116 b-0"
					/>
				</div>
				<div className="w-50p d-flex">
					<img
						width={500}
						className="mt-142 ml-auto"
						style={{ left: '50%' }}
						src={require('assets/images/our-services/aptitude-test/certification.svg')}
						alt="resume"
					/>
					<img
						className="p-absolute r-0"
						src={require('assets/images/our-services/one-page-cv/illustration.svg')}
						alt="illustion"
						style={{ zIndex: -1 }}
					/>
				</div>
			</div>
			{Card()}
		</div>
	)
}

export default Fold1
