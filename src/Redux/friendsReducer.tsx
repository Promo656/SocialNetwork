import {ActionType, FriendsPageType} from "./store";
import {v1} from "uuid";

let itialState = {
    friends: [
        {
            id: v1(),
            name: "Valera",
            followed: true,
            status: "Hello, there!",
            location: {
                country: "Russia",
                city: "Moscow"
            }
        },
        {
            id: v1(),
            name: "Gosha",
            followed: false,
            status: "Hello, boys!",
            location: {
                country: "Russia",
                city: "Vologda"
            }
        }
    ],
    newFriendsText: ""
}

export const friendsReducer = (state: FriendsPageType = itialState, action: ActionType) => {
    switch (action.type) {
        case ADD_FRIEND: {
            let stateCopy = {...state}
            stateCopy.friends = [{id: v1(), name: state.newFriendsText}, ...state.friends]
            stateCopy.newFriendsText = ""
            return stateCopy
        }
        case UPDATE_NEW_FRIEND_TEXT: {
            let stateCopy = {...state}
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