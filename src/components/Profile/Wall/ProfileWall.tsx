import React from "react";
import './ProfileWall.module.css'
import Message from '../../homework/01-Messages/Message';
import {NewPost} from "./NewPost/NewPost";
import {OldPosts} from "./OldPosts/OldPosts";
import s from "./ProfileWall.module.css"
import {ActionType, AppStateType} from "../../../Redux/state";

type PropsType = {
    state: AppStateType
    dispatch: (action: ActionType) => void
}

export function ProfileWall(props: PropsType) {
    let oldPostsElement = props.state.postPage.map((p) => <OldPosts key={p.id} post={p}/>)
    return (
        <div className={s.post}>
            <h1>My posts</h1>
            <NewPost
                dispatch={props.dispatch}
            />
            <hr className={s.hr}/>
            {oldPostsElement}
        </div>
    )
}

