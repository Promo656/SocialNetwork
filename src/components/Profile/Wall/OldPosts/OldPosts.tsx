import React from "react";
import {BrowserRouter} from "react-router-dom";
import s from "./OldPosts.module.css"
/*import {PropsType} from "../ProfileWall";*/
import {PostType} from "../../../../Redux/state";
type PropsType={
    post:PostType
}

export function OldPosts(props:PropsType) {
    return (
        <section className={s.oldPost}>
            <div className={s.circle}></div>
            <div className={s.oldPostText}>{props.post.text}</div>
        </section>
    )
}