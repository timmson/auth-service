import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import {User, isValidCardNumber} from "../model"

export interface AuthState {
    authorized: boolean
    user?: User
    cardNumber: string
    isValidCardNumber: boolean
}

const initialState: AuthState = {authorized: false, cardNumber: "", isValidCardNumber: false}

export const AuthSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		authAction: (state: AuthState, action: PayloadAction<User>) => {
			state.authorized = true
			state.user = action.payload
		},
		updateCardNumber: (state: AuthState, action: PayloadAction<string>) => {
			state.cardNumber = action.payload
			state.isValidCardNumber = isValidCardNumber(action.payload)
		},
		dropAction: (state: AuthState) => {
			state.authorized = false
		}
	}
})

export default AuthSlice.reducer

export const {authAction, updateCardNumber, dropAction} = AuthSlice.actions
