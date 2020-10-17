import React from "react";
import {addMessage, updateNewMessage,} from "../../Redux/chatReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {StateType} from "../../Redux/redux-store";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";


let mapStateToProps = (state: StateType) => {
    return {
        chatPage: state.chatPage,
    }
}

let AuthComponent=withAuthRedirect(Dialogs)

export let DialogsContainer= connect(
        mapStateToProps,
        {
            updateNewMessage,
            addMessage
        }
    )
(AuthComponent)

