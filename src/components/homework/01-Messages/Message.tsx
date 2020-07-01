import React from "react";
import s from './Message.module.css'

type MessageType = {
    name: string,
    text: string,
    time: string
}

function Message(props: MessageType) {
    return (
        <div className={s.messageBlock}>
            <img className={s.messageLogo} src="https://fanparty.ru/fanclubs/tom-kruz/gallery/1851014_tom_kruz.jpg"
                 alt=""/>
            <div className={s.message}>
                <div className={s.name}>{props.name}</div>
                <div className={s.text}>{props.text}</div>
                <div className={s.time}>{props.time}</div>
                <div className={s.tail}></div>
            </div>
        </div>

)
}

export default Message;