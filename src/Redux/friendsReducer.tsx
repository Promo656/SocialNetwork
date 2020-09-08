import {v1} from "uuid";

export type FriendsReducerAT =
    AddFriendActionType | UpdateNewFriendTextActionType

export type LocationType = {
    country: string
    city: string
}
export type FriendType = {
    id: string
    name: string
    followed: boolean
    status: string
    location: LocationType[]
}
export type FriendsPageType = {
    friends: FriendType[]
    newFriendsText: string
}

let initialState: FriendsPageType = {
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
            name: "Goshaaaa",
            followed: false,
            status: "Hello, boys!",
            location: 
                {
                    country: "USA",
                    city: "NY"
                }
        }
    ],
    newFriendsText: ""
}

export const friendsReducer = (state: FriendsPageType = initialState, action: FriendsReducerAT) => {
    switch (action.type) {
        case ADD_FRIEND: {
            let stateCopy = {...state}
            stateCopy.friends = [{
                id: v1(),
                name: state.newFriendsText,
                followed: true,
                status: "Hello, there!",
                location: [
                    {
                        country: "Russia",
                        city: "Moscow"
                    }
                ]
            }, ...state.friends]
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