import React from "react";
import {addMessage, updateNewMessage,} from "../../Redux/chatReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {StateType} from "../../Redux/redux-store";

let mapStateToProps = (state: StateType) => {
    return {
        chatPage: state.chatPage
    }
}

export const DialogsContainer = connect(
    mapStateToProps,
    {
        updateNewMessage,
        addMessage

    }
)(Dialogs)
