import React from "react";
import {combineReducers, createStore} from "redux";
import {profileReducer, ProfilePageType} from "./profileReducer";
import {chatReducer, ChatPageType} from "./chatReducer"
import {friendsReducer, FriendsPageType} from "./friendsReducer";
import {authReducer, AuthType} from "./authReducer";

export type StateType = {
    profilePage: ProfilePageType
    chatPage: ChatPageType
    friendsPage: FriendsPageType
    auth: AuthType
}

let reducers = combineReducers({
    profilePage: profileReducer,
    chatPage: chatReducer,
    friendsPage: friendsReducer,
    auth: authReducer
})

export let store = createStore(reducers)

// @ts-ignore
window.store = store

