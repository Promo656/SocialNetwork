import React from "react";
import s from "./Dialogs.module.css"
import {Message} from "./Messages/Message";
import {DialogItem} from "./DialogsItem/Dialog";
import {addMessageActionCreator, updateNewMessageActionCreator,} from "../../Redux/chatReducer";
import {ActionType, AppStateType, StoreType} from './../../Redux/store'
import {Container} from "@material-ui/core";
import {Dialogs} from "./Dialogs";

type PropsType = {
    store: StoreType
}

export function DialogsContainer(props: PropsType) {

    let newTextElement = React.createRef<HTMLInputElement>()

    let addMessage = () => {
        let action = addMessageActionCreator()
        props.store.dispatch(action)
        props.store.getState().chatPage.newMessageText = ""
    }

    let onMessageChange = (text: string) => {
        let action = updateNewMessageActionCreator(text);
        props.store.dispatch(action)
    }

    return (
            <Dialogs
                addMessage={addMessage}
                onMessageChange={onMessageChange}
                store={props.store.getState().chatPage}
            />
    )
}