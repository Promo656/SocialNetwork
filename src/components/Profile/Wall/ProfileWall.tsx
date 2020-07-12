import React from "react";
import './ProfileWall.module.css'
import Message from '../../homework/01-Messages/Message';
import {NewPost} from "./NewPost/NewPost";
import {OldPosts} from "./OldPosts/OldPosts";
import s from "./ProfileWall.module.css"
export type OldPostPropsType={
    text:string
}

export function ProfileWall(props:any) {
    return (
        <article className={s.post}>
            <h1>My posts</h1>
            <NewPost/>
            <hr className={s.hr}/>
            <OldPosts text="Hello, everyone!!"/>
            <OldPosts text="It's my first site!"/>
        </article>
    )
}

