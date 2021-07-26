import React from 'react'
import Header from './components/header'
import Login from './components/login'

import styles from './index.module.scss'

function Home() {
	return (
		<div className={styles.wrapper}>
			<Header />
			<div className={styles.content}>
				<div
					style={{ width: 1320 }}
					className="h-100p d-flex justify-content-between align-items-center m-auto"
				>
					<div>
						<p
							className="mont-56 mb-10"
							style={{ color: '#0C3A4D' }}
						>
							Hyrebook, Your Next Career Move
						</p>
						<p className="neu-32 mb-90">
							Search perfectly matching job for you
						</p>
						<Login />
					</div>
					<img
						src={require('assets/images/login/girl-apply-job.svg')}
						alt="girl-apply-job"
					/>
				</div>
			</div>
		</div>
	)
}

export default Home
