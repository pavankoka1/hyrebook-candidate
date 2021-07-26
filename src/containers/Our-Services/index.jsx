import React from 'react'
import { Route, Switch } from 'react-router-dom'
import OnePageCV from './one-page-cv'
import AptitudeTest from './aptitude-test'

function Router() {
	return (
		<Switch>
			<Route
				path="/our-services/one-page-cv"
				exact
				children={OnePageCV}
			/>
			<Route
				path="/our-services/aptitude-test"
				exact
				children={AptitudeTest}
			/>
		</Switch>
	)
}

export default Router
