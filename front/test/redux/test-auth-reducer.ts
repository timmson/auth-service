import AuthReducer, {authAction, AuthState, dropAction, updateCardNumber} from "../../src/redux/auth-reducer"

describe("AuthReducer should", () => {

	const data: AuthState = {authorized: false, cardNumber: "", isValidCardNumber: false}

	test("respond {authorized: true} with login", () => {
		const actual = AuthReducer({...data, authorized: false}, authAction())

		expect(actual).toEqual({...data, authorized: true})
	})

	test("respond {authorized: false} with logout", () => {
		const actual = AuthReducer({...data, authorized: true}, dropAction())

		expect(actual).toEqual({...data, authorized: false})
	})

	test("updateCardNumber", () => {
		const actual = AuthReducer(data, updateCardNumber("2222"))

		expect(actual).toEqual({...data, cardNumber: "2222", isValidCardNumber: false})
	})

})
