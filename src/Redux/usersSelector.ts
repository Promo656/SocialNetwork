import {StateType} from "./redux-store";

export const getUsers=(state:StateType)=>{
    return state.friendsPage.users
}

export const getPageSize=(state:StateType)=>{
    return state.friendsPage.pageSize
}

export const getTotalUsersCount=(state:StateType)=>{
    return state.friendsPage.TotalUsersCount
}

export const getCurrentPage=(state:StateType)=>{
    return state.friendsPage.currentPage
}

export const getFollowingInProgress=(state:StateType)=>{
    return state.friendsPage.followingInProgress
}

export const getIsFetching=(state:StateType)=>{
    return state.friendsPage.newFriendsText
}