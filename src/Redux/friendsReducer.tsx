import {v1} from "uuid";

export type FriendsReducerAT = FollowAT | UnFollowAT | SetUsersAT

export type LocationType = {
    country: string
    city: string
}
export type FriendType = {
    id: string
    name: string
    followed: boolean
    status: string
    location: LocationType
}
export type FriendsPageType = {
    users: FriendType[]
}

let initialState: FriendsPageType = {
    users: [
        {
            id: v1(),
            name: "Valera",
            followed: true,
            status: "Hello, there!",
            location: {
                country: "Russia",
                city: "Moscow"
            }
        }
    ]
}

/*export const friendsReducer = (state: FriendsPageType = initialState, action: FriendsReducerAT) => {
    switch (action.type) {
        case ADD_FRIEND: {
            let stateCopy = {...state}
            stateCopy.friends = [{
                id: v1(),
                name: state.newFriendsText,
                followed: true,
                status: "Hello, there!",
                location:
                    {
                        country: "Russia",
                        city: "Moscow"
                    }
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
export type AddFriendAT = {
    type: "ADD-FRIEND"
 //   newText: string
}
export const addFriendActionCreator = (): AddFriendAT =>
    ({type: ADD_FRIEND})
//------------------------------------UPDATE-NEW-FRIEND-TEXT----------------------
const UPDATE_NEW_FRIEND_TEXT = "UPDATE-NEW-FRIEND-TEXT"
export type UpdateNewFriendTextAT = {
    type: "UPDATE-NEW-FRIEND-TEXT"
    newText: string
}
export const updateNewFriendTextActionCreator = (text: string): UpdateNewFriendTextAT =>
    ({type: UPDATE_NEW_FRIEND_TEXT, newText: text})*/

export const friendsReducer = (state: FriendsPageType = initialState, action: FriendsReducerAT) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: [...state.users.map((u) => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                })]
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: [...state.users.map((u) => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                })]
            }
        }
        case SET_USERS: {
            return {...state, users: [...state.users, ...action.users]}
        }
        default:
            return state
    }
}
//--------------------------------------FOLLOW----------------------------------
const FOLLOW = "FOLLOW"
export type FollowAT = {
    type: typeof FOLLOW
    userId: string
}
export const FollowAC = (userId: string): FollowAT => ({
    type: FOLLOW,
    userId: userId
})
//--------------------------------------UNFOLLOW----------------------------------
const UNFOLLOW = "UNFOLLOW"
export type UnFollowAT = {
    type: typeof UNFOLLOW
    userId: string
}
export const UnFollowAC = (userId: string): UnFollowAT => ({
    type: UNFOLLOW,
    userId: userId
})
//--------------------------------------SET_USERS----------------------------------
const SET_USERS = "SET_USERS"
export type SetUsersAT = {
    type: typeof SET_USERS
    users: FriendType[]
}
export const SetUsersAC = (users: FriendType[]): SetUsersAT => ({
    type: SET_USERS,
    users: users
})
