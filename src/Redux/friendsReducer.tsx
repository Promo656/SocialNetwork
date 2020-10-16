import {usersAPI} from "../API/api";

export type FriendsReducerAT =
    FollowAT
    | UnFollowAT
    | SetUsersAT
    | AddFriendAT
    | UpdateNewFriendTextAT
    | SetCurrentPageAT
    | SetTotalUsersCountAT
    | isFetchingAT
    | ButtonProgressAT

export type LocationType = {
    country: string
    city: string
}
export type FriendType = {
    id: number
    name: string
    followed: boolean
    status: string
    location: LocationType
}
export type FriendsPageType = {
    users: FriendType[]
    pageSize: number
    TotalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
    newFriendsText: string
}

let initialState: FriendsPageType = {
    users: [],
    pageSize: 10,
    TotalUsersCount: 100,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
    newFriendsText: ""
}

export const friendsReducer = (state: FriendsPageType = initialState, action: FriendsReducerAT) => {
    switch (action.type) {
        /*        case ADD_FRIEND: {
                    return {
                        ...state, users: state.users = [{
                            id: v1(),
                            name: state.newFriendsText,
                            followed: true,
                            status: "Hello, there!",
                            location:
                                {
                                    country: "Russia",
                                    city: "Moscow"
                                }
                        },
                            ...state.users],
                        newFriendsText: state.newFriendsText = ""
                    }
                }*/
        /*        case UPDATE_NEW_FRIEND_TEXT: {
                    return {...state, newFriendsText: state.newFriendsText = action.newText}
                }*/
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case SET_USERS: {
            return {...state, users: action.users}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.pageNumber}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, TotalUsersCount: action.totalCount}
        }
        case LOADING_ICON: {
            return {...state, isFetching: action.isFetching}
        }
        case DISABLED_BUTTON: {
            return {
                ...state,
                followingInProgress: action.isFetching ?
                    [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter((id) => id != action.userId)
            }
        }
        default:
            return state
    }
}
//--------------------------------------FOLLOW----------------------------------
const FOLLOW = "FOLLOW"
export type FollowAT = {
    type: typeof FOLLOW
    userId: number
}
export const follow = (userId: number): FollowAT => ({
    type: FOLLOW,
    userId: userId
})
//--------------------------------------UNFOLLOW----------------------------------
const UNFOLLOW = "UNFOLLOW"
export type UnFollowAT = {
    type: typeof UNFOLLOW
    userId: number
}
export const unFollow = (userId: number): UnFollowAT => ({
    type: UNFOLLOW,
    userId: userId
})
//--------------------------------------SET_USERS----------------------------------
const SET_USERS = "SET_USERS"
export type SetUsersAT = {
    type: typeof SET_USERS
    users: FriendType[]
}
export const setUsers = (users: FriendType[]): SetUsersAT => ({
    type: SET_USERS,
    users: users
})
//--------------------------------------ADD-FRIEND----------------------------------
const ADD_FRIEND = "ADD-FRIEND"
export type AddFriendAT = {
    type: typeof ADD_FRIEND
}
export const addFriend = (): AddFriendAT =>
    ({type: ADD_FRIEND})
//------------------------------------UPDATE-NEW-FRIEND-TEXT----------------------
const UPDATE_NEW_FRIEND_TEXT = "UPDATE-NEW-FRIEND-TEXT"
export type UpdateNewFriendTextAT = {
    type: typeof UPDATE_NEW_FRIEND_TEXT
    newText: string
}
export const updateNewFriendText = (text: string): UpdateNewFriendTextAT => ({
    type: UPDATE_NEW_FRIEND_TEXT,
    newText: text
})
//------------------------------------SET-CURRENT-PAGE----------------------
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
export type SetCurrentPageAT = {
    type: typeof SET_CURRENT_PAGE
    pageNumber: number
}
export const setCurrentPage = (pageNumber: number): SetCurrentPageAT => ({
    type: SET_CURRENT_PAGE,
    pageNumber: pageNumber
})
//------------------------------------SET-TOTAL-USERS-COUNT----------------------
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT"
export type SetTotalUsersCountAT = {
    type: typeof SET_TOTAL_USERS_COUNT
    totalCount: number
}
export const setTotalUsersCount = (totalCount: number): SetTotalUsersCountAT => ({
    type: SET_TOTAL_USERS_COUNT,
    totalCount: totalCount
})
//------------------------------------Loading----------------------
const LOADING_ICON = "LOADING_ICON"
export type isFetchingAT = {
    type: typeof LOADING_ICON
    isFetching: boolean
}
export const setIsFetching = (isFetching: boolean): isFetchingAT => ({
    type: LOADING_ICON,
    isFetching: isFetching
})
//------------------------------------PROGRESS-BUTTON----------------------
const DISABLED_BUTTON = "DISABLED_BUTTON"
export type ButtonProgressAT = {
    type: typeof DISABLED_BUTTON
    isFetching: boolean
    userId: number
}
export const followingProgressButton = (isFetching: boolean, userId: number): ButtonProgressAT => ({
    type: DISABLED_BUTTON,
    userId: userId,
    isFetching: isFetching
})
//------------------------------------THUNK-GET-USERS----------------------
export const getUsersTC = (currentPage: number, pageSize: number) => {

    return (dispatch: any) => {

        dispatch(setIsFetching(true))
        usersAPI.getUsers(currentPage, pageSize)
            .then(response => {
                    dispatch(setIsFetching(false))
                    dispatch(setUsers(response.items))
                    dispatch(setCurrentPage(currentPage))
                }
            )
    }
}
//------------------------------------THUNK-FOLLOW-----------------------
export const followTC = (userId: number) => {

    return (dispatch: any) => {

        dispatch(followingProgressButton(true, userId))
        usersAPI.follow(userId)
            .then(response => {
                if (response.resultCode === 0) {
                    dispatch(follow(userId))
                }
                dispatch(followingProgressButton(false, userId))
            })
    }
}
//------------------------------------THUNK-UNFOLLOW-----------------------
export const unFollowTC = (userId: number) => {

    return (dispatch: any) => {

        dispatch(followingProgressButton(true, userId))
        usersAPI.unFollow(userId)
            .then(response => {
                if (response.resultCode === 0) {
                    dispatch(unFollow(userId))
                }
                dispatch(followingProgressButton(false, userId))
            })
    }
}