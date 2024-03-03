import axios from "axios"
import {createAsyncThunk} from "@reduxjs/toolkit"
import {authAction, dropAction} from "./auth-reducer"

export const healthCheck = createAsyncThunk(
	"auth/healthCheck",
	async (_, {dispatch}) => {
		try {
			const response = await axios.get("/api/v1/private/healthcheck")
			dispatch(authAction(response.data))
		} catch (e) {
			dispatch(dropAction())
		}
	}
)

export const login = createAsyncThunk(
	"auth/login",
	async (_void, {dispatch})=> {
		try {
			await axios.post("/api/v1/authenticate/login")
			const response = await axios.get("/api/v1/private/healthcheck")
			dispatch(authAction(response.data))
		} catch (e) {
			dispatch(dropAction())
		}
	}
)

export const logout = createAsyncThunk(
	"auth/logout",
	async (_, {dispatch}) => {
		try {
			await axios.post("/api/v1/authenticate/logout")
		} finally {
			dispatch(dropAction())
		}
	}
)



