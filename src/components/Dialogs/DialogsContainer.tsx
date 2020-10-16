import React from "react";
import {addMessage, updateNewMessage,} from "../../Redux/chatReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {StateType} from "../../Redux/redux-store";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state: StateType) => {
    return {
        chatPage: state.chatPage,
    }
}

export default compose(
    connect(
        mapStateToProps,
        {
            updateNewMessage,
            addMessage
        }
    ),
    withAuthRedirect
)(Dialogs)

