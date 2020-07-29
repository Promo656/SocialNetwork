import React from "react";
import './ProfileWall.module.css'
import Message from '../../homework/01-Messages/Message';
import {NewPost} from "./NewPost/NewPost";
import {OldPosts} from "./OldPosts/OldPosts";
import s from "./ProfileWall.module.css"
import {addPost, AppStateType, PostType} from "../../../Redux/state";

type PropsType = {
    state: AppStateType
    addPost: (postText: string) => void
    updateNewPostText: (newText: string) => void
}

export function ProfileWall(props: PropsType) {
    let oldPostsElement = props.state.postPage.map((p) => <OldPosts key={p.id} post={p}/>)
    return (
        <article className={s.post}>
            <h1>My posts</h1>
            <NewPost
                addPost={props.addPost}
                newPostText={props.state.newPostText}
                updateNewPostText={props.updateNewPostText}
            />
            <hr className={s.hr}/>
            {oldPostsElement}
        </article>
    )
}

