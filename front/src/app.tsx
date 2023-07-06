import React from "react"
import {useDispatch, useSelector} from "react-redux"
import {RootState} from "./redux/store"
import {login, logout} from "./redux/auth-api"

const App = () => {

	const state = useSelector((state: RootState) => state.auth)
	const dispatch = useDispatch()

	const button = state.authorized ?
		(<button onClick={() => logout(dispatch)}>Logout</button>) :
		(<button onClick={() => login(dispatch)}>Login</button>)

	return (
		<>
			<h1>
				Hello, auth-service!

			</h1>
			<p>
				You are {state.authorized ? "" : "not"} authorized
			</p>
			{button}
		</>

	)
}

export default App
