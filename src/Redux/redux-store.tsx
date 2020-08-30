import {combineReducers, createStore} from "redux";
import {postReducer} from "./postReducer";
import {chatReducer} from "./chatReducer"
import {friendsReducer} from "./friendsReducer";

let reducers=combineReducers({
    postPage: postReducer,
    chatPage: chatReducer,
    friendsPage: friendsReducer,
})

export let store=createStore(reducers)

