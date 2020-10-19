import {usersAPI} from "../API/api";

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
                ...action.payload
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
    payload: AuthType
}
export const setAuthUserData = ({id, login, email, isAuth}: AuthType): SetUserDataAT => ({
    type: SET_USER_DATA,
    payload: {id, login, email, isAuth}
})
//--------------------------------------THUNK-SET-USER-DATA--------------------------------
export const setAuthUserDataTC = () => {

    return (dispatch: any) => {

        usersAPI.authMe()
            .then(response => {
                if (response.resultCode === 0) {
                    let {id, login, email} = response.data
                    dispatch(setAuthUserData({id, login, email, isAuth: true}))
                }
            })
    }
}
//-------------------------------------THUNK-LOGIN--------------------------------
export const loginTC = (email: string, password: string, rememberMe: boolean) => {
    debugger
    return (dispatch: any) => {

        usersAPI.login(email, password, rememberMe)
            .then(response => {
                if (response.resultCode === 0) {
                    dispatch(setAuthUserDataTC())
                }
            })
    }
}
//-------------------------------------THUNK-LOGOUT--------------------------------
export const logoutTC = () => {
    debugger
    return (dispatch: any) => {
        usersAPI.logout()
            .then(response => {
                let {id = 0, login = "", email = "", isAuth = false} = response.data
                dispatch(setAuthUserData({id, login, email, isAuth}))
                debugger
            })
    }
}