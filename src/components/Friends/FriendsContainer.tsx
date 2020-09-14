import React from "react";
import {
    addFriendAC,
    FollowAC,
    FriendType,
    SetUsersAC,
    UnFollowAC,
    updateNewFriendTextAC
} from "../../Redux/friendsReducer";
import {Friends} from "./Friends";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {StateType} from "../../Redux/redux-store";

let mapStateToProps = (state: StateType) => {
    debugger
    return {
        friendsPage: state.friendsPage
    }
}

let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addFriend:()=>{
          dispatch(addFriendAC())
        },
        updateNewFriendText:(text:string)=>{
           dispatch(updateNewFriendTextAC(text))
    },
        follow: (userId:string) => {
            dispatch(FollowAC(userId))
        },
        unFollow: (userId:string) => {
            dispatch(UnFollowAC(userId))
        },
        setUsers:(users:FriendType[])=>{
            dispatch(SetUsersAC(users))
        }
    }
}

export const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends)