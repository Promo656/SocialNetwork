import React from "react";
import {addMessageActionCreator, updateNewMessageActionCreator,} from "../../Redux/chatReducer";
import {AppStateType} from './../../Redux/store'
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";

let mapStateToProps = (state: AppStateType) => {
    return {
        chatPage: state.chatPage
    }
}
let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageActionCreator())
        },
        onMessageChange: (text: string) => {
            dispatch(updateNewMessageActionCreator(text))
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
