import React from "react";
import {addMessage, updateNewMessage,} from "../../Redux/chatReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {StateType} from "../../Redux/redux-store";
import {Redirect} from "react-router-dom";

let mapStateToProps = (state: StateType) => {
    return {
        chatPage: state.chatPage,
    }
}

let AuthRedirectComponent = (props: any) => {
    if (!props.isAuth) {
        return <Redirect to={`/login`}/>
    }
    return <DialogsContainer/>
}

export const DialogsContainer = connect(
    mapStateToProps,
    {
        updateNewMessage,
        addMessage

    }
)(Dialogs)
