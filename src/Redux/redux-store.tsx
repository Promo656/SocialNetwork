import {combineReducers, createStore} from "redux";
import {postReducer} from "./postReducer";
import {chatReducer} from "./chatReducer"
import {friendsReducer} from "./friendsReducer";
import {groupReducer} from "./groupsReducer";


let reducers=combineReducers({
    postPage: postReducer,
    chatPage: chatReducer,
    friendsPage: friendsReducer,
    groupPage: groupReducer
})

export let store=createStore(reducers)