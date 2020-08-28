import React from "react";
import './ProfileWall.module.css'
import Message from '../../homework/01-Messages/Message';
import {NewPost} from "./NewPost/NewPost";
import {OldPosts} from "./OldPosts/OldPosts";
import s from "./ProfileWall.module.css"
import {ActionType, AppStateType, StoreType} from "../../../Redux/store";
import {NewPostContainer} from "./NewPost/NewPostContainer";

type PropsType = {
    store: StoreType
    dispatch: (action: ActionType) => void
}

export function ProfileWall(props: PropsType) {
    let oldPostsElement = props.store.getState((p) => <OldPosts key={p.id} post={p}/>)
    return (
        <div className={s.post}>
            <h1>My posts</h1>
            <NewPostContainer
                store={props.}
            />
            <hr className={s.hr}/>
            {oldPostsElement}
        </div>
    )
}

