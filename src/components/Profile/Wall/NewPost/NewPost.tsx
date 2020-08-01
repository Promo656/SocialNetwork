import React from "react";
import s from "./NewPost.module.css"
import {ActionType, addPostActionCreator, updateNewPostActionCreator} from "../../../../Redux/state";

type PropsType = {
    dispatch: (action: ActionType) => void
}

export function NewPost(props: PropsType) {

    let newPostElement = React.createRef<HTMLInputElement>()

    let addPost = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value
            let action = addPostActionCreator(text);
            props.dispatch(action)
            newPostElement.current.value = ""
        }
    }

    let onPostChange = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value
            let action = updateNewPostActionCreator(text);
            props.dispatch(action)
        }
    }

    return (
        <div>
            <input
                className={s.placeholder}
                type="text"
                placeholder='your news...'
                ref={newPostElement}
                onChange={onPostChange}
            />
            <input className={s.button} type="submit" onClick={addPost}/>
        </div>
    )
}