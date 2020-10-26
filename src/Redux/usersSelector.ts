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

export const getProfile=(state:StateType)=>{
    return state.profilePage.profile
}

export const getUserId=(state:StateType)=>{
    return state.auth.id
}

export const getIsAuth=(state:StateType)=>{
    return state.auth.isAuth
}

export const getLogin=(state:StateType)=>{
    return state.auth.login
}

export const getPosts=(state:StateType)=>{
    return state.profilePage.posts
}

export const getProfilePage=(state:StateType)=>{
    return state.profilePage
}

export const getChatPage=(state:StateType)=>{
    return state.chatPage
}