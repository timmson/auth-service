import axios from "axios"
import {AnyAction} from "@reduxjs/toolkit"
import {authAction, dropAction} from "./auth-reducer"

export const healthCheck = async (dispatch: (action: AnyAction) => void) => {
	try {
		const response = await axios.get("/api/v1/private/healthcheck")
		dispatch(authAction(response.data))
	} catch (e) {
		dispatch(dropAction())
	}
}

export const login = async (dispatch: (action: AnyAction) => void) => {
	try {
		await axios.post("/api/v1/authenticate/login")
		await healthCheck(dispatch)
	} catch (e) {
		dispatch(dropAction())
	}
}


export const logout = async (dispatch: (action: AnyAction) => void) => {
	try {
		await axios.post("/api/v1/authenticate/logout")
	} finally {
		dispatch(dropAction())
	}
}



