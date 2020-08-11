import React from "react";
import {MessageType} from "../../../Redux/store";

type PropsType = {
    message: MessageType
}

export function Message(props: PropsType) {
    return (
        <div>
        <p>{props.message.MessageText}</p>
        </div>
    )
}