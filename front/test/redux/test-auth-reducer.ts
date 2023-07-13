import AuthReducer, {authAction, AuthState, dropAction} from "../../src/redux/auth-reducer"

describe("Reducer should", () => {

    const data: AuthState = {authorized: false, cardNumber: "", isValidCardNUmber: false}

    test("respond {authorized: true} with login", () => {
        const actual = AuthReducer({...data, authorized: false}, authAction)

        expect(actual).toEqual({authorized: true})
    })

    test("respond {authorized: false} with logout", () => {
        const actual = AuthReducer({...data, authorized: true}, dropAction)

        expect(actual).toEqual({authorized: false})
    })

})
