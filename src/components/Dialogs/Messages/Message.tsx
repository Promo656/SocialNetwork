import React from "react";
type MessageProps={
    text:string
}
export function Message(props: MessageProps) {
    return (
        <p>{props.text}</p>
    )
}