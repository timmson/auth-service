import {createSlice} from "@reduxjs/toolkit"

export interface AuthState {
	authorized: boolean
}

const initialState: AuthState = {authorized: false}

export const AuthSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		authAction: (state: AuthState) => {
			state.authorized = true
		},
		dropAction: (state: AuthState) => {
			state.authorized = false
		}
	}
})

export default AuthSlice.reducer

export const {authAction, dropAction} = AuthSlice.actions
