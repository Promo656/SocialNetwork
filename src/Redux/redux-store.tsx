import {combineReducers, createStore} from "redux";
import {postReducer} from "./postReducer";
import {chatReducer} from "./chatReducer"

let reducers=combineReducers({
    postPage: postReducer,
    chatPage: chatReducer
})

export let store=createStore(reducers)