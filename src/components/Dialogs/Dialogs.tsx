import React from "react";
import s from "./Dialogs.module.css"
import {Message} from "./Messages/Message";
import {DialogItem} from "./DialogsItem/Dialog";
import {addMessageActionCreator, updateNewMessageActionCreator,} from "../../Redux/chatReducer";
import {ActionType, AppStateType} from './../../Redux/store'

type PropsType = {
    state: AppStateType
    dispatch: (action: ActionType) => void
}

export function Dialogs(props: PropsType) {

    let chatItem = props.state.chatPage.dialogs.map((d) => <DialogItem key={d.id} dialog={d}/>)
    let messageItem = props.state.chatPage.messages.map((m) => <Message key={m.id} message={m}/>)
    let newTextElement = React.createRef<HTMLInputElement>()

    let addMessage = () => {
        if (newTextElement.current) {
            let text = newTextElement.current.value
            let action = addMessageActionCreator()
            props.dispatch(action)
            newTextElement.current.value = ""
        }
    }

    let onMessageChange = () => {
        if (newTextElement.current) {
            let text = newTextElement.current.value
            let action = updateNewMessageActionCreator(text);
            props.dispatch(action)
        }
    }

    return (
        <div className={s.container}>
            <div className={s.dialogs}>
                {chatItem}
            </div>
            <div className={s.message}>
                {messageItem}
                <input
                    type="text"
                    ref={newTextElement}
                    onChange={onMessageChange}
                />
                <input
                    type="button"
                    value="sent"
                    onClick={addMessage}/>
            </div>
        </div>
    )
}