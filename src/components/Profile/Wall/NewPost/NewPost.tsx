import React from "react";
import s from "./NewPost.module.css"

type PropsType = {
    addPost: (postText: string) => void
    newPostText: string
    updateNewPostText: (newText: string) => void
}

export function NewPost(props: PropsType) {
    let newPostElement = React.createRef<HTMLInputElement>()
    let addPost = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value
            props.addPost(text)
            props.updateNewPostText("")
        }
    }

    let onPostChange = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value
            props.updateNewPostText(text)
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
                value={props.newPostText}
            />
            <input className={s.button} type="submit" onClick={addPost}/>
        </div>
    )
}