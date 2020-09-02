import {NavLink} from "react-router-dom";
import React from "react";
import s from "./Dialog.module.css"
import {DialogsType} from "../../../Redux/chatReducer";


type PropsType = {
    dialog:DialogsType
}

export function DialogItem(props: PropsType) {
    return (
        <ul>
            <li><NavLink to={"/dialogs/" + props.dialog.id} activeClassName={s.activeLink}>{props.dialog.name}</NavLink></li>
        </ul>
    )
}