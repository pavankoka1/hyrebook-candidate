import React, { useEffect, useRef } from 'react'
import isEmpty from 'lodash/isEmpty'
import { NavLink } from 'react-router-dom'

function Link({ id, to, tab, subTabs, activeSubTab, onTabHover }) {
	const wrapperRef = useRef(null)
	useEffect(() => {
		window.addEventListener('click', handleClick)

		return () => window.removeEventListener('click', handleClick)
	}, [])

	function handleClick(e) {
		if (
			id !== activeSubTab &&
			wrapperRef &&
			wrapperRef.current &&
			e.target &&
			!wrapperRef.current.contains(e.target)
		) {
			onTabHover()
		}
	}

	function handleMouseEnter() {
		onTabHover && onTabHover(id)
	}

	return (
		<div
			className="p-relative mr-60"
			ref={wrapperRef}
			onMouseEnter={handleMouseEnter}
		>
			<NavLink
				className="navbar-link"
				activeClassName="navbar-link--active"
				to={to}
				isActive={(match, location) => {
					console.log(match, location)
					if (location.pathname.includes(id)) {
						return true
					}
					return false
				}}
			>
				{tab}
			</NavLink>
			{id === activeSubTab && !isEmpty(subTabs) && (
				<div className="p-absolute px-40 py-36 t-53 l-0 bg-white d-flex flex-column lc-0 z-index-10">
					{subTabs.map((tab) => (
						<NavLink
							key={to.tab}
							className="navbar-link w-max mb-15 mont-16 has-cursor"
							to={tab.to}
						>
							{tab.tab}
						</NavLink>
					))}
				</div>
			)}
		</div>
	)
}

export default Link
