import React from "react";
import s from "./NewPost.module.css"
import {ActionType, addPostActionCreator, updateNewPostActionCreator} from "../../../../Redux/store";
import {NewPost} from "./NewPost";

type PropsType = {
    dispatch: (action: ActionType) => void
}

export function NewPostContainer(props: PropsType) {

    let newPostElement = React.createRef<HTMLInputElement>()

    let addPost = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value
            let action = addPostActionCreator(text);
            props.dispatch(action)
            newPostElement.current.value = ""
        }
    }

    let onPostChange = (text:string) => {
        if (newPostElement.current) {
            let action = updateNewPostActionCreator(text);
            props.dispatch(action)
        }
    }

    return (
        <div></div>
    )
}