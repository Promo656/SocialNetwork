import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css"
import {Message} from "./Messages/Message";
import {DialogItem} from "./DialogsItem/Dialog";
import {ChatPageType} from "../../Redux/chatReducer";
import { Redirect } from "react-router-dom";

type PropsType = {
    chatPage: ChatPageType
    addMessage: () => void
    updateNewMessage: (text: string) => void
}

export function Dialogs(props: PropsType) {
    
    let chatItem = props.chatPage.dialogs.map((d) =>
        <DialogItem key={d.id} dialog={d}/>)
    let messageItem = props.chatPage.messages.map((m) =>
        <Message key={m.id} message={m}/>)

    let addMessage = () => {
        props.addMessage()
    }

    let onMessageChange = (e: ChangeEvent<HTMLInputElement>) => {
        let text = e.currentTarget.value
        props.updateNewMessage(text)
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
                    value={props.chatPage.newMessageText}
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