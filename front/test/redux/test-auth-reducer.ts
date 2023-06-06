import AuthReducer, {authAction, dropAction} from "../../src/redux/auth-reducer"

describe("Reducer should", () => {

	test("respond {authorized: true} with login", () => {
		const actual = AuthReducer({authorized: false}, authAction)

		expect(actual).toEqual({authorized: true})
	})

	test("respond {authorized: false} with logout", () => {
		const actual = AuthReducer({authorized: true}, dropAction)

		expect(actual).toEqual({authorized: false})
	})

})
