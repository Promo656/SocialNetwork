import React from "react";
import {FollowAC, FriendType, SetUsersAC, UnFollowAC} from "../../Redux/friendsReducer";
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
        Follow: (userId:string) => {
            dispatch(FollowAC(userId))
        },
        UnFollow: (userId:string) => {
            dispatch(UnFollowAC(userId))
        },
        setUsers:(users:FriendType[])=>{
            dispatch(SetUsersAC(users))
        }
    }
}

export const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends)