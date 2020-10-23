import {setAuthUserDataTC} from "./authReducer";

export type AuthReducerAT = SetInitializedAT

export type initializedType = {
    initialized: boolean
}

let initialState: initializedType = {
    initialized: false
}

export const AppReducer = (state: initializedType = initialState, action: AuthReducerAT) => {
    switch (action.type) {
        case "SET-INITIALIZED": {
            return {
                ...state,
                initialized: true
            }
        }
        default:
            return state
    }
}
//--------------------------------------SET-INITIALIZED-AC-------------------------------
const SET_INITIALIZED = "SET-INITIALIZED"
export type SetInitializedAT = {
    type: typeof SET_INITIALIZED
}
export const setInitializedAC = (): SetInitializedAT => ({
    type: SET_INITIALIZED
})
//--------------------------------------SET-INITIALIZED-TC-------------------------------
export const initializeAppTC = () => (dispatch: any) => {
    dispatch(setAuthUserDataTC())
        .then(() => {
            dispatch(setInitializedAC())
        })
}