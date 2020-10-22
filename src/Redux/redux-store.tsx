import React from "react";
import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {chatReducer} from "./chatReducer"
import {friendsReducer} from "./friendsReducer";
import {authReducer} from "./authReducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from 'redux-form'
import {AppReducer} from "./AppReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    chatPage: chatReducer,
    friendsPage: friendsReducer,
    auth: authReducer,
    app:AppReducer,
    form: formReducer
})

export type StateType = ReturnType<typeof reducers>

export let store = createStore(reducers, applyMiddleware(thunkMiddleware))

// @ts-ignore
window.store = store

