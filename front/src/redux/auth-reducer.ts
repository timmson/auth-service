import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import {User} from "../model"

export interface AuthState {
	authorized: boolean
	user?: User
}

const initialState: AuthState = {authorized: false}

export const AuthSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		authAction: (state: AuthState, action: PayloadAction<User>) => {
			state.authorized = true
			state.user = action.payload
		},
		dropAction: (state: AuthState) => {
			state.authorized = false
		}
	}
})

export default AuthSlice.reducer

export const {authAction, dropAction} = AuthSlice.actions
