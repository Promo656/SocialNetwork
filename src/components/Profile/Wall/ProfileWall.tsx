import React from "react";
import './ProfileWall.module.css'
import {OldPosts} from "./OldPosts/OldPosts";
import s from "./ProfileWall.module.css"
import {AppStateType, PostPageType, PostType} from "../../../Redux/store";
import {NewPostContainer} from "./NewPost/NewPostContainer";

type PropsType = {
    posts: PostType[]
}

export function ProfileWall(props: PropsType) {

    let oldPostsElement = props.posts.map((p) => <OldPosts key={p.id} post={p}/>)
    return <div className={s.post}>
        <h1>My posts</h1>
        <NewPostContainer/>
        <hr className={s.hr}/>
        {oldPostsElement}
    </div>
}


