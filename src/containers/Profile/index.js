import React, { useEffect } from 'react'
import store from 'store'
import history from 'routes/History'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import Loader from 'components/Loader/Loader'
import Details from './details'
import {
	getProfileDetails,
	getProfileDetailsSuccess,
} from 'store/profile/actions'

function Router({ loading, step }) {
	useEffect(() => {
		store.dispatch(getProfileDetails())

		setTimeout(() => {
			store.dispatch(getProfileDetailsSuccess())
			history.push('/profile/details')
		}, 500)
	}, [])

	if (loading) return <Loader />

	return (
		<Switch>
			<Route
				path="/profile/details"
				exact
				children={<Details step={step} />}
			/>
		</Switch>
	)
}

const mapStateToProps = (state) => {
	return {
		loading: state.profile.loading,
		step: state.profile.step,
	}
}

export default connect(mapStateToProps, undefined)(Router)
