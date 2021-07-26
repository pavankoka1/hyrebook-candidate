import React from 'react'
import { Router } from 'react-router-dom'
import history from 'routes/History'
import Routes from 'routes/Routes'
import { IntlProvider } from 'react-intl'
import Loader from 'components/Loader/Loader'
import './App.scss'
import { connect } from 'react-redux'

function App(props) {
	// App contains routes and also wrapped with snackbar and intl for localization

	const { lang, loading } = props

	if (loading) {
		return <Loader />
	}
	return (
		<IntlProvider>
			<Router history={history}>{<Routes lang={lang} />}</Router>
		</IntlProvider>
	)
}

const mapStateToProps = ({ loading }) => ({
	loading,
})

export default connect(mapStateToProps, undefined)(App)
