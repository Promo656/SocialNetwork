import {NavLink} from "react-router-dom";
import React from "react";
import {DialogsType} from "../../../Redux/state";

type PropsType = {
    dialog:DialogsType

}

export function DialogItem(props: PropsType) {
    return (
        <ul>
            <li><NavLink to={"/dialogs/" + props.dialog.id}>{props.dialog.name}</NavLink></li>
        </ul>
    )
}