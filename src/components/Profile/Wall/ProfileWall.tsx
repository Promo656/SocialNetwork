import React from "react";
import './ProfileWall.module.css'
import Message from '../../homework/01-Messages/Message';
import {NewPost} from "./NewPost/NewPost";
import {OldPosts} from "./OldPosts/OldPosts";
import s from "./ProfileWall.module.css"
import {ActionType, AppStateType, StoreType} from "../../../Redux/store";
import {NewPostContainer} from "./NewPost/NewPostContainer";
import {StoreContext} from "../../../StoreContext";

/*type PropsType = {
    store: StoreType
}*/

export function ProfileWall() {


    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let oldPostsElement = store.getState().postPage.posts.map((p) => <OldPosts key={p.id} post={p}/>)
                    return <div className={s.post}>
                        <h1>My posts</h1>
                        <NewPostContainer/>
                        <hr className={s.hr}/>
                        {oldPostsElement}
                    </div>
                }
            }
        </StoreContext.Consumer>

    )
}

