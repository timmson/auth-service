import {PayloadAction} from "@reduxjs/toolkit"
import axios from "axios"
import {authAction, dropAction} from "./auth-reducer"

export const healthCheck = async (dispatch: (action: PayloadAction) => void) => {
	try {
		await axios.get("/api/v1/private/healthcheck")
		dispatch(authAction())
	} catch (e) {
		dispatch(dropAction())
	}
}

export const login = async (dispatch: (action: PayloadAction) => void) => {
	try {
		await axios.post("/api/v1/authenticate/login")
		dispatch(authAction())
	} catch (e) {
		dispatch(dropAction())
	}
}


export const logout = async (dispatch: (action: PayloadAction) => void) => {
	try {
		await axios.post("/api/v1/authenticate/logout")
	} finally {
		dispatch(dropAction())
	}
}



