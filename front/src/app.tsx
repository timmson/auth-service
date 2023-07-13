import React from "react"
import {useDispatch, useSelector} from "react-redux"
import {RootState} from "./redux/store"
import {login, logout} from "./redux/auth-api"
import {updateCardNumber} from "./redux/auth-reducer";

const App = () => {

    const state = useSelector((state: RootState) => state.auth)
    const dispatch = useDispatch()

    const button = state.authorized ?
        (<button onClick={() => logout(dispatch)}>Logout</button>) :
        (<button onClick={() => login(dispatch)}>Login</button>)

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
