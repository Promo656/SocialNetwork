import React from "react";
import {addFriendActionCreator, updateNewFriendTextActionCreator} from "../../Redux/friendsReducer";
import {Friends} from "./Friends";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {StateType} from "../../Redux/redux-store";

let mapStateToProps = (state: StateType) => {
    return {
        friendsPage: state.friendsPage
    }
}

let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        onTextFriendChange: (text: string) => {
            dispatch(updateNewFriendTextActionCreator(text))
        },
        addFriend: () => {
            debugger
            dispatch(addFriendActionCreator())
        }
    }
}

export const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends)