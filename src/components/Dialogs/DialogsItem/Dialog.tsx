import {NavLink} from "react-router-dom";
import React from "react";

type DialogItemProps = {
    name: string
    id: number

}

export function DialogItem(props: DialogItemProps) {
    return (
        <ul>
            <li><NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink></li>
        </ul>
    )
}