import React, { useEffect, useState } from "react"
import { Route } from "react-router-dom"
import jwtDecode from 'jwt-decode'
import Film from "./films/Film"
import TopNavigation from "./TopNavigation"
import { Async, lazyImport } from './Async'
import { setAuthorizationHeader } from '../utils'

const AppContext = React.createContext()
export { AppContext }

const HomePage = Async(lazyImport('./HomePage'));
const FilmsPage = Async(lazyImport('./FilmsPage'));
const SignupPage = Async(lazyImport('./SignupPage'));
const LoginPage = Async(lazyImport('./LoginPage'));

const initialState = {
	token: null,
	role: "user",
}
const App = props => {

	const [user, setUser] = useState(initialState);
	const [message, setMessage] = useState("");

	useEffect(() => {
		if (localStorage.filmsToken) {
			setUser({
				token: localStorage.filmsToken,
				role: jwtDecode(localStorage.filmsToken).user.role,
			})
			setAuthorizationHeader(localStorage.filmsToken)
		}
	}, [])

	const login = token => {
		setUser({ token, role: jwtDecode(token).user.role })
		localStorage.filmsToken = token
		setAuthorizationHeader(token)
	}

	const logout = () => {
		setUser({ token: null, role: user })
		setAuthorizationHeader()
		delete localStorage.filmsToken
	}


	return (
		<div className="ui container">
			<TopNavigation
				logout={logout}
				isAuth={user.token}
				isAdmin={user.token && user.role === 'admin'} />

			{message && (
				<div className={'ui info message'}>
					<i className={'close icon'} onClick={() => setMessage("")} />
					{message}
				</div>
			)}

			<Route exact path="/" component={HomePage} />
			<Route
				path="/films"
				render={props => (
					<FilmsPage {...props} user={user} />
				)}
			/>
			<Route path="/film/:_id" exact component={Film} />
			<Route
				path="/signup"
				render={props => (
					<SignupPage {...props} setMessage={setMessage} />
				)}
			/>
			<Route
				path="/login"
				render={props => <LoginPage {...props} login={login} />}
			/>
		</div>
	)
}

export default App
