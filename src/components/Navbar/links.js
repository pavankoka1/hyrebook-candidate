import React, { useState } from 'react'
import Link from './link'

const links = [
	{
		id: 'home',
		to: '/home',
		tab: 'home',
	},
	{
		id: 'jobs',
		to: '/jobs',
		tab: 'jobs',
	},
	{
		id: 'our-services',
		to: '/our-services/one-page-cv',
		tab: 'our services',
		subTabs: [
			{
				tab: 'One page CV',
				to: '/our-services/one-page-cv',
			},
			{
				tab: 'Aptitude Test',
				to: '/our-services/aptitude-test',
			},
		],
	},
	{
		id: 'blogs',
		to: '/blogs',
		tab: 'blogs',
	},
	{
		id: 'profile',
		to: '/profile',
		tab: 'profile',
	},
]

function Links() {
	const [activeSubTab, setActiveSubTab] = useState('')

	function handleTabHover(id) {
		setActiveSubTab(id)
	}

	return (
		<div className="d-flex h-fit lc-0">
			{links.map((link) => (
				<Link
					id={link.id}
					key={link.id}
					to={link.to}
					tab={link.tab}
					subTabs={link.subTabs}
					activeSubTab={activeSubTab}
					onTabHover={handleTabHover}
				/>
			))}
		</div>
	)
}

export default Links
