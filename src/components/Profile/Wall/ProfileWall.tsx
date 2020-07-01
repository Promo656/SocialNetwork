import React from "react";
import './ProfileWall.css'
import Message from '../../homework/01-Messages/Message';
import {NewPost} from "./NewPost/NewPost";
import {OldPosts} from "./OldPosts/OldPosts";

export function ProfileWall() {
    return (
        <>
            <article className='post'>
                <h1>My posts</h1>
                <NewPost/>
                <hr className='hr'/>
                <OldPosts/>
                <OldPosts/>
            </article>
        </>
    )
}

