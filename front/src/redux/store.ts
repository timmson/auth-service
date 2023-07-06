import {configureStore} from "@reduxjs/toolkit"
import {AuthSlice, AuthState} from "./auth-reducer"
import {healthCheck} from "./auth-api"

export const Reducers = {}
const slices = [AuthSlice]
slices.forEach((it) => Reducers[it.name] = it.reducer)

export const Store = configureStore({reducer: Reducers})
export type RootState = ReturnType<typeof Store.getState>

healthCheck(Store.dispatch).then()
