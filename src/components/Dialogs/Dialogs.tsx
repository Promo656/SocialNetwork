import React from "react";
import s from "./Dialogs.module.css"
import {Message} from "./Messages/Message";
import {DialogItem} from "./DialogsItem/Dialog";

export function Dialogs() {
    return (
        <div className={s.container}>
            <div className={s.dialogs}>
                <DialogItem name="Valera" id={1}/>
                <DialogItem name="Gosha" id={2}/>
                <DialogItem name="Ilya" id={3}/>
            </div>
            <div className={s.message}>
                <Message text="Hello"/>
                <Message text="Bro"/>
            </div>
        </div>
    )
}