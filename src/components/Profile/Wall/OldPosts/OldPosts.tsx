import React from "react";
import {BrowserRouter} from "react-router-dom";
import s from "./OldPosts.module.css"
import {OldPostPropsType} from "../ProfileWall";


export function OldPosts(props:OldPostPropsType) {
    return (
        <section className={s.oldPost}>
            <div className={s.circle}></div>
            <div className={s.oldPostText}>{props.text}</div>
        </section>
    )
}