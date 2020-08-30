import React from "react";
import {addFriendActionCreator, updateNewFriendTextActionCreator} from "../../Redux/friendsReducer";
import {Friends} from "./Friends";
import {AppStateType} from "../../Redux/store";
import {Dispatch} from "redux";
import {connect} from "react-redux";

let mapStateToProps = (state: AppStateType) => {
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
            dispatch(addFriendActionCreator())
        }
    }
}

export const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends)