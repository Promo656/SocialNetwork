import React from "react";
import './ProfileWall.module.css'
import Message from '../../homework/01-Messages/Message';
import {NewPost} from "./NewPost/NewPost";
import {OldPosts} from "./OldPosts/OldPosts";
import s from "./ProfileWall.module.css"
import {AppStateType, PostType} from "../../../Redux/state";

type PropsType = {
    state: AppStateType
}

export function ProfileWall(props: PropsType) {
    let func = props.state.postPage.map(() => {
        <OldPosts text={props.state.postPage}/>
    })
    return (
        <article className={s.post}>
            <h1>My posts</h1>
            <NewPost/>
            <hr className={s.hr}/>
            {func}


            {/* <OldPosts text="Hello, everyone!!"/>
            <OldPosts text="It's my first site!"/>*/}
        </article>
    )
}

