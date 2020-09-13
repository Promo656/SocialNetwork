import {combineReducers, createStore} from "redux";
import {AddPostAT, PostPageType, postReducer, UpdateNewPostTextAT} from "./postReducer";
import {AddMessageAT, ChatPageType, chatReducer, UpdateNewMessageTextAT} from "./chatReducer"
import {FriendsPageType, friendsReducer} from "./friendsReducer";

export type StateType={
    chatPage: ChatPageType
    postPage: PostPageType
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

