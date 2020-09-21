import React from "react";
import {combineReducers, createStore} from "redux";
import {AddPostAT, PostPageType, postReducer, UpdateNewPostTextAT} from "./postReducer";
import {AddMessageAT, ChatPageType, chatReducer, UpdateNewMessageTextAT} from "./chatReducer"
import {FriendsPageType, friendsReducer} from "./friendsReducer";

export type StateType = {
    profilePage: PostPageType
    chatPage: ChatPageType
    friendsPage: FriendsPageType
}

export type ActionType =
    AddMessageAT
    | UpdateNewPostTextAT
    | AddPostAT
    | UpdateNewMessageTextAT

let reducers = combineReducers({
    postPage: postReducer,
    chatPage: chatReducer,
    friendsPage: friendsReducer,
})

export let store = createStore(reducers)

