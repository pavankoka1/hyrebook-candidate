import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import store from 'store'
import RecommendedJobs from './components/recommendedJobs'
import { sendOtp } from 'store/auth/actions'

function Home({ user }) {
	useEffect(() => {
		setTimeout(() => {
			store.dispatch(sendOtp())
		}, 5000)
	}, [])

	return (
		<div className="w-1320 mx-auto my-40 d-flex justify-content-between">
			<div className="w-710" style={{ border: '1px solid red' }}>
				koka
			</div>
			<div className="w-530">
				<RecommendedJobs />
			</div>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		user: state.auth.user,
	}
}

export default connect(mapStateToProps, null)(Home)
