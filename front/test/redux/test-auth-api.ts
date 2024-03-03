import axios from "axios"
import {healthCheck, login, logout} from "../../src/redux/auth-api"
import {authAction, dropAction} from "../../src/redux/auth-reducer"

jest.mock("axios")

describe("Auth API should", () => {

	const data = {id: 1, firstName: "", lastName: ""}

	test("check successfully", async () => {
		const dispatch = jest.fn()
		const thunk = healthCheck()

		axios.get.mockResolvedValueOnce({status: 200, data: data})
		await thunk(dispatch, undefined, undefined)

		expect(axios.get).toHaveBeenCalledWith("/api/v1/private/healthcheck")
		expect(axios.get).toBeCalledTimes(1)

		const callSuccessAction = dispatch.mock.calls[1][0]
		expect(callSuccessAction.type).toEqual(authAction.type)
		expect(callSuccessAction.payload).toEqual(data)
	})

	test("check unsuccessfully", async () => {
		const dispatch = jest.fn()
		const thunk = healthCheck()

		axios.get.mockRejectedValueOnce({status: 500})
		await thunk(dispatch, undefined, undefined)

		expect(axios.get).toHaveBeenCalledWith("/api/v1/private/healthcheck")
		expect(axios.get).toBeCalledTimes(1)

		const callSuccessAction = dispatch.mock.calls[1][0]
		expect(callSuccessAction.type).toEqual(dropAction.type)
	})

	test("login successfully", async () => {
		const dispatch = jest.fn()
		const thunk = login()

		axios.post.mockResolvedValueOnce({status: 200})
		axios.get.mockResolvedValueOnce({status: 200, data: data})
		await thunk(dispatch, undefined, undefined)

		expect(axios.post).toHaveBeenCalledWith("/api/v1/authenticate/login")
		expect(axios.post).toBeCalledTimes(1)

		expect(axios.get).toHaveBeenCalledWith("/api/v1/private/healthcheck")
		expect(axios.get).toBeCalledTimes(1)

		const callSuccessAction = dispatch.mock.calls[1][0]
		expect(callSuccessAction.type).toEqual(authAction.type)
		expect(callSuccessAction.payload).toEqual(data)
	})

	test("login unsuccessfully", async () => {
		const dispatch = jest.fn()
		const thunk = login()

		axios.post.mockRejectedValueOnce({status: 500})
		await thunk(dispatch, undefined, undefined)

		expect(axios.post).toHaveBeenCalledWith("/api/v1/authenticate/login")
		expect(axios.post).toBeCalledTimes(1)

		const callSuccessAction = dispatch.mock.calls[1][0]
		expect(callSuccessAction.type).toEqual(dropAction.type)
	})

	test("logout successfully", async () => {
		const dispatch = jest.fn()
		const thunk = logout()

		axios.post.mockResolvedValueOnce({status: 200})
		await thunk(dispatch, undefined, undefined)

		expect(axios.post).toHaveBeenCalledWith("/api/v1/authenticate/logout")
		expect(axios.post).toBeCalledTimes(1)
	})

	test("logout unsuccessfully", async () => {
		const dispatch = jest.fn()
		const thunk = logout()

		axios.post.mockRejectedValueOnce({status: 500})
		await thunk(dispatch, undefined, undefined)

		expect(axios.post).toHaveBeenCalledWith("/api/v1/authenticate/logout")
		expect(axios.post).toBeCalledTimes(1)

		const callSuccessAction = dispatch.mock.calls[1][0]
		expect(callSuccessAction.type).toEqual(dropAction.type)
	})

	afterEach(() => {
		jest.clearAllMocks()
	})

})
