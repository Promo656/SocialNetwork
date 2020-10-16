import React from "react";
import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer, ProfilePageType} from "./profileReducer";
import {chatReducer, ChatPageType} from "./chatReducer"
import {friendsReducer, FriendsPageType} from "./friendsReducer";
import {authReducer, AuthType} from "./authReducer";
import thunkMiddleware from "redux-thunk";

// export type StateType = {
//     profilePage: ProfilePageType
//     chatPage: ChatPageType
//     friendsPage: FriendsPageType
//     auth: AuthType
// }

let reducers = combineReducers({
    profilePage: profileReducer,
    chatPage: chatReducer,
    friendsPage: friendsReducer,
    auth: authReducer
})

export type StateType = ReturnType<typeof reducers>

export let store = createStore(reducers, applyMiddleware(thunkMiddleware))

// @ts-ignore
window.store = store

