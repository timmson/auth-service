import {configureStore} from "@reduxjs/toolkit"
import {AuthSlice} from "./auth-reducer"
import {healthCheck} from "./auth-api"

export const Reducers = {}
const slices = [AuthSlice]
slices.forEach((it) => Reducers[it.name] = it.reducer)

export const Store = configureStore({reducer: Reducers})
export type RootState = ReturnType<typeof Store.getState>
export type AppDispatch = typeof Store.dispatch

Store.dispatch(healthCheck)
