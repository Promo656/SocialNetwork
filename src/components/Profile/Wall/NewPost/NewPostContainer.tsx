import React from "react";
import {ActionType, AppStateType} from './../../../../Redux/store'
import {NewPost} from "./NewPost";
import {addPostActionCreator, updateNewPostActionCreator} from "../../../../Redux/postReducer";

type PropsType = {
    dispatch: (action: ActionType) => void
    state: AppStateType
}

export function NewPostContainer(props: PropsType) {

    let onPostChange=(text:string)=>{
        let action = updateNewPostActionCreator(text);
        props.dispatch(action)
        props.state.postPage.newPostText=""
    }

    let addPost=()=>{
        let action = addPostActionCreator();
        props.dispatch(action)
    }

    return (
        <div>
            <NewPost onPostChange={onPostChange} addPost={addPost}/>
        </div>
    )
}