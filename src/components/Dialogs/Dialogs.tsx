import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css"
import {Message} from "./Messages/Message";
import {DialogItem} from "./DialogsItem/Dialog";
import {addMessageActionCreator, updateNewMessageActionCreator,} from "../../Redux/chatReducer";
import {ActionType, AppStateType, ChatPageType, DialogsType, MessageType} from './../../Redux/store'

type PropsType = {
    store: ChatPageType
    addMessage: () => void
    onMessageChange: (text: string) => void
}

export function Dialogs(props: PropsType) {

    let chatItem = props.store.dialogs.map((d) => <DialogItem key={d.id} dialog={d}/>)
    let messageItem = props.store.messages.map((m) => <Message key={m.id} message={m}/>)

    let addMessage = () => {
        props.addMessage()
    }

    let onMessageChange = (e: ChangeEvent<HTMLInputElement>) => {
        let text = e.currentTarget.value
        props.onMessageChange(text)
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
                    value={props.store.newMessageText}
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