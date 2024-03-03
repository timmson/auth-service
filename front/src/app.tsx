import React from "react"
import {RootState} from "./redux/store"
import {login, logout} from "./redux/auth-api"
import {updateCardNumber} from "./redux/auth-reducer"
import {useAppDispatch, useAppSelector} from "./redux/hooks"

const App = () => {

	const state = useAppSelector((state: RootState) => state.auth)
	const dispatch = useAppDispatch()

	const button = state.authorized ?
		(<button onClick={() => dispatch(logout())}>Logout</button>) :
		(<button onClick={() => dispatch(login())}>Login</button>)

	function update(target: EventTarget & HTMLInputElement) {
		dispatch(updateCardNumber(target.value))
	}

	return (
		<>
			<h1>
                Hello, auth-service!
			</h1>
			<p>
				{
					state.authorized
						?
						`You are ${state.user.firstName} ${state.user.lastName}`
						:
						"You are not authorized"
				}
			</p>
			{button}
			<br/>
			<br/>
			<label htmlFor="cardNumber">Card number</label>
            &nbsp;
			<input type="text" id="cardNumber" name="cardNumber" value={state.cardNumber}
				onChange={(e) => update(e.target)}/>
            &nbsp;
            is {state.isValidCardNUmber ? "valid" : "invalid"}
		</>

	)
}

export default App
