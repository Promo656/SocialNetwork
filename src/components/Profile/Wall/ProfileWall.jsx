import React from "react";
import './ProfileWall.css'
import Message from './../../../homework/Message';
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
                <Message name='Egor' text='Hello, my friends! It is my first homework! ' time='13:38'/>
            </article>
        </>
    )
}

