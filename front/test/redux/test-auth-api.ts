import axios from "axios"
import {healthCheck, login} from "../../src/redux/auth-api"
import {AnyAction} from "@reduxjs/toolkit"
import {authAction, dropAction} from "../../src/redux/auth-reducer"

jest.mock("axios")

describe("API should", () => {

    const data = {id: 1, firstName: "", lastName: ""}

    beforeEach(() => {
        jest.clearAllMocks()
    })

    test("check successfully", async () => {
        (axios.get as jest.Mock).mockResolvedValue({status: 200, data: data})

        await healthCheck((action: AnyAction) => expect(action).toEqual(authAction(data)))

        expect(axios.get).toHaveBeenCalledWith("/api/v1/private/healthcheck")
        expect.assertions(2)
    })

    test("check unsuccessfully", async () => {
        (axios.get as jest.Mock).mockRejectedValue({response: {status: 403}})

        await healthCheck((action: AnyAction) => expect(action).toEqual(dropAction()))

        expect(axios.get).toHaveBeenCalledWith("/api/v1/private/healthcheck")
        expect.assertions(2)
    })

    test("login successfully", async () => {
        (axios.post as jest.Mock).mockResolvedValue({status: 200})
        axios.get.mockResolvedValue({status: 200, data: data})

        await login((action: AnyAction) => expect(action).toEqual(authAction(data)))

        expect(axios.post).toHaveBeenCalledWith("/api/v1/authenticate/login")
        expect.assertions(2)
    })

    test("login unsuccessfully", async () => {
        (axios.post as jest.Mock).mockRejectedValue({response: {status: 403}})

        await login((action: AnyAction) => expect(action).toEqual(dropAction()))

        expect(axios.post).toHaveBeenCalledWith("/api/v1/authenticate/login")
        expect.assertions(2)
    })


})
