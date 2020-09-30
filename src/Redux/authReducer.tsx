export type AuthReducerAT = SetUserDataAT

export type AuthType = {
    id: number
    login: string
    email: string
    isAuth: boolean
}

let initialState: AuthType = {
    id: 0,
    login: "",
    email: "",
    isAuth: false
}

export const authReducer = (state: AuthType = initialState, action: AuthReducerAT) => {
    switch (action.type) {
        case "SET_USER_DATA": {
            return {
                ...state,
                ...action.data,
                isAuth: true

            }
        }
        default:
            return state
    }
}
//--------------------------------------SET-USER-DATA--------------------------------
const SET_USER_DATA = "SET_USER_DATA"
export type SetUserDataAT = {
    type: typeof SET_USER_DATA
    data: AuthType
}
export const setAuthUserData = (data: AuthType): SetUserDataAT => ({
    type: SET_USER_DATA,
    data: data
})