import React from 'react'

export const Home = React.lazy(() => import('containers/Home'))
export const Login = React.lazy(() => import('containers/Login'))
export const OurServices = React.lazy(() => import('containers/Our-Services'))
export const NotFound = React.lazy(() =>
	import('../components/NotFound/NotFound')
)
export const Profile = React.lazy(() => import('containers/Profile'))
