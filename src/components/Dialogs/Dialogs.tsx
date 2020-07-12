import React from "react";
import s from "./Dialogs.module.css"
import {Message} from "./Messages/Message";
import {DialogItem} from "./DialogsItem/Dialog";

type Props={
    name:string
    id:number
}
export function Dialogs(props:any) {
debugger

  /*  let dialogsItem=props.state.dialogs.map(()=> <DialogItem name={props.state.name} id={props.state.id}/>)*/
    debugger
/*    let messagesItem=props.messages.map(()=> <Message text={props.text}/>)*/

    return (
        <div className={s.container}>
            <div className={s.dialogs}>
              {/*  {dialogsItem}*/}
            </div>
            <div className={s.message}>
                {/*{messagesItem}*/}
            </div>
        </div>
    )
}