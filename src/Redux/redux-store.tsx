import {combineReducers, createStore} from "redux";
import {AddPostActionType, PostPageType, postReducer, UpdateNewPostTextActionType} from "./postReducer";
import {AddMessageActionType, ChatPageType, chatReducer, UpdateNewMessageTextActionType} from "./chatReducer"
import {AddFriendActionType, FriendsPageType, friendsReducer, UpdateNewFriendTextActionType} from "./friendsReducer";

export type StateType={
    chatPage: ChatPageType
    postPage: PostPageType
    friendsPage: FriendsPageType
}

export type ActionType =
    AddMessageActionType
    | UpdateNewPostTextActionType
    | AddPostActionType
    | UpdateNewMessageTextActionType
    | AddFriendActionType
    | UpdateNewFriendTextActionType

let reducers = combineReducers({
    postPage: postReducer,
    chatPage: chatReducer,
    friendsPage: friendsReducer,
})

export let store = createStore(reducers)

