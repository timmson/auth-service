import {configureStore} from "@reduxjs/toolkit"
import {AuthSlice, AuthState} from "./auth-reducer"
import {healthCheck} from "./auth-api"

export interface RootState {
	auth: AuthState
}

export const Reducers = {}
const slices = [AuthSlice]
slices.forEach((it) => Reducers[it.name] = it.reducer)

export const Store = configureStore({reducer: Reducers})

healthCheck(Store.dispatch).then()
