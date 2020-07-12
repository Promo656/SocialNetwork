import React from "react";
import {MessageType} from "../../../Redux/state";

type PropsType = {
    message: MessageType
}

export function Message(props: PropsType) {
    return (
        <p>{props.message.text}</p>
    )
}