import React from "react";
import {addMessage} from "../../Redux/chatReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {StateType} from "../../Redux/redux-store";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {getChatPage} from "../../Redux/usersSelector";


let mapStateToProps = (state: StateType) => {
    return {
        chatPage: getChatPage(state)
    }
}

let AuthComponent=withAuthRedirect(Dialogs)

export let DialogsContainer= connect(
        mapStateToProps,
        {
            addMessage
        }
    )
(AuthComponent)

