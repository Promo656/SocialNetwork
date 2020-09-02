import React from "react";
import s from "./OldPosts.module.css"
import {PostType} from "../../../../Redux/postReducer";

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