import React from "react";
import s from "./Dialogs.module.css"
import {Message} from "./Messages/Message";
import {DialogItem} from "./DialogsItem/Dialog";
import {ChatPageType} from "../../Redux/chatReducer";
import {NewMessageReduxForm} from "./AddMessageForm";

type PropsType = {
    chatPage: ChatPageType
    addMessage: (newMessage:string) => void
}

export function Dialogs(props: PropsType) {
    
    let chatItem = props.chatPage.dialogs.map((d) =>
        <DialogItem key={d.id} dialog={d}/>)
    let messageItem = props.chatPage.messages.map((m) =>
        <Message key={m.id} message={m}/>)

    const addNewMessage=(formData:any)=>{
        props.addMessage(formData.newMessage)
    }

    return (
        <div className={s.container}>
            <div className={s.dialogs}>
                {chatItem}
            </div>
            <div className={s.message}>
                {messageItem}
                <NewMessageReduxForm onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}

