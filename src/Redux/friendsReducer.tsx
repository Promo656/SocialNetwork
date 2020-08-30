import {ActionType, FriendsPageType} from "./store";
import {v1} from "uuid";

let itialState = {
    friends: [
        {id: v1(), name: "Valera"},
        {id: v1(), name: "Gosha"},
        {id: v1(), name: "Ilya"},
        {id: v1(), name: "Yura"}
    ],
    newFriendsText: ""
}

export const friendsReducer = (state: FriendsPageType = itialState, action: ActionType) => {
    switch (action.type) {
        case ADD_FRIEND: {
            let newFriend = {id: v1(), name: state.newFriendsText}
            let stateCopy = {...state}
            stateCopy.friends = [...state.friends]
            stateCopy.friends.unshift(newFriend)
            stateCopy.newFriendsText = ""
            return stateCopy
        }
        case UPDATE_NEW_FRIEND_TEXT: {
            let stateCopy={...state}
            stateCopy.newFriendsText = action.newText
            return stateCopy
        }
        default:
            return state
    }
}
//--------------------------------------ADD-FRIEND----------------------------------
const ADD_FRIEND = "ADD-FRIEND"
export type AddFriendActionType = {
    type: "ADD-FRIEND"
//    newText: string
}
export const addFriendActionCreator = (): AddFriendActionType =>
    ({type: ADD_FRIEND})
//------------------------------------UPDATE-NEW-FRIEND-TEXT----------------------
const UPDATE_NEW_FRIEND_TEXT = "UPDATE-NEW-FRIEND-TEXT"
export type UpdateNewFriendTextActionType = {
    type: "UPDATE-NEW-FRIEND-TEXT"
    newText: string
}
export const updateNewFriendTextActionCreator = (text: string): UpdateNewFriendTextActionType =>
    ({type: UPDATE_NEW_FRIEND_TEXT, newText: text})