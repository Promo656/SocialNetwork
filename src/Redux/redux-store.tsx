import React from "react";
import {combineReducers, createStore} from "redux";
import {AddPostAT, ProfilePageType, profileReducer, UpdateNewPostTextAT} from "./profileReducer";
import {AddMessageAT, ChatPageType, chatReducer, UpdateNewMessageTextAT} from "./chatReducer"
import {FriendsPageType, friendsReducer} from "./friendsReducer";
import {authReducer, AuthType} from "./authReducer";

export type StateType = {
    profilePage: ProfilePageType
    chatPage: ChatPageType
    friendsPage: FriendsPageType
    auth:AuthType
}

export type ActionType =
    AddMessageAT
    | UpdateNewPostTextAT
    | AddPostAT
    | UpdateNewMessageTextAT

let reducers = combineReducers({
    profilePage: profileReducer,
    chatPage: chatReducer,
    friendsPage: friendsReducer,
    auth:authReducer
})

export let store = createStore(reducers)

// @ts-ignore
window.store = store

